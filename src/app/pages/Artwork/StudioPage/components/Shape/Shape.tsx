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
} from '../../assets';
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
        <HalfCircle
          className="cursor-pointer"
          style={{ width: `${width}px` }}
        />
      )}
      {icon === ShapeType.CIRCLE && (
        <Circle className="cursor-pointer" style={{ width: `${width}px` }} />
      )}
      {icon === ShapeType.TRIANGLE && (
        <Triangle className="cursor-pointer" style={{ width: `${width}px` }} />
      )}
      {icon === ShapeType.SQUARE && (
        <Square className="cursor-pointer" style={{ width: `${width}px` }} />
      )}
      {icon === ShapeType.PENTAGON && (
        <Pentagon className="cursor-pointer" style={{ width: `${width}px` }} />
      )}
      {icon === ShapeType.CUT_SQUARE && (
        <CutSquare className="cursor-pointer" style={{ width: `${width}px` }} />
      )}
      {icon === ShapeType.HEXAGON && (
        <Hexagon className="cursor-pointer" style={{ width: `${width}px` }} />
      )}
      {icon === ShapeType.HEPTAGON && (
        <Heptagon className="cursor-pointer" style={{ width: `${width}px` }} />
      )}
      {icon === ShapeType.OCTAGON && (
        <Octagon className="cursor-pointer" style={{ width: `${width}px` }} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;
