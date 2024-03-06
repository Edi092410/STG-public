import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../utils/contexts/AuthProvider";
export const PrivateRoute = () => {
  const { auth } = useAuth();
  const location = useLocation();
  if (!auth) {
    return <Navigate to="/login" replace state={{ redirectTo: location }} />;
  }

  return <Outlet />;
};
