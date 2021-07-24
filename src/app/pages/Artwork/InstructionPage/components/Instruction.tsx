import { useResponsive } from 'utils/responsive';
import { Concept } from './Concept';
import { Header } from './Header';
import { Footer } from './Footer';
import { StartButton } from './StartButton';
import { Quote } from './Quote';
import { FOOTER_TEXT } from 'app/helpers/constants';
import { useMobileFullScreen } from 'hooks';

export const Instruction = () => {
  const { isMobile } = useResponsive();
  const subTitle = isMobile ? FOOTER_TEXT.MOBILE : FOOTER_TEXT.DESKTOP;
  const { Wrapper } = useMobileFullScreen();

  return (
    <>
      <div className="box-border">
        <Wrapper
          className="flex flex-col relative z-0"
          style={{ background: '#e3e1e4' }}
        >
          <Header />
          <div className="my-auto flex flex-col items-center justify-center">
            <div className="w-2/3 md:w-1/4 mb-6 md:my-6">
              <Concept />
            </div>
            <div className="relative w-4/5 md:w-5/12 text-center md:leading-8">
              <Quote />
            </div>
            <p className="md:mb-10 mb-4 mt-4 text-lg md:text-xl font-gotham-medium tracking-wider">
              David Carson
            </p>
            <p className="text-xl md:text-2xl">Discover your creativity.</p>
            <div className="mb-4">
              <StartButton />
            </div>
            <span className="text-xl">#MacallanCreates</span>
          </div>
          <span className="mx-auto md:ml-12 md:mb-8 z-10">{subTitle}</span>
          <Footer />
        </Wrapper>
      </div>
    </>
  );
};
