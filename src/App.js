import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Loader from "./components/common/Loader/Loader";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";
import LibraryPage from "./pages/LibraryPage/LibraryPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RecommendedPage from "./pages/RecommendedPage/RecommendedPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { authOperations } from "./redux/auth/authOperations";
import authSelectors from "./redux/auth/authSelectors";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.refreshAccessToken());

    if (location.pathname === "/") {
      navigate("/recommended");
    } else {
      navigate(location.pathname);
    }
  }, [dispatch, location.pathname, navigate]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        path="register"
        element={
          <RestrictedRoute redirectTo="/recommended">
            <RegisterPage />
          </RestrictedRoute>
        }
      />
      <Route
        path="login"
        element={
          <RestrictedRoute redirectTo="/recommended">
            <LoginPage />
          </RestrictedRoute>
        }
      />

      <Route
        path="/"
        element={
          <PrivateRoute redirectTo="/login">
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="/recommended" element={<RecommendedPage />} />
        <Route path="/library" element={<LibraryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
