import styled from 'styled-components/macro';
import { Shape } from './Shape';
import { AppState } from 'redux/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Konva from 'konva';
import { ShapeType } from 'types/artwork/studio';
import { drawSvg } from 'app/helpers/konvaShape';

export const ShapeBox = () => {
  const { stage } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const [layer, setLayer] = useState(new Konva.Layer());
  const [, setTransformer] = useState(new Konva.Transformer());
  const assetPath = '/assets/shapes';

  const drawShape = (shape: ShapeType) => {
    switch (shape) {
      case ShapeType.HALF_CIRCLE:
        drawSvg(`${assetPath}/half-circle.svg`, layer, {
          name: 'half-circle'
        });
        break;
      case ShapeType.CIRCLE:
        drawSvg(`${assetPath}/circle.svg`, layer, {
          name: 'circle'
        });
        break;
      case ShapeType.TRIANGLE:
        drawSvg(`${assetPath}/triangle.svg`, layer, {
          name: 'triangle'
        });
        break;
      case ShapeType.CUT_SQUARE:
        drawSvg(`${assetPath}/cut-square.svg`, layer, {
          name: 'cut-square'
        });
        break;
      case ShapeType.PENTAGON:
        drawSvg(`${assetPath}/pentagon.svg`, layer, {
          name: 'pentagon'
        });
        break;
      case ShapeType.HEXAGON:
        drawSvg(`${assetPath}/hexagon.svg`, layer, {
          name: 'hexagon'
        });
        break;
      case ShapeType.HEPTAGON:
        drawSvg(`${assetPath}/heptagon.svg`, layer, {
          name: 'hexagon'
        });
        break;
      case ShapeType.OCTAGON:
        drawSvg(`${assetPath}/octagon.svg`, layer, {
          name: 'hexagon'
        });
        break;
      default:
        drawSvg(`${assetPath}/square.svg`, layer, {
          name: 'square'
        });
    }
  };

  useEffect(() => {
    if (stage.name !== undefined) {
      var initiatingLayer = new Konva.Layer();
      var initiatingTransformer = new Konva.Transformer();

      // Add layer to stage
      stage.add(initiatingLayer);

      // Add transformer to layer
      initiatingLayer.add(initiatingTransformer);

      setLayer(initiatingLayer as any);
      setTransformer(initiatingTransformer as any);
    }
  }, [stage]);

  return (
    <Wrapper className="fixed bg-white">
      <BoxWrapper className="m-auto p-0 pt-7 border-t-1 border-solid border-gray-light">
        <div className="grid text-center mb-5 font-serif">
          <strong className="font-medium text-tiny">
            STEP 2: CHOOSE SHAPE
          </strong>
        </div>
        <div className="flex flex-nowrap gap-4 scrollbar-thin scrollbar-thumb-gray-dark scrollbar-track-gray-light h-28 overflow-y-scroll">
          {Object.values(ShapeType).map(shape => (
            <Button key={shape} onClick={() => drawShape(shape)}>
              <Shape icon={shape} />
            </Button>
          ))}
        </div>
      </BoxWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  bottom: 85px;
`;
const BoxWrapper = styled.div`
  box-shadow: inset 0px 17px 16px -10px #ccc;
  border-top: 1px solid #bbb;
`;
const Button = styled.button``;
