import { ReactNode } from 'react';
import styled from 'styled-components/macro';

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return <Wrapper className="mx-auto px-4 sm:px-20">{children}</Wrapper>;
};

export const Wrapper = styled.div`
  max-width: 90rem;
`;
