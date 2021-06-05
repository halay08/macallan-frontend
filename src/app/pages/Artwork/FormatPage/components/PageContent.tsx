import styled from 'styled-components/macro';
import { Box } from '.';

export const PageContent = () => {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
