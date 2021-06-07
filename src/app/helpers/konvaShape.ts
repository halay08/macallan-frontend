import Konva from 'konva';
import { ISvgShapeAttribute } from 'types';

export const createSquare = ({ fill = '#ccc' } = {}) =>
  new Konva.Rect({
    x: 60,
    y: 60,
    width: 100,
    height: 100,
    fill,
    name: 'rect',
    draggable: true
  });

type IAttribute = Partial<ISvgShapeAttribute> & { name: string };

export const drawSvg = (
  source: string,
  layer: Konva.Layer,
  attrs: IAttribute
): void => {
  const defaultAttrs: Partial<ISvgShapeAttribute> = {
    x: 60,
    y: 60,
    width: 100,
    height: 100,
    draggable: true
  };

  const shapeAttrs = { ...defaultAttrs, ...attrs };

  // const url = 'data:image/svg+xml;base64,' + window.btoa(source);

  Konva.Image.fromURL(source, imageNode => {
    layer.add(imageNode);
    imageNode.setAttrs(shapeAttrs);
    layer.batchDraw();
  });
};
