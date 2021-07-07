import bgFooter from '../assets/CYO_web-footer.png';
import bgFooterMobile from '../assets/CYO mobile-footer.png';
import { useResponsive } from 'utils/responsive';

export const Footer = () => {
  const { isMobile } = useResponsive();

  return isMobile ? (
    <div className="">
      <img alt="footer" className="" src={bgFooterMobile} />
    </div>
  ) : (
    <div className="w-3/4 absolute bottom-0 right-0">
      <img alt="footer" className="" src={bgFooter} />
    </div>
  );
};
