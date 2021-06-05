import styled from 'styled-components/macro';

export const PageContent = () => {
  return <Wrapper>Hello</Wrapper>;
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;
