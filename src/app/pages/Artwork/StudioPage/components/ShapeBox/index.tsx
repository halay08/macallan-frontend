import { ShapeBoxDesktop } from './ShapeBoxDesktop';
import { ShapeBoxMobile } from './ShapeBoxMobile';
import { useResponsive } from 'utils/responsive';

export const ShapeBox = () => {
  const { isMobile } = useResponsive();
  return isMobile ? <ShapeBoxMobile /> : <ShapeBoxDesktop />;
};
