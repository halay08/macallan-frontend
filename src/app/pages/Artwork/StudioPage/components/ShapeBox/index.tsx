import { ShapeBoxDesktop } from './ShapeBoxDesktop';
import { ShapeBoxMobile } from './ShapeBoxMobile';
import { useResponsive } from 'utils/responsive';
import { AppState } from 'redux/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Konva from 'konva';
import { DEFAULT_COLOR, defaultTransformerConfig } from 'config';
import {
  createImageNode,
  getCanvas,
  onStageTap,
  addImage,
  getImageObjectPos,
  onNodeAction,
  addNodeTransformer
} from 'app/helpers';
import { fetchStart, fetchSuccess } from 'redux/actions/common';
import { useDispatch } from 'react-redux';

export const ShapeBox = () => {
  const { isMobile } = useResponsive();
  const format = useSelector<AppState, AppState['format']>(
    ({ format }) => format
  );
  const { stage, color, texture } = useSelector<AppState, AppState['studio']>(
    ({ studio }) => studio
  );
  const [width] = useState(150);
  const [height] = useState(150);
  const [layer, setLayer] = useState(new Konva.Layer());
  const [transformer] = useState(
    new Konva.Transformer({
      ...defaultTransformerConfig,
      rotateEnabled: false
    })
  );
  const dispatch = useDispatch();

  const drawTexture = async (shape: string) => {
    const canvas = getCanvas(stage, { width, height });
    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.save();
      dispatch(fetchStart());

      let textureImage;
      let colorImage;

      if (color) {
        const colorFile = color.length === 0 ? DEFAULT_COLOR : color;
        colorImage = await addImage(
          `/assets/colors/${colorFile.replace('#', '')}.png`
        );
      }
      if (texture) {
        textureImage = await addImage(`/assets/textures/img/${texture}`);
      }

      const shapeImage = await addImage(`/assets/shapes/svg/${shape}`);

      ctx.beginPath();
      // put image on canvas
      ctx.drawImage(shapeImage as any, 0, 0, width, height);

      // use compositing to draw the background image
      // only where the text has been drawn
      ctx.beginPath();
      ctx.globalCompositeOperation = 'source-in';
      if (textureImage) {
        ctx.drawImage(
          textureImage,
          0,
          0,
          width + width * 0.5,
          height + height * 0.5
        );
      }

      if (colorImage) {
        ctx.drawImage(
          colorImage,
          0,
          0,
          width + width * 0.5,
          height + height * 0.5
        );
      }

      const [x, y] = getImageObjectPos(format);

      ctx.restore();
      const node = createImageNode(canvas, 0.93, { x, y });
      node.setAttr('name', 'shape');

      layer.add(node);

      // Set double click/tab event
      onNodeAction(node);

      // add node to transformer
      addNodeTransformer(stage, layer, node);

      dispatch(fetchSuccess());
    }
  };

  useEffect(() => {
    if (stage.name !== undefined) {
      var initiatingLayer = new Konva.Layer();

      // Add layer to stage
      stage.add(initiatingLayer);
      // Add transformer to layer
      initiatingLayer.add(transformer);

      setLayer(initiatingLayer);

      // Set double click/tab event
      onStageTap(stage);
    }
  }, [stage, transformer]);

  return isMobile ? (
    <ShapeBoxMobile drawTexture={drawTexture} />
  ) : (
    <ShapeBoxDesktop drawTexture={drawTexture} />
  );
};
