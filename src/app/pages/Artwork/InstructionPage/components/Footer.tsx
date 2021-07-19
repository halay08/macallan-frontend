import bgFooter from '../assets/CYO_web-footer.png';
import bgFooterMobile from '../assets/CYO mobile-footer.png';
import { useResponsive } from 'utils/responsive';

export const Footer = ({ className }: { className?: string }) => {
  const { isMobile } = useResponsive();

  return isMobile ? (
    <div className={className}>
      <img alt="footer" className="w-full" src={bgFooterMobile} />
    </div>
  ) : (
    <div className={`w-7/12 absolute bottom-0 right-0 ${className}`}>
      <img alt="footer" className="" src={bgFooter} />
    </div>
  );
};
