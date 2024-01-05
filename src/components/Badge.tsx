import React from 'react';

type BadgeProps = {
  className: string;
  children: React.ReactNode;
};

const Badge = ({ className, children }: BadgeProps) => {
  return (
    <div
      className={`w-max rounded-xl px-5 py-1 text-center text-sm ${className}`}>
      {children}
    </div>
  );
};

export default Badge;
