import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { ErroPage } from "../pages/ErroPage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
export function RoutesMain() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  function userLogout() {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    navigate("/");
  }

  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login setUser={setUser} />} />
      <Route
        path="/dashboard"
        element={<Dashboard user={user} userLogout={userLogout} />}
      />
      <Route path="*" element={<ErroPage />} />
    </Routes>
  );
}
