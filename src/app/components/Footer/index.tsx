import { useResponsive } from 'utils/responsive';
import { FooterMobile } from './FooterMobile';
import { FooterDesktop } from './FooterDesktop';
import styled from 'styled-components/macro';

interface FooterProps {
  className: string;
  showPrevButton: boolean;
  showNextButton: boolean;
  nextButtonHandler: Function;
  prevButtonHandler: Function;
  mainSectionHeight?: number;
}

export const Footer = (props: Partial<FooterProps>) => {
  const { isMobile } = useResponsive();
  const height = props.mainSectionHeight || 0;
  let FixedMobile = FooterMobile;
  if (height + 85 < window.innerHeight) {
    FixedMobile = styled(FooterMobile)`
      position: fixed;
      width: 100%;
    `;
  }

  return isMobile ? <FixedMobile {...props} /> : <FooterDesktop {...props} />;
};
