import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* <Route
        path="register"
        element={
          <RestrictedRoute redirectTo="/contacts">
            <RegisterPage />
          </RestrictedRoute>
        }
      /> */}
    </Routes>
  );
}

export default App;
