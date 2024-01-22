import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import RestrictedRoute from "./components/RestrictedRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="register"
        element={
          <RestrictedRoute redirectTo="/recommended">
            <RegisterPage />
          </RestrictedRoute>
        }
      />
    </Routes>
  );
}

export default App;
