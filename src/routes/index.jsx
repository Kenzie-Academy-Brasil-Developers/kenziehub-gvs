import { Routes, Route} from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { ErroPage } from "../pages/ErroPage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProtectRoutes } from "./ProtectRoutes";
import { PublicRoutes } from "./PublicRoutes";
export function RoutesMain() {
  return (
    <Routes>
      <Route element={<PublicRoutes/>}>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Route>
      <Route element={<ProtectRoutes />}>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Route>
      <Route path="*" element={<ErroPage />} />
    </Routes>
  );
}
