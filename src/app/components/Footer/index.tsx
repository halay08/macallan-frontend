import { useResponsive } from 'utils/responsive';
import { FooterMobile } from './FooterMobile';
import { FooterDesktop } from './FooterDesktop';

interface FooterProps {
  className: string;
  showPrevButton: boolean;
  showNextButton: boolean;
  nextButtonHandler: Function;
  prevButtonHandler: Function;
}

export const Footer = (props: Partial<FooterProps>) => {
  const { isMobile } = useResponsive();

  return isMobile ? <FooterMobile {...props} /> : <FooterDesktop {...props} />;
};
