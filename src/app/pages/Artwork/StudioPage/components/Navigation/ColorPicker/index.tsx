import { ColorPickerDesktop } from './ColorPickerDesktop';
import { ColorPickerMobile } from './ColorPickerMobile';
import { useResponsive } from 'utils/responsive';

export const ColorPicker = () => {
  const { isMobile } = useResponsive();
  return isMobile ? <ColorPickerMobile /> : <ColorPickerDesktop />;
};
