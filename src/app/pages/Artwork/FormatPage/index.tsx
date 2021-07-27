import { FormatPageDesktop } from './FormatPageDesktop';
import { FormatPageMobile } from './FormatPageMobile';
import { useResponsive } from 'utils/responsive';
import { Prompt } from 'react-router-dom';
import { RELOAD_WARNING } from 'app/helpers/constants';

export const FormatPage = () => {
  const { isMobile } = useResponsive();

  const confirmationHandler = (location, action) => {
    if (action !== 'PUSH') return true;

    if (location.pathname === '/') {
      return RELOAD_WARNING;
    }

    return true;
  };

  return (
    <>
      <Prompt message={confirmationHandler} />
      {isMobile ? <FormatPageMobile /> : <FormatPageDesktop />}
    </>
  );
};
