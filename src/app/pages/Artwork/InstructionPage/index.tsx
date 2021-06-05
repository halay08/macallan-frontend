import { Instruction } from 'app/components/Artwork';
import styled from 'styled-components/macro';

export const InstructionPage = () => {
  return (
    <Wrapper>
      <Instruction />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;
