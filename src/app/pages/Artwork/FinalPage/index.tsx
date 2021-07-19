import { Footer } from '../InstructionPage/components/Footer';
import { Header } from '../InstructionPage/components/Header';
import { Concept } from '../InstructionPage/components/Concept';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import ConceptNo3 from './assets/concept-no3.png';
import ConceptVirtual from './assets/concept-virtual.png';
import Subscribe from './assets/subscribe.png';
import { useResponsive } from 'utils/responsive';
import { useEffect } from 'react';

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
  const subTitle = isMobile
    ? 'Please savour The Macallan in moderation.'
    : 'Crafted without compromise. Please savour The Macallan in moderation.';

  useEffect(() => {
    if (isMobile) {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  }, [isMobile]);

  return (
    <>
      <Helmet>
        <title>Create Your Own - Final Step</title>
        <meta name="description" content="Create Your Own - Final step" />
      </Helmet>
      <div className="box-border">
        <ContentWrapper className="flex flex-col relative justify-between sm:justify-start">
          <Header />
          <div>
            {isMobile && (
              <div className="w-1/2 mx-auto sm:pt-4">
                <Concept className="w-full" />
              </div>
            )}
            <div className="sm:w-5/12 w-11/12 mx-auto sm:text-3xl max-w-screen-sm text-xl sm:pt-6 pb-4 sm:pb-20 pt-4 text-center">
              <p>Discover more about</p>
              <p className="mb-4">The Macallan and Concept No.3</p>
              {icons.map(({ icon, href }, index) => (
                <a key={index} href={href} target="_blank" rel="noreferrer">
                  <img className="" src={icon} alt={href} />
                </a>
              ))}
            </div>
            <p className="text-center sm:absolute mx-auto sm:ml-12 sm:bottom-8 md:text-lg w-full sm:w-auto text-center">
              {subTitle}
            </p>
          </div>

          <Footer className="sm:absolute bottom-0 right-0 w-full sm:w-5/12" />
        </ContentWrapper>
      </div>
    </>
  );
};

const ContentWrapper = styled.div`
  background: #e3e1e4;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
`;
