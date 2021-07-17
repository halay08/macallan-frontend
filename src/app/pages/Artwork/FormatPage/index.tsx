import { FormatPageDesktop } from './FormatPageDesktop';
import { FormatPageMobile } from './FormatPageMobile';
import { useResponsive } from 'utils/responsive';
import { Prompt } from 'react-router-dom';

export const FormatPage = () => {
  const { isMobile } = useResponsive();

  const confirmationHandler = (location, action) => {
    if (action !== 'PUSH') return true;

    if (location.pathname === '/') {
      return 'Are you sure? Your work will be lost!';
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
