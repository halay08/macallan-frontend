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

const selectObject = (stage: Konva.Stage, transformer: Konva.Transformer) => {
  // clicks should select/deselect shapes
  stage.on('click tap', function (e) {
    // if click on empty area - remove all selections
    if (e.target === stage) {
      transformer.nodes([]);
      return;
    }

    // do we pressed shift or ctrl?
    const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
    const isSelected = transformer.nodes().indexOf(e.target) >= 0;

    if (!metaPressed && !isSelected) {
      // if no key pressed and the node is not selected
      // select just one
      transformer.nodes([e.target]);
    } else if (metaPressed && isSelected) {
      // if we pressed keys and node was selected
      // we need to remove it from selection:
      const nodes = transformer.nodes().slice(); // use slice to have new copy of array
      // remove node from array
      nodes.splice(nodes.indexOf(e.target), 1);
      transformer.nodes(nodes);
    } else if (metaPressed && !isSelected) {
      // add the node into selection
      const nodes = transformer.nodes().concat([e.target]);
      transformer.nodes(nodes);
    }
  });
};

export { selectObject, drawSvg, createSquare };
