import styled from 'styled-components/macro';
import { AppState } from 'redux/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Konva from 'konva';
import { DEFAULT_COLOR, DEFAULT_TRANSFORMER_OPT } from 'config';
import {
  getCanvas,
  createImageNode,
  selectObject,
  addImage,
  getImageObjectPos
} from 'app/helpers';
import { fetchSuccess } from 'redux/actions/common';
import { useDispatch } from 'react-redux';

export const TextBox = () => {
  const format = useSelector<AppState, AppState['format']>(
    ({ format }) => format
  );
  const { stage, color, texture } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const [width] = useState(80);
  const [height] = useState(150);
  const [layer, setLayer] = useState(new Konva.Layer());
  const [transformer, setTransformer] = useState(new Konva.Transformer());
  const dispatch = useDispatch();

  useEffect(() => {
    if (stage.name !== undefined) {
      var initiatingLayer = new Konva.Layer();
      var initiatingTransformer = new Konva.Transformer(
        DEFAULT_TRANSFORMER_OPT
      );

      // Add layer to stage
      stage.add(initiatingLayer);

      // Add transformer to layer
      initiatingLayer.add(initiatingTransformer);

      setLayer(initiatingLayer as any);
      setTransformer(initiatingTransformer as any);
    }
  }, [stage]);

  const drawTexture = async (texture: string, text: string) => {
    const canvas = getCanvas(stage, { width, height });
    const ctx = canvas.getContext('2d');
    const textureImage = await addImage(`/assets/textures/img/${texture}`);
    const colorFile = color.length === 0 ? '#000000' : color;
    const colorImage = await addImage(
      `/assets/colors/${colorFile.replace('#', '')}.png`
    );

    if (ctx) {
      ctx.save();
      ctx.beginPath();

      // put text on canvas
      ctx.font = '180px HhSamuel-E80W';
      ctx.textAlign = 'center';
      ctx.fillText(text, width / 2, height);
      ctx.fill();

      // use compositing to draw the background image
      // only where the text has been drawn
      ctx.beginPath();
      ctx.globalCompositeOperation = 'source-in';
      ctx.drawImage(textureImage as any, 0, 0, width, height);
      ctx.drawImage(colorImage as any, 0, 0, width, height);
      ctx.restore();

      const [x, y] = getImageObjectPos(format);
      const node = createImageNode(canvas, 1, { x, y });
      layer.add(node);
      // by default select all shapes
      transformer.nodes([node]);
      selectObject(stage, transformer);
    }

    dispatch(fetchSuccess());
  };

  const drawText = (text: string) => {
    const [x, y] = getImageObjectPos(format);

    const node = new Konva.Text({
      x,
      y,
      text,
      width,
      height,
      align: 'center',
      fontSize: 180,
      fontFamily: 'HhSamuel-E80W',
      fill: color ? color : DEFAULT_COLOR,
      draggable: true
    });

    layer.add(node);
    // by default select all shapes
    transformer.nodes([node]);
    selectObject(stage, transformer);
  };

  const onTextChanged = evt => {
    const text = evt.target.value.toUpperCase();

    if (texture && texture.length > 0) {
      drawTexture(texture, text);
    } else {
      drawText(text);
    }

    evt.target.value = '';
    evt.target.focus();
  };

  return (
    <Wrapper className="fixed bg-white">
      <BoxWrapper className="m-auto p-0 pt-7 border-t-1 border-solid border-gray-light">
        <div className="grid text-center mb-5 font-serif">
          <strong className="font-medium text-tiny">
            STEP 3: PERSONALISE WITH ALPHANUMERIC
          </strong>
        </div>
        <div className="flex flex-nowrap gap-4 scrollbar-thin scrollbar-thumb-gray-dark scrollbar-track-gray-light h-28 overflow-y-scroll relative">
          <div className="flex flex-row items-center justify-center text-gray-light absolute w-full h-full left-0 top 0 font-alternate">
            Tap to type a character here
          </div>
          <TextField
            className="w-screen opacity-0"
            maxLength={1}
            onKeyUp={evt => onTextChanged(evt)}
          />
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
const TextField = styled.textarea``;
