import { AppState } from 'redux/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Konva from 'konva';
import { DEFAULT_COLOR } from 'config';
import {
  getCanvas,
  createImageNode,
  addImage,
  getImageObjectPos,
  onNodeAction,
  addNodeTransformer
} from 'app/helpers';
import { fetchSuccess } from 'redux/actions/common';
import { useDispatch } from 'react-redux';
import { TextBox as Mobile } from './TextBox';
import { TextBoxDesktop as Desktop } from './TextBoxDesktop';
import { useResponsive } from 'utils/responsive';

export const TextBox = () => {
  const { isMobile } = useResponsive();
  const format = useSelector<AppState, AppState['format']>(
    ({ format }) => format
  );
  const { stage, color, texture } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const [width] = useState(120);
  const [height] = useState(180);
  const dispatch = useDispatch();
  const [textureBg, setTextureBg] = useState('');

  useEffect(() => {
    (async () => {
      const textureName = texture || 'texture_01_bg.png';
      const imported = (
        await import(`../../assets/textures/img/${textureName}`)
      ).default;

      setTextureBg(imported);
    })();
  }, [texture]);

  const drawTexture = async (texture: string, text: string) => {
    const [layer] = stage.getLayers().slice(-1);
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
      ctx.textBaseline = 'ideographic';
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
      node.setAttr('name', 'text');
      layer.add(node);

      // add node to transformer
      addNodeTransformer(stage, layer, node);

      // Set events
      onNodeAction(node);
    }

    dispatch(fetchSuccess());
  };

  const drawText = (text: string) => {
    const [layer] = stage.getLayers().slice(-1);
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

    // add node to transformer
    addNodeTransformer(stage, layer, node);

    // Set events
    onNodeAction(node);
  };

  const onTextChanged = text => {
    if (texture && texture.length > 0) {
      drawTexture(texture, text);
    } else {
      drawText(text);
    }
  };

  if (isMobile) {
    return <Mobile onTextChanged={onTextChanged} textureBg={textureBg} />;
  }
  return <Desktop onTextChanged={onTextChanged} textureBg={textureBg} />;
};
