import Konva from 'konva';

export const getCanvas = (stage: Konva.Stage): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');
  canvas.width = stage.width();
  canvas.height = stage.height();

  return canvas;
};

export const createImageNode = (
  stage: Konva.Stage,
  canvas: HTMLCanvasElement
): Konva.Image => {
  return new Konva.Image({
    x: canvas.width / 2,
    y: canvas.height / 3,
    image: canvas,
    draggable: true
  });
};
