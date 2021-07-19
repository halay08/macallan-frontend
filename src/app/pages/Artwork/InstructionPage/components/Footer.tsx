import bgFooter from '../assets/CYO_web-footer.png';
import bgFooterMobile from '../assets/CYO mobile-footer.png';
import { useResponsive } from 'utils/responsive';
import styled from 'styled-components';

export const Footer = ({ className }: { className?: string }) => {
  const { isMobile } = useResponsive();

  return isMobile ? (
    <Wrapper className={className}>
      <img
        alt="footer"
        className="w-full sm:h-auto h-full"
        src={bgFooterMobile}
      />
    </Wrapper>
  ) : (
    <div className={`w-7/12 absolute bottom-0 right-0 ${className}`}>
      <img alt="footer" className="" src={bgFooter} />
    </div>
  );
};

const Wrapper = styled.div`
  height: 80px;
`;
