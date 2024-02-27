export const Input = ({
  type,
  className,
}: {
  type: string;
  className?: string;
}) => {
  return <input className={`input-dash ${className}`} type={type} />;
};
