import { Navigate, Outlet } from "react-router-dom";

export const useAuth = () => {
  const user = localStorage.getItem("token") ? true : false;
  return user;
};

export const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="login" />;
};
