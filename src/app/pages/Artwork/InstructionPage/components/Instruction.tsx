import styled from 'styled-components/macro';
import { useResponsive } from 'utils/responsive';
import { Concept } from './Concept';
import { Header } from './Header';
import { Footer } from './Footer';
import { StartButton } from './StartButton';
import { Quote } from './Quote';

export const Instruction = () => {
  const { isMobile } = useResponsive();
  const subTitle = isMobile
    ? 'Please savour The Macallan in moderation.'
    : 'Crafted without compromise. Please savour The Macallan in moderation.';

  return (
    <>
      <div className="box-border">
        <ContentWrapper className="flex flex-col h-auto min-h-screen relative z-0">
          <Header />
          <div className="mb-auto flex flex-col items-center justify-center">
            <div className="w-2/3 md:w-1/4 my-10 md:mt-0">
              <Concept />
            </div>
            <div className="relative w-4/5 md:w-1/2 text-center text-xl md:text-4xl">
              <Quote />
            </div>
            <p className="mb-10 text-lg md:text-2xl font-Alternate-bold">
              David Carson
            </p>
            <p className="text-xl md:text-4xl">Discover your creativity.</p>
            <div className="mb-4">
              <StartButton />
            </div>
            <span className="text-xl">#MacallanCreates</span>
          </div>
          <span className="mx-auto md:ml-12 md:mb-12 md:text-lg">
            {subTitle}
          </span>
          <Footer />
        </ContentWrapper>
      </div>
    </>
  );
};

const ContentWrapper = styled.div`
  background: #e3e1e4;
`;
