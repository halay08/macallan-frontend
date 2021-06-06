import { ReactComponent as LeftButtonSvg } from './assets/left-btn.svg';
import { ReactComponent as RightButtonSvg } from './assets/right-btn.svg';
import styled from 'styled-components/macro';

interface NagivationProps {
  className?: string;
}

export const Nagivation: React.FC<NagivationProps> = ({ className = '' }) => {
  return (
    <Wrapper className={`${className} fixed bottom-0 w-screen z-50`}>
      <LeftButton />
      <RightButton />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const LeftButton = styled(LeftButtonSvg)``;
const RightButton = styled(RightButtonSvg)``;
