import styled from 'styled-components/macro';
import { Box } from './Box';

export const PageContent = () => {
  return (
    <Wrapper>
      <Box></Box>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
