import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import RecommendedPage from "./pages/RecommendedPage/RecommendedPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
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
        path="/recommended"
        element={
          <PrivateRoute redirectTo="/login">
            <RecommendedPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/"
        element={
          <PrivateRoute redirectTo="/login">
            <Layout />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
