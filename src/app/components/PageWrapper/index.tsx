import React, { ReactNode, useEffect, useRef, useState } from 'react';
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
  const ref = useRef<HTMLInputElement>(null);
  const [mainSectionHeight, setMainSectionHeight] = useState<number>(
    window.innerHeight
  );

  useEffect(() => {
    setMainSectionHeight(ref?.current?.clientHeight || 0);
  }, [ref]);

  return isMobile ? (
    <div className="box-border" ref={ref}>
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
      <Header />
      <StageContainer className="flex flex-row h-auto">
        <div className="flex flex-col w-3/6 border-r-1 border-solid border-gray-light justify-center">
          {StageFrame}
        </div>
        <ContentWrapper className="flex flex-col w-3/6">
          <section className="h-full">{children}</section>
        </ContentWrapper>
      </StageContainer>
      <Footer
        mainSectionHeight={mainSectionHeight}
        nextButtonHandler={nextButtonHandler}
        prevButtonHandler={prevButtonHandler}
        showNextButton={showNextButton}
        showPrevButton={showPrevButton}
      />
    </div>
  );
};

const ContentWrapper = styled.div`
  box-shadow: inset 15px 0px 15px -15px #ccc;
  border-left: 1px solid #bbb;
`;

const StageContainer = styled.div`
  min-height: calc(100vh - 9rem - 120px);
`;
