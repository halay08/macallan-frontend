import { Shape } from '../Shape';
import { AppState } from 'redux/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Konva from 'konva';
import * as shapes from '../../assets/shapes';
import { ShapeType } from 'types';
import { DEFAULT_COLOR, defaultTransformerConfig } from 'config';
import {
  createImageNode,
  getCanvas,
  onStageTap,
  addImage,
  getImageObjectPos,
  onNodeAction
} from 'app/helpers';
import { fetchStart, fetchSuccess } from 'redux/actions/common';
import { useDispatch } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ColorPicker, Texture } from '../Navigation';

export const ShapeBoxDesktop = () => {
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

      // Select current node by default
      const [transformer] = stage.find('Transformer') as Konva.Transformer[];
      transformer.setAttr('rotateEnabled', true);
      transformer.nodes([node]);

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

  return (
    <div className="w-full">
      <div className="m-auto p-0 pt-7 border-t-1 border-solid border-gray-light">
        <div className="grid text-center mb-5 font-serif">
          <strong className="font-AGaramondPro-bold text-2xl">
            STEP 2: CHOOSE SHAPE
          </strong>
        </div>
        <PerfectScrollbar options={{ suppressScrollY: true }}>
          <div className="flex flex-wrap justify-center">
            {Object.keys(shapes).map(shape => (
              <button
                className="p-2 focus:outline-none focus:shadow-md active:shadow-md"
                key={shape}
                onClick={() => drawTexture(ShapeType[shape])}
              >
                <Shape src={shapes[shape]} />
              </button>
            ))}
          </div>
          <div className="mt-6">
            <ColorPicker />
          </div>
          <div className="my-6">
            <Texture />
          </div>
        </PerfectScrollbar>
      </div>
    </div>
  );
};
