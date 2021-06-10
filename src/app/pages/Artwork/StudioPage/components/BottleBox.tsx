import styled from 'styled-components/macro';
import { Bottle } from './Bottle';
import { AppState } from 'redux/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Konva from 'konva';
import * as bottles from '../assets/bottles';
import { BottleType } from 'types';
import { DEFAULT_COLOR } from 'config';
import { createImageNode, getCanvas } from 'app/helpers';
import { fetchStart, fetchSuccess, fetchError } from 'redux/actions/common';
import { useDispatch } from 'react-redux';

export const BottleBox = () => {
  const { stage, color, texture } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const [layer, setLayer] = useState(new Konva.Layer());
  const [, setTransformer] = useState(new Konva.Transformer());
  const dispatch = useDispatch();

  const drawBottle = (bottle: string) => {
    const canvas = getCanvas(stage);
    const ctx = canvas.getContext('2d');

    dispatch(fetchStart());
    const bottleImage = new window.Image();
    bottleImage.onload = () => {
      if (ctx) {
        ctx.save();
        ctx.beginPath();
        // put image on canvas
        ctx.drawImage(bottleImage, 0, 0, 55, 206);

        const node = createImageNode(stage, canvas);
        layer.add(node);
      }
      dispatch(fetchSuccess());
    };
    bottleImage.onerror = error => {
      dispatch(fetchError(error as string));
    };
    bottleImage.src = `/assets/bottles/${bottle}`;
    console.log(bottleImage.src);
  };

  const drawTexture = (bottle: string) => {
    if (color.length === 0 && texture.length === 0) {
      return drawBottle(bottle);
    }

    const textureImage = new window.Image();
    textureImage.onload = () => {
      const canvas = getCanvas(stage);
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.save();

        const bottleImage = new window.Image();
        bottleImage.onload = () => {
          ctx.beginPath();
          // put image on canvas
          ctx.drawImage(bottleImage, 0, 0, 55, 206);

          // use compositing to draw the background image
          // only where the text has been drawn
          ctx.beginPath();
          ctx.globalCompositeOperation = 'source-in';
          ctx.drawImage(textureImage, 0, 0);
          ctx.restore();

          const node = createImageNode(stage, canvas);
          layer.add(node);
        };
        bottleImage.src = `/assets/bottles/${bottle}`;
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

  const bottleKeys = Object.keys(bottles);

  return (
    <Wrapper className="fixed bg-white">
      <BoxWrapper className="m-auto p-0 pt-7 border-t-1 border-solid border-gray-light border-b-4 border-gray-light border-solid">
        <div className="grid text-center mb-5 font-serif">
          <strong className="font-medium text-tiny">STEP 4: ADD BOTTLE</strong>
        </div>
        <div className="flex flex-nowrap flex-row items-center justify-center pl-4 pr-4 scrollbar-thin scrollbar-thumb-gray-dark scrollbar-track-gray-light h-28 overflow-y-scroll">
          {bottleKeys.map(bottle => (
            <Button
              className="p-4 focus:outline-none focus:shadow-md active:shadow-md"
              key={bottle}
              onClick={() => drawTexture(BottleType[bottle])}
            >
              <Bottle src={bottles[bottle]} />
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
const Button = styled.button`
  height: fit-content;
`;
