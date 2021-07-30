import { FormatPageDesktop } from './FormatPageDesktop';
import { FormatPageMobile } from './FormatPageMobile';
import { useResponsive } from 'utils/responsive';
import { Prompt } from 'react-router-dom';
import { RELOAD_WARNING } from 'app/helpers/constants';
import { useLandscape } from 'hooks';
import { WarningPopup } from '../Popup';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetStage } from 'redux/actions/studio';

export const FormatPage = () => {
  const { isMobile } = useResponsive();
  const { isOrientation } = useLandscape();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetStage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const confirmationHandler = (location, action) => {
    if (action !== 'PUSH') return true;

    if (location.pathname === '/') {
      return RELOAD_WARNING;
    }

    return true;
  };

  return (
    <>
      <WarningPopup
        message="Oops! We don't support the landscape view."
        isOpen={isOrientation}
      />
      <Prompt message={confirmationHandler} />
      {isMobile ? <FormatPageMobile /> : <FormatPageDesktop />}
    </>
  );
};
