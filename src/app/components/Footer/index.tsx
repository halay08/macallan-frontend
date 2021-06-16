import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { MacallanLogo } from './MacallanLogo';
import { ReactComponent as PrevButtonSvg } from './assets/prev.svg';
import { ReactComponent as NextButtonSvg } from './assets/next.svg';
import { useResponsive } from 'utils/responsive';

interface FooterProps {
  className: string;
  showPrevButton: boolean;
  showNextButton: boolean;
  nextButtonHandler: Function;
  prevButtonHandler: Function;
}

export const Footer: React.FC<Partial<FooterProps>> = ({
  className = '',
  showPrevButton = true,
  showNextButton = true,
  nextButtonHandler,
  prevButtonHandler
}) => {
  const history = useHistory();
  const { isMobile } = useResponsive();

  return (
    <FooterWrapper className={`bottom-0 ${className}`}>
      <FooterInner className="flex flex-row items-center justify-between h-full font-Alternate-bold">
        {showPrevButton && (
          <PrevButton
            onClick={() =>
              prevButtonHandler ? prevButtonHandler() : history.goBack()
            }
            className="rounded-full focus:outline-none active:outline-none ml-5"
          >
            <PrevButtonSvg className="w-8 md:w-12 m-auto" />
            <span className="block text-xs md:text-lg text-secondary mt-1">
              BACK
            </span>
          </PrevButton>
        )}
        <MacallanLogo width={isMobile ? '180px' : '360px'} />
        <NextButton
          onClick={() =>
            showNextButton
              ? nextButtonHandler
                ? nextButtonHandler()
                : history.goForward()
              : {}
          }
          className={`rounded-full focus:outline-none focus:outline-none mr-5 ${
            showNextButton ? '' : 'opacity-50 cursor-not-allowed'
          }`}
        >
          <NextButtonSvg className="w-8 md:w-12 m-auto" />
          <span className="block text-xs md:text-lg text-secondary mt-1">
            NEXT
          </span>
        </NextButton>
      </FooterInner>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  height: 85px;
`;
const FooterInner = styled.div``;
const PrevButton = styled.button`
  padding: 1px;
`;
const NextButton = styled.button`
  padding: 1px;
`;
