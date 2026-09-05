import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/ContextAuth";

export default function RequireAuth() {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div className="p-10 text-center text-gray-600">Loading account...</div>;
  return user ? <Outlet /> : <Navigate to="/login" replace state={{ from: location.pathname }} />;
}