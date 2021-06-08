import styled from 'styled-components/macro';
import { Shape } from './Shape';
import { AppState } from 'redux/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Konva from 'konva';
import * as shapes from '../assets/shapes';
import { ShapeType } from 'types';
import { DEFAULT_COLOR } from 'config';

export const ShapeBox = () => {
  const { stage, color, texture } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const [layer, setLayer] = useState(new Konva.Layer());
  const [, setTransformer] = useState(new Konva.Transformer());

  const drawTexture = (shape: string) => {
    var textureImage = new window.Image();
    textureImage.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.save();

        var shapeImage = new window.Image();
        shapeImage.onload = () => {
          ctx.beginPath();
          // put image on canvas
          ctx.drawImage(shapeImage, 0, 0, 160, 160);

          // use compositing to draw the background image
          // only where the text has been drawn
          ctx.beginPath();
          ctx.globalCompositeOperation = 'source-in';
          ctx.drawImage(textureImage, 0, 0);
          ctx.restore();

          const node = new Konva.Image({
            x: stage.width() / 2 - 100,
            y: stage.height() / 2,
            image: canvas,
            draggable: true
          });

          layer.add(node);
        };
        shapeImage.src = `/assets/shapes/svg/${shape}`;
      }
    };

    if (texture) {
      textureImage.src = `/assets/textures/img/${texture}`;
    } else {
      const colorFile = color.length === 0 ? DEFAULT_COLOR : color;
      textureImage.src = `/assets/colors/${colorFile.replace('#', '')}.png`;
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
          {Object.keys(shapes).map(shape => (
            <Button key={shape} onClick={() => drawTexture(ShapeType[shape])}>
              <Shape src={shapes[shape]} />
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
