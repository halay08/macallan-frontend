import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { MacallanLogo } from './MacallanLogo';
import background from './assets/footer-desktop.png';
import { ReactComponent as PrevButtonSvg } from './assets/prev.svg';
import { ReactComponent as NextButtonSvg } from './assets/next.svg';

interface FooterProps {
  className: string;
  showPrevButton: boolean;
  showNextButton: boolean;
  nextButtonHandler: Function;
  prevButtonHandler: Function;
}

export const FooterDesktop: React.FC<Partial<FooterProps>> = ({
  className = '',
  showPrevButton = true,
  showNextButton = true,
  nextButtonHandler,
  prevButtonHandler
}) => {
  const history = useHistory();

  return (
    <FooterWrapper className={`bottom-0 relative ${className}`}>
      <ButtonWrapper className="flex justify-center w-3/6 absolute right-0 font-Alternate-bold">
        {showPrevButton && (
          <PrevButton
            onClick={() =>
              prevButtonHandler ? prevButtonHandler() : history.goBack()
            }
            className="rounded-full focus:outline-none active:outline-none mx-12"
          >
            <PrevButtonSvg className="w-10 m-auto" />
            <span className="block text-secondary mt-1">BACK</span>
          </PrevButton>
        )}
        <NextButton
          onClick={() =>
            showNextButton
              ? nextButtonHandler
                ? nextButtonHandler()
                : history.goForward()
              : {}
          }
          className={`rounded-full focus:outline-none focus:outline-none mx-12 ${
            showNextButton ? '' : 'opacity-50 cursor-not-allowed'
          }`}
        >
          <NextButtonSvg className="w-10 m-auto" />
          <span className="block text-secondary mt-1">NEXT</span>
        </NextButton>
      </ButtonWrapper>
      <FooterInner className="flex flex-row items-center justify-between h-full font-Alternate-bold">
        <MacallanLogo className="ml-14" width="360px" />
        <img
          alt="footer"
          className="absolute right-0 h-full"
          src={background}
        />
      </FooterInner>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  height: 120px;
`;
const FooterInner = styled.div``;
const PrevButton = styled.button`
  padding: 1px;
`;
const NextButton = styled.button`
  padding: 1px;
`;
const ButtonWrapper = styled.div`
  bottom: 120px;
`;
