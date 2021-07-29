import Konva from 'konva';
import { ISvgShapeAttribute } from 'types';
import { defaultTransformerConfig } from 'config';

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

const onStageTap = (stage: Konva.Stage) => {
  const disableNode = ['signOff', 'signOffLogo', 'signOffBackGround'];

  // clicks should select/deselect shapes
  stage.on('click tap', function (e) {
    const [transformer] = stage.find('Transformer') as Konva.Transformer[];

    if (!transformer) {
      return;
    }

    if (e.target === stage || disableNode.includes(e.target.getAttr('id'))) {
      // if click on empty area - remove all selections
      transformer.nodes([]);
      return;
    }

    // Delete all transformer nodes, keep only current target
    if (e.target) {
      transformer.setAttr('rotateEnabled', true);
      transformer.nodes([e.target]);
    }
  });
};

const addNodeTransformer = (
  stage: Konva.Stage,
  layer: Konva.Layer,
  node: Konva.Node
) => {
  const [transformer] = stage.find('Transformer') as Konva.Transformer[];
  if (transformer) transformer.destroy();

  const newTransformer = new Konva.Transformer(defaultTransformerConfig);
  layer.add(newTransformer);
  newTransformer.setAttr('rotateEnabled', true);
  newTransformer.nodes([node]);
};

const clearTransformer = (stage: Konva.Stage) => {
  const [transformer] = stage.find('Transformer') as Konva.Transformer[];
  transformer.nodes([]);
};

const onNodeAction = (node: Konva.Shape) => {
  const stage = node.getStage();

  if (!stage) {
    return;
  }

  /*
   * dblclick to remove box for desktop app
   * and dbltap to remove box for mobile app
   */
  node.on('dblclick dbltap', function () {
    // Destroy object
    this.destroy();

    // Destroy all transformer nodes
    clearTransformer(stage);
  });

  document.addEventListener('click', ev => {
    const target = ev.target as HTMLElement;
    if (target.tagName === 'CANVAS' || target.tagName === 'BUTTON') return;
    // Destroy all transformer nodes
    clearTransformer(stage);
  });

  node.on('mouseover', function () {
    document.body.style.cursor = 'move';
  });
  node.on('mouseout', function () {
    document.body.style.cursor = 'auto';
  });
};

export { onStageTap, drawSvg, createSquare, onNodeAction, addNodeTransformer };
