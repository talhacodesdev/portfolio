import React, { type ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-3xl mx-auto">{children}</div>;
};

export default MainLayout;
