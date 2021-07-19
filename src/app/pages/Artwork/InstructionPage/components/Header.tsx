import bgHeader from '../assets/CYO_web-header.png';
import bgHeaderMobile from '../assets/CYO mobile-header.png';
import { useResponsive } from 'utils/responsive';
import styled from 'styled-components';

export const Header = () => {
  const { isMobile } = useResponsive();

  return isMobile ? (
    <Wrapper className="">
      <img
        alt="header"
        className="w-full sm:h-auto h-full"
        src={bgHeaderMobile}
      />
    </Wrapper>
  ) : (
    <div className="w-7/12">
      <img alt="header" className="w-full" src={bgHeader} />
    </div>
  );
};

const Wrapper = styled.div`
  height: 80px;
`;
