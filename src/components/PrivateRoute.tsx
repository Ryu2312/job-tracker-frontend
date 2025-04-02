import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({
  isAuthenticated,
  redirectPath,
}: {
  isAuthenticated: boolean;
  redirectPath: string;
}) {
  console.log(isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} replace />;
}

export default PrivateRoute;
