import { FormatPageDesktop } from './FormatPageDesktop';
import { FormatPageMobile } from './FormatPageMobile';
import { useResponsive } from 'utils/responsive';

export const FormatPage = () => {
  const { isMobile } = useResponsive();

  return isMobile ? <FormatPageMobile /> : <FormatPageDesktop />;
};
