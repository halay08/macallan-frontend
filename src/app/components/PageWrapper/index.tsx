import React, { ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

interface PageWrapperProps {
  children: ReactNode;
  hasHeader?: boolean;
  hasFooter?: boolean;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  hasHeader = true,
  hasFooter = true
}) => {
  return (
    <div className="box-border">
      <div className="flex flex-col">
        {hasHeader && <Header />}
        <section className="flex items-center justify-center min-h-content">
          {children}
        </section>
        {hasFooter && <Footer />}
      </div>
    </div>
  );
};
