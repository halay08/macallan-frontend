import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import ConceptLogo from './assets/concept.png';
import { ReactComponent as PrevButtonSvg } from './assets/prev.svg';
import { ReactComponent as NextButtonSvg } from './assets/next.svg';
import { ReactComponent as MoreButtonSvg } from './assets/more.svg';
import { FOOTER_TEXT } from 'app/helpers/constants';

interface FooterProps {
  className: string;
  showPrevButton: boolean;
  showNextButton: boolean;
  showMoreButton: boolean;
  isNextButtonDisable: boolean;
  nextButtonHandler: Function;
  prevButtonHandler: Function;
}

export const FooterMobile: React.FC<Partial<FooterProps>> = ({
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
    <FooterWrapper className={`bottom-0 ${className}`}>
      <FooterInner className="bg-white flex flex-col items-center justify-between h-full font-Alternate-bold relative border-t-2 border-gray-light border-solid">
        {showPrevButton && (
          <PrevButton
            onClick={() =>
              prevButtonHandler ? prevButtonHandler() : history.goBack()
            }
            className="absolute left-5 top-4 rounded-full focus:outline-none active:outline-none"
          >
            <PrevButtonSvg className="w-8 md:w-12 m-auto" />
            <span className="text-xs md:text-lg text-secondary mt-1 leading-4">
              BACK
            </span>
          </PrevButton>
        )}

        <div className="w-5/12 mt-2">
          <img src={ConceptLogo} className="w-full" alt="concept" />
        </div>

        {showNextButton && (
          <NextButton
            onClick={() =>
              !isNextButtonDisable
                ? nextButtonHandler
                  ? nextButtonHandler()
                  : history.goForward()
                : {}
            }
            className={`absolute right-5 top-4 rounded-full focus:outline-none focus:outline-none ${
              !isNextButtonDisable ? '' : 'opacity-50 cursor-not-allowed'
            }`}
          >
            {showMoreButton ? (
              <MoreIcon className="w-8 h-8 md:w-12 md:w-12 m-auto flex">
                <MoreButtonSvg className="w-6 md:w-10 m-auto" />
              </MoreIcon>
            ) : (
              <NextButtonSvg className="w-8 md:w-12 m-auto" />
            )}
            <span className="text-xs md:text-lg text-secondary mt-1">
              {showMoreButton ? 'MORE' : 'NEXT'}
            </span>
          </NextButton>
        )}
        <div className="text-center font-primary text-sm">
          {FOOTER_TEXT.MOBILE}
        </div>
      </FooterInner>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  height: 90px;
`;
const FooterInner = styled.div``;
const PrevButton = styled.button`
  padding: 1px;
`;
const NextButton = styled.button`
  padding: 1px;
`;
const MoreIcon = styled.div`
  border-radius: 50%;
  background: #a4a4a3;
`;
