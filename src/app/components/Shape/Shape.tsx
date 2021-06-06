import {
  HalfCircle,
  Circle,
  Triangle,
  Square,
  Pentagon,
  CutSquare,
  Hexagon,
  Heptagon,
  Octagon
} from './assets';
import styled from 'styled-components/macro';
import { ShapeType } from 'types/artwork/studio';

type ShapeProps = {
  icon: ShapeType;
  width?: number;
};

export const Shape: React.FC<ShapeProps> = ({ icon, width = 60 }) => {
  return (
    <Wrapper className="flex flex-row items-center justify-between">
      {icon === ShapeType.HALF_CIRCLE && (
        <HalfCircle style={{ width: `${width}px` }} />
      )}
      {icon === ShapeType.CIRCLE && <Circle style={{ width: `${width}px` }} />}
      {icon === ShapeType.TRIANGLE && (
        <Triangle style={{ width: `${width}px` }} />
      )}
      {icon === ShapeType.SQUARE && <Square style={{ width: `${width}px` }} />}
      {icon === ShapeType.PENTAGON && (
        <Pentagon style={{ width: `${width}px` }} />
      )}
      {icon === ShapeType.CUT_SQUARE && (
        <CutSquare style={{ width: `${width}px` }} />
      )}
      {icon === ShapeType.HEXAGON && (
        <Hexagon style={{ width: `${width}px` }} />
      )}
      {icon === ShapeType.HEPTAGON && (
        <Heptagon style={{ width: `${width}px` }} />
      )}
      {icon === ShapeType.OCTAGON && (
        <Octagon style={{ width: `${width}px` }} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;
