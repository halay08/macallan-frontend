import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import ConceptLogo from './assets/concept.png';
import { ReactComponent as PrevButtonSvg } from './assets/prev.svg';
import { ReactComponent as NextButtonSvg } from './assets/next.svg';

interface FooterProps {
  className: string;
  showPrevButton: boolean;
  showNextButton: boolean;
  isNextButtonDisable: boolean;
  nextButtonHandler: Function;
  prevButtonHandler: Function;
}

export const FooterMobile: React.FC<Partial<FooterProps>> = ({
  className = '',
  showPrevButton = true,
  showNextButton = true,
  isNextButtonDisable = false,
  nextButtonHandler,
  prevButtonHandler
}) => {
  const history = useHistory();

  console.log({ showPrevButton });

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
            <span className="block text-xs md:text-lg text-secondary mt-1">
              BACK
            </span>
          </PrevButton>
        )}

        <div className="w-6/12">
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
            <NextButtonSvg className="w-8 md:w-12 m-auto" />
            <span className="block text-xs md:text-lg text-secondary mt-1">
              NEXT
            </span>
          </NextButton>
        )}
        <div className="text-center font-primary text-sm">
          Please savour The Macallan in moderation
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
