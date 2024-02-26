import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
};

export const AuthTitle = ({ children }: Props) => {
  return <h1 className="main-auth-title">{children}</h1>;
};
