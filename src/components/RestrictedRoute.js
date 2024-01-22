import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "../redux/auth/authSelectors";

const RestrictedRoute = ({ children, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};

export default RestrictedRoute;
