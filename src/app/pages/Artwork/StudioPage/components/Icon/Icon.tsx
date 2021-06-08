import styled from 'styled-components/macro';
import { ISvgComponent } from 'types';

type IconProps = {
  Component: ISvgComponent;
  width?: number;
};

export const Icon: React.FC<IconProps> = ({ Component, width = 35 }) => {
  return (
    <Wrapper className="flex flex-row items-center justify-between">
      <Component className="cursor-pointer" style={{ width: `${width}px` }} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
