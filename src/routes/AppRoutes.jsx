import { Navigate, Route, Routes } from "react-router-dom";
import { appRoutes } from "./routeConfig.jsx";

function AppRoutes() {
  return (
    <Routes>
      {appRoutes.map(({ path, element: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default AppRoutes;
