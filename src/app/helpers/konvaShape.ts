import Konva from 'konva';
import { ISvgShapeAttribute } from 'types';

const createSquare = ({ fill = '#ccc' } = {}) =>
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

const drawSvg = (
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

const onStageTap = (stage: Konva.Stage, transformer: Konva.Transformer) => {
  // clicks should select/deselect shapes
  stage.on('click tap', function (e) {
    // if click on empty area - remove all selections
    if (e.target === stage) {
      transformer.nodes([]);
      return;
    }

    // Delete all transformer nodes, keep only current target
    transformer.nodes([e.target]);
  });
};

const onNodeAction = (node: Konva.Shape, transformer: Konva.Transformer) => {
  /*
   * dblclick to remove box for desktop app
   * and dbltap to remove box for mobile app
   */
  node.on('dblclick dbltap', function () {
    // Destroy object
    this.destroy();

    // Delete all transformer nodes
    transformer.nodes([]);
  });

  node.on('mouseover', function () {
    document.body.style.cursor = 'move';
  });
  node.on('mouseout', function () {
    document.body.style.cursor = 'move';
  });
};

export { onStageTap, drawSvg, createSquare, onNodeAction };
