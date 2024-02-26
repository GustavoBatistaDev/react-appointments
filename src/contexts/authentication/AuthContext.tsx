// AuthContext.tsx
import { ReactNode, createContext, useEffect, useState } from "react";

import Cookies from "js-cookie";

import { loginUser } from "../../services/authentication/api.services";
import { myToast } from "../../utils/toasts";
import { loginInputs } from "../../types/loginInputs";
import { ResponseLogin } from "../../types/auth";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (data: loginInputs) => Promise<void | ResponseLogin>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const jwtToken = Cookies.get("jwtToken");

    if (jwtToken) {
      console.log(jwtToken);
      console.log(isAuthenticated);
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  const logout = () => {
    setIsAuthenticated(false);
  };

  const login = async (data: loginInputs) => {
    const result = await loginUser({ email: data.email, senha: data.senha });
    const expirationDate = new Date();

    if (!result) {
      myToast(
        true,
        "Email ou senha inválidos, ou o email ainda não foi verificado."
      );

      return;
    }

    myToast(false, `Seja bem vindo(a), ${result.user.nome}`);

    setIsAuthenticated(true);
    Cookies.set("jwtToken", result.token, {
      expires: expirationDate.getDate() + 7,
    });
    return result;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
