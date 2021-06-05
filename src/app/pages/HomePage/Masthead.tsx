import styled from 'styled-components/macro';
import { Title } from './components/Title';
import { Lead } from './components/Lead';

export function Masthead() {
  return (
    <Wrapper>
      <Title className="text-secondary">Macallan Frontend</Title>
      <Lead className="text-secondary">Welcome to Macallan Project.</Lead>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;
