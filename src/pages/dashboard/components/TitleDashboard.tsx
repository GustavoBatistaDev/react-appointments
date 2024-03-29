import { ReactNode } from "react";

export const TitleDashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <h1 className="title-dash">{children}</h1>
    </div>
  );
};
