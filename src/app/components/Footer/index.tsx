import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { MacallanLogo } from './MacallanLogo';
import { ReactComponent as PrevButtonSvg } from './assets/prev.svg';
import { ReactComponent as NextButtonSvg } from './assets/next.svg';

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

  return (
    <FooterWrapper className={`w-screen bg-white fixed bottom-0 ${className}`}>
      <FooterInner className="flex flex-row items-center justify-between h-full">
        {showPrevButton && (
          <PrevButton
            onClick={() =>
              prevButtonHandler ? prevButtonHandler() : history.goBack()
            }
            className="rounded-full focus:outline-none active:outline-none ml-5"
          >
            <PrevButtonSvg className="w-8 m-auto" />
            <span className="block text-xs text-secondary mt-1">BACK</span>
          </PrevButton>
        )}
        <MacallanLogo />
        {showNextButton && (
          <NextButton
            onClick={() =>
              nextButtonHandler ? nextButtonHandler() : history.goForward()
            }
            className="rounded-full focus:outline-none focus:outline-none mr-5"
          >
            <NextButtonSvg className="w-8 m-auto" />
            <span className="block text-xs text-secondary mt-1">NEXT</span>
          </NextButton>
        )}
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
