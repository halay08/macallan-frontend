import { SizeBox as SizeBoxMobile } from './SizeBox';
import { SizeBoxDesktop } from './SizeBoxDesktop';
import { useResponsive } from 'utils/responsive';

export const SizeBox = () => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return <SizeBoxMobile />;
  }
  return <SizeBoxDesktop />;
};
