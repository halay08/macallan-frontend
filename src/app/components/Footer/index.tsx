import { useResponsive } from 'utils/responsive';
import { FooterMobile } from './FooterMobile';
import { FooterDesktop } from './FooterDesktop';
import styled from 'styled-components/macro';

interface FooterProps {
  className: string;
  showPrevButton: boolean;
  showNextButton: boolean;
  showMoreButton: boolean;
  isNextButtonDisable: boolean;
  nextButtonHandler: Function;
  prevButtonHandler: Function;
  mainSectionHeight?: number;
}

export const Footer = (props: Partial<FooterProps>) => {
  const { isMobile } = useResponsive();
  const height = props.mainSectionHeight || 0;
  let FixedMobile = FooterMobile;
  if (height < window.innerHeight) {
    FixedMobile = styled(FooterMobile)`
      position: fixed;
      width: 100%;
    `;
  }

  return isMobile ? (
    <>
      <FixedMobile {...props} />
      {height < window.innerHeight && <Spacing />}
    </>
  ) : (
    <FooterDesktop {...props} />
  );
};

const Spacing = styled.div`
  height: 90px;
`;
