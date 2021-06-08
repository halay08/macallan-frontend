import styled from 'styled-components/macro';
import { Icon } from './Icon';
import { AppState } from 'redux/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Konva from 'konva';
import * as icons from '../assets/icons';
import { IconType } from 'types';
import { DEFAULT_COLOR } from 'config';
import { createImageNode, getCanvas } from 'app/helpers';

export const IconBox = () => {
  const { stage, color, texture } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const [layer, setLayer] = useState(new Konva.Layer());
  const [, setTransformer] = useState(new Konva.Transformer());

  const drawIcon = (icon: string) => {
    const canvas = getCanvas(stage);
    const ctx = canvas.getContext('2d');

    const iconImage = new window.Image();
    iconImage.onload = () => {
      if (ctx) {
        ctx.save();
        ctx.beginPath();
        // put image on canvas
        ctx.drawImage(iconImage, 0, 0, 60, 60);

        const node = createImageNode(stage, canvas);
        layer.add(node);
      }
    };
    iconImage.src = `/assets/icons/svg/${icon}`;
  };

  const drawTexture = (icon: string) => {
    if (color.length === 0 && texture.length === 0) {
      return drawIcon(icon);
    }

    const textureImage = new window.Image();
    textureImage.onload = () => {
      const canvas = getCanvas(stage);
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.save();

        const iconImage = new window.Image();
        iconImage.onload = () => {
          ctx.beginPath();
          // put image on canvas
          ctx.drawImage(iconImage, 0, 0, 60, 60);

          // use compositing to draw the background image
          // only where the text has been drawn
          ctx.beginPath();
          ctx.globalCompositeOperation = 'source-in';
          ctx.drawImage(textureImage, 0, 0);
          ctx.restore();

          const node = createImageNode(stage, canvas);
          layer.add(node);
        };
        iconImage.src = `/assets/icons/svg/${icon}`;
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

  const iconKeys = Object.keys(icons);
  const half = Math.ceil(iconKeys.length / 2);
  const firstHalf = iconKeys.slice(0, half);
  const secondHalf = iconKeys.slice(-half + 1);

  return (
    <Wrapper className="fixed bg-white">
      <BoxWrapper className="m-auto p-0 pt-7 border-t-1 border-solid border-gray-light">
        <div className="grid text-center mb-5 font-serif">
          <strong className="font-medium text-tiny">STEP 4: ADD ICONS</strong>
        </div>
        <div className="flex flex-nowrap flex-row justify-between pl-4 pr-4 scrollbar-thin scrollbar-thumb-gray-dark scrollbar-track-gray-light h-28 overflow-y-scroll">
          {firstHalf.map((icon, index) => (
            <div key={icon}>
              <Button
                className="mr-7"
                onClick={() => drawTexture(IconType[icon])}
              >
                <Icon src={icons[icon]} />
              </Button>
              {secondHalf[index] && (
                <Button
                  className="mt-2"
                  onClick={() => drawTexture(IconType[secondHalf[index]])}
                >
                  <Icon src={icons[secondHalf[index]]} />
                </Button>
              )}
              {secondHalf[index] === undefined && <div />}
            </div>
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
