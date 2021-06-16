import { Header as HeaderMobile } from './Mobile';
import { HeaderDesktop } from './Desktop';
import { useResponsive } from 'utils/responsive';

export const Header = () => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return <HeaderMobile />;
  }
  return <HeaderDesktop />;
};
