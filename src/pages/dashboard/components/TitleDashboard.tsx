import { Props } from '@/types/dash';

export const TitleDashboard = ({ children }: Props) => {
  return (
    <div style={{ position: 'fixed' }} className="">
      <h1 style={{ position: 'fixed' }} className="title-dash">
        {children}
      </h1>
    </div>
  );
};
