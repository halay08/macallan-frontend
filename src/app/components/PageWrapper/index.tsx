import React, { ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

interface PageWrapperProps {
  children: ReactNode;
  hasHeader?: boolean;
  hasFooter?: boolean;
  showPrevButton?: boolean;
  showNextButton?: boolean;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  hasHeader = true,
  hasFooter = true,
  showPrevButton = true,
  showNextButton = true
}) => {
  return (
    <div className="box-border">
      <div className="flex flex-col">
        {hasHeader && <Header />}
        <section>{children}</section>
        {hasFooter && (
          <Footer
            showNextButton={showPrevButton}
            showPrevButton={showPrevButton}
          />
        )}
      </div>
    </div>
  );
};
