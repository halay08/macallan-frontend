import React, { ReactNode } from 'react';
import { NavBar } from '../NavBar';

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="box-border">
      <div className="flex flex-col">
        <header>
          <NavBar />
        </header>
        <section className="flex items-center justify-center">
          {children}
        </section>
      </div>
    </div>
  );
};
