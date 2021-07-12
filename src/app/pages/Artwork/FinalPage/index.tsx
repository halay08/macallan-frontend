import { Footer } from '../InstructionPage/components/Footer';
import { Header } from '../InstructionPage/components/Header';
import { Concept } from '../InstructionPage/components/Concept';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import ConceptNo3 from './assets/concept-no3.png';
import ConceptVirtual from './assets/concept-virtual.png';
import Subscribe from './assets/subscribe.png';
import { useResponsive } from 'utils/responsive';

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
  return (
    <>
      <Helmet>
        <title>Create Your Own - Final Step</title>
        <meta name="description" content="Create Your Own - Final step" />
      </Helmet>
      <div className="box-border">
        <ContentWrapper className="flex flex-col relative min-h-screen">
          <Header />
          {isMobile && (
            <div className="w-1/2 mx-auto pt-4">
              <Concept className="w-full" />
            </div>
          )}
          <div className="sm:w-5/12 w-11/12 mx-auto sm:text-3xl max-w-screen-sm text-xl pt-6 pb-36 sm:pb-20 text-center">
            <p>Discover more about</p>
            <p className="mb-4">The Macallan and Concept No.3</p>
            {icons.map(({ icon, href }, index) => (
              <a key={index} href={href} target="_blank" rel="noreferrer">
                <img className="" src={icon} alt={href} />
              </a>
            ))}
          </div>
          <span className="absolute mx-auto bottom-28 sm:ml-12 sm:bottom-8 md:text-lg w-full sm:w-auto text-center">
            {subTitle}
          </span>
          <Footer className="absolute bottom-0 right-0" />
        </ContentWrapper>
      </div>
    </>
  );
};

const ContentWrapper = styled.div`
  background: #e3e1e4;
`;
