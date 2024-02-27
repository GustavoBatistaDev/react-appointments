import { ReactNode } from "react";

export const Column = ({ children }: { children: ReactNode }) => {
  return <div className="col">{children}</div>;
};
