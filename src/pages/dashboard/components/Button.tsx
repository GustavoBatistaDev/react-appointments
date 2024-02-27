import { ReactNode } from 'react';

export const Button = ({
  children,
  className,
  type,
}: {
  children: ReactNode;
  className: string;
  type?: 'button' | 'submit';
}) => {
  return (
    <button type={type ?? 'button'} className={`btn ${className}`}>
      {children}
    </button>
  );
};
