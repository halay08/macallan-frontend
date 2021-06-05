import React, { ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="box-border">
      <div className="flex flex-col">
        <Header />
        <section className="flex items-center justify-center min-h-content">
          {children}
        </section>
        <Footer />
      </div>
    </div>
  );
};
