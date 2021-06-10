import Konva from 'konva';
import { ICanvasOption } from 'types';

export const getCanvas = (
  stage: Konva.Stage,
  option?: Partial<ICanvasOption>
): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');

  const defaultOpt = {
    width: stage.width(),
    height: stage.height()
  };

  const canvasOpt = {
    ...defaultOpt,
    ...option
  };

  canvas.width = canvasOpt.width;
  canvas.height = canvasOpt.height;

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
    draggable: true,
    opacity: 0.93
  });
};
