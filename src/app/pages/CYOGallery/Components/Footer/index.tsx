import { ReactComponent as LogoSvg } from './assets/logo.svg';
import { useResponsive } from 'utils/responsive';
import styled from 'styled-components';
import { FOOTER_TEXT } from 'app/helpers/constants';

export const Footer = () => {
  const { isMobile } = useResponsive();
  const footerText = isMobile ? FOOTER_TEXT.MOBILE : FOOTER_TEXT.DESKTOP;

  return (
    <>
      <div className="w-full fixed z-10 bottom-0 flex flex-row justify-between items-center px-4 md:px-20 bg-white border-t border-solid border-gray-light">
        <p className="text-xs md:text-xl">{footerText}</p>
        <LogoSvg className="w-2/5 md:w-auto max-h-20" />
      </div>
      <Spacing className="h-10 md:h-20" />
    </>
  );
};

const Spacing = styled.div``;
