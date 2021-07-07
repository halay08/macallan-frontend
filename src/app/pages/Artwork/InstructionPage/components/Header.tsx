import bgHeader from '../assets/CYO_web-header.png';
import bgHeaderMobile from '../assets/CYO mobile-header.png';
import { useResponsive } from 'utils/responsive';

export const Header = () => {
  const { isMobile } = useResponsive();

  return isMobile ? (
    <div className="">
      <img alt="header" className="" src={bgHeaderMobile} />
    </div>
  ) : (
    <div className="w-3/4">
      <img alt="header" className="" src={bgHeader} />
    </div>
  );
};
