import styled from 'styled-components/macro';
import { ISvgComponent } from 'types/artwork/studio';

type ShapeProps = {
  Component: ISvgComponent;
  width?: number;
};

export const Shape: React.FC<ShapeProps> = ({ Component, width = 60 }) => {
  return (
    <Wrapper className="flex flex-row items-center justify-between">
      <Component className="cursor-pointer" style={{ width: `${width}px` }} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
