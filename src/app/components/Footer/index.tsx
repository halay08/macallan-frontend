import styled from 'styled-components/macro';
import { MacallanLogo } from './MacallanLogo';
import { ReactComponent as PrevButtonSvg } from './assets/prev.svg';
import { ReactComponent as NextButtonSvg } from './assets/next.svg';

interface FooterProps {
  className: string;
  showPrevButton: boolean;
  showNextButton: boolean;
}

export const Footer: React.FC<Partial<FooterProps>> = ({
  className = '',
  showPrevButton = true,
  showNextButton = true
}) => {
  return (
    <FooterWrapper className={`fixed bottom-0 w-screen ${className}`}>
      <FooterInner className="flex flex-row items-center justify-between h-full">
        {showPrevButton && (
          <PrevButton className="rounded-full focus:outline-none focus:bg-primary ml-5">
            <PrevButtonSvg className="w-8" />
          </PrevButton>
        )}
        <MacallanLogo />
        {showNextButton && (
          <NextButton className="rounded-full focus:outline-none focus:bg-primary mr-5">
            <NextButtonSvg className="w-8" />
          </NextButton>
        )}
      </FooterInner>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  height: 70px;
`;
const FooterInner = styled.div``;
const PrevButton = styled.button`
  padding: 1px;
`;
const NextButton = styled.button`
  padding: 1px;
`;
