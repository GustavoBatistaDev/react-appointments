import { ReactNode } from "react";

export const Label = ({ children }: { children: ReactNode }) => {
  return (
    <label className="label" htmlFor="input-email">
      {children}
    </label>
  );
};
