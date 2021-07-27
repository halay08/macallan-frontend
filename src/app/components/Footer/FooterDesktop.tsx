import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import background from './assets/footer-desktop.png';
import { ReactComponent as PrevButtonSvg } from './assets/prev.svg';
import { ReactComponent as NextButtonSvg } from './assets/next.svg';
import { ReactComponent as MoreButtonSvg } from './assets/more.svg';
import { FOOTER_TEXT } from 'app/helpers/constants';

interface FooterProps {
  className: string;
  showPrevButton: boolean;
  showNextButton: boolean;
  isNextButtonDisable: boolean;
  nextButtonHandler: Function;
  prevButtonHandler: Function;
  showMoreButton: boolean;
}

export const FooterDesktop: React.FC<Partial<FooterProps>> = ({
  className = '',
  showPrevButton = true,
  showNextButton = true,
  showMoreButton = false,
  isNextButtonDisable = false,
  nextButtonHandler,
  prevButtonHandler
}) => {
  const history = useHistory();

  return (
    <FooterWrapper className={`bottom-0 relative ${className}`}>
      <ButtonWrapper className="flex justify-center w-3/6 absolute right-0 z-10 font-Alternate-bold">
        {showPrevButton && (
          <PrevButton
            onClick={() =>
              prevButtonHandler ? prevButtonHandler() : history.goBack()
            }
            className="focus:outline-none active:outline-none mx-12"
          >
            <PrevButtonSvg className="w-10 m-auto" />
            <span className="text-secondary mt-1">BACK</span>
          </PrevButton>
        )}
        {showNextButton && (
          <NextButton
            onClick={() =>
              !isNextButtonDisable
                ? nextButtonHandler
                  ? nextButtonHandler()
                  : history.goForward()
                : {}
            }
            className={`focus:outline-none focus:outline-none mx-12 ${
              !isNextButtonDisable ? '' : 'opacity-50 cursor-not-allowed'
            }`}
          >
            {showMoreButton ? (
              <MoreIcon className="w-10 h-10 m-auto flex">
                <MoreButtonSvg className="w-7  m-auto" />
              </MoreIcon>
            ) : (
              <NextButtonSvg className="w-10 m-auto" />
            )}
            <span className="text-secondary mt-1">
              {showMoreButton ? 'MORE' : 'NEXT'}
            </span>
          </NextButton>
        )}
      </ButtonWrapper>
      <FooterInner className="flex flex-row items-center justify-between h-full font-Alternate-bold">
        <Message className="font-primary z-10">{FOOTER_TEXT.DESKTOP}</Message>
        <img
          alt="footer"
          className="absolute right-0 bottom-0"
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
  bottom: 130px;
`;
const Message = styled.div`
  margin-left: 8%;
`;
const MoreIcon = styled.div`
  border-radius: 50%;
  background: #a4a4a3;
`;
