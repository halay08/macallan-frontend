import { FormatPageDesktop } from './FormatPageDesktop';
import { FormatPageMobile } from './FormatPageMobile';
import { useResponsive } from 'utils/responsive';
import { useEffect } from 'react';

export const FormatPage = () => {
  const { isMobile } = useResponsive();

  useEffect(() => {
    const confirmation = ev => {
      ev.returnValue = 'Are you sure? Your work will be lost!';
    };
    window.addEventListener('beforeunload', confirmation);

    return () => {
      window.removeEventListener('beforeunload', confirmation);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isMobile ? <FormatPageMobile /> : <FormatPageDesktop />;
};
