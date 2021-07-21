import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import bgStart from '../assets/CYO_start.png';

export const StartButton = () => {
  const history = useHistory();

  const gotoFormatPage = () => {
    history.push('/artwork/format');
  };

  return (
    <WrapperStartButton
      className="relative focus:outline-none"
      onClick={() => gotoFormatPage()}
    >
      <Background alt="start" className="h-14 md:h-16" src={bgStart} />
    </WrapperStartButton>
  );
};

const Background = styled.img`
  z-index: -1;
`;

const WrapperStartButton = styled.button`
  width: max-content;
`;
