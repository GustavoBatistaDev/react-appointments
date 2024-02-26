import { Routes, Route, useNavigate } from "react-router-dom";
import Signup from "../pages/signup/Signup";
import Signin from "../pages/signin/Signin";
import { useAuth } from "../hooks/authentication/useAuth";
import { useState, useEffect, ReactNode } from "react";
import { Activated } from "../pages/activated/Activated";
import RecoverPassword from "../pages/recover/RecoverPassword";
import ChangePassword from "../pages/change/ChangePassword";
import DashboardLayout from "../pages/dashboard/DashboardLayout";

const Private = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && isAuthChecked) {
      navigate("/entrar");
    }
  }, [isAuthenticated, isAuthChecked, navigate]);

  useEffect(() => {
    setIsAuthChecked(true);
  }, []);

  return isAuthenticated && isAuthChecked ? children : null;
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Private>
            <DashboardLayout />
          </Private>
        }
      />
      <Route path="/entrar" element={<Signin />} />
      <Route path="/registrar" element={<Signup />} />
      <Route path="/verificar" element={<Activated />} />
      <Route path="/recuperar" element={<RecoverPassword />} />
      <Route path="/alterar-senha/:token" element={<ChangePassword />} />
    </Routes>
  );
};
