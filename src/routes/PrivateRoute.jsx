import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../utils/contexts/AuthProvider";
export const PrivateRoute = () => {
  const { auth } = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
