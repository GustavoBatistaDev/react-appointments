import { Props } from "@/types/dash";

export const Label = ({ children }: Props) => {
  return (
    <label className="label-dash" htmlFor="">
      {children}
    </label>
  );
};
