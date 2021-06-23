import React, { ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styled from 'styled-components/macro';
import { useResponsive } from 'utils/responsive';

interface PageWrapperProps {
  children: ReactNode;
  StageFrame?: JSX.Element;
  hasHeader?: boolean;
  hasFooter?: boolean;
  showPrevButton?: boolean;
  showNextButton?: boolean;
  nextButtonHandler?: Function;
  prevButtonHandler?: Function;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  StageFrame,
  hasHeader = true,
  hasFooter = true,
  showPrevButton = true,
  showNextButton = true,
  nextButtonHandler,
  prevButtonHandler
}) => {
  const { isMobile } = useResponsive();

  return isMobile ? (
    <div className="box-border">
      <div className="flex flex-col">
        {hasHeader && <Header />}
        {StageFrame}
        <section>{children}</section>
        {hasFooter && (
          <Footer
            nextButtonHandler={nextButtonHandler}
            prevButtonHandler={prevButtonHandler}
            showNextButton={showNextButton}
            showPrevButton={showPrevButton}
          />
        )}
      </div>
    </div>
  ) : (
    <div className="box-border">
      <div className="flex flex-row h-auto min-h-screen	">
        <div className="flex flex-col w-3/6 border-r-1 border-solid border-gray-light pb-8">
          <Header />
          {StageFrame}
        </div>
        <ContentWrapper className="flex flex-col w-3/6">
          <section className="h-full">{children}</section>
          <Footer
            className="px-4 mb-4"
            nextButtonHandler={nextButtonHandler}
            prevButtonHandler={prevButtonHandler}
            showNextButton={showNextButton}
            showPrevButton={showPrevButton}
          />
        </ContentWrapper>
      </div>
    </div>
  );
};

const ContentWrapper = styled.div`
  box-shadow: inset 15px 0px 15px -10px #ccc;
  border-left: 1px solid #bbb;
`;
