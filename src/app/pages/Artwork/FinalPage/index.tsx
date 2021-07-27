import { Footer } from '../InstructionPage/components/Footer';
import { Header } from '../InstructionPage/components/Header';
import { Concept } from '../InstructionPage/components/Concept';
import { Helmet } from 'react-helmet-async';
import ConceptNo3 from './assets/concept-no3.png';
import ConceptVirtual from './assets/concept-virtual.png';
import Subscribe from './assets/subscribe.png';
import { useResponsive } from 'utils/responsive';
import { FOOTER_TEXT } from 'app/helpers/constants';
import { useMobileFullScreen } from 'hooks';

const icons = [
  {
    href: 'https://www.themacallan.com/en/concept-no3-virtual-experience-direct',
    icon: ConceptVirtual
  },
  {
    href: 'https://www.themacallan.com/en/whisky/single-malts/travel-retail-exclusives/the-macallan-concept-series/concept-no-3',
    icon: ConceptNo3
  },
  { href: 'https://www.themacallan.com/newsletter', icon: Subscribe }
];

export const FinalPage = () => {
  const { isMobile } = useResponsive();
  const subTitle = isMobile ? FOOTER_TEXT.MOBILE : FOOTER_TEXT.DESKTOP;

  const { Wrapper } = useMobileFullScreen();

  return (
    <>
      <Helmet>
        <title>Create Your Own - Final Step</title>
        <meta name="description" content="Create Your Own - Final step" />
      </Helmet>
      <div className="box-border">
        <Wrapper
          className="flex flex-col relative justify-between sm:justify-start"
          style={{ background: '#e3e1e4' }}
        >
          <Header />
          <div>
            {isMobile && (
              <div className="w-1/2 mx-auto sm:pt-4">
                <Concept className="w-full" />
              </div>
            )}
            <div className="sm:w-4/12 w-11/12 mx-auto sm:text-3xl max-w-screen-sm text-xl sm:pt-6 pb-4 sm:pb-20 pt-4 text-center">
              <p>Discover more about</p>
              <p className="sm:mb-4 mb-2">The Macallan and Concept No.3</p>
              {icons.map(({ icon, href }, index) => (
                <a key={index} href={href} target="_blank" rel="noreferrer">
                  <img className="" src={icon} alt={href} />
                </a>
              ))}
            </div>
            <p className="text-center sm:absolute mx-auto sm:ml-12 sm:bottom-8 w-full sm:w-auto z-10">
              {subTitle}
            </p>
          </div>

          <Footer className="sm:absolute bottom-0 right-0 w-full sm:w-8/12" />
        </Wrapper>
      </div>
    </>
  );
};
