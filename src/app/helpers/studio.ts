import Konva from 'konva';
import { IObjectPos, StageFormat } from 'types';

export const getCanvas = (
  stage: Konva.Stage,
  option?: Partial<IObjectPos>
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
  canvas: HTMLCanvasElement,
  opacity: number = 0.93,
  pos?: Partial<IObjectPos>
): Konva.Image => {
  return new Konva.Image({
    x: pos?.x ? pos.x : 150,
    y: pos?.y ? pos.y : 60,
    image: canvas,
    draggable: true,
    opacity
  });
};

export const addImage = src => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export const getImageObjectPos = (format: StageFormat) => {
  let x = 0,
    y = 0;

  switch (format) {
    case StageFormat.MOBILE:
      x = 150;
      y = 250;
      break;
    case StageFormat.DESKTOP:
      x = 150;
      y = 5;
      break;
    default:
      x = 150;
      y = 100;
  }

  return [x, y];
};
