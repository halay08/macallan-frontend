import { StageFormat } from 'types';

export const calcStageResolution = (
  format: string
): { stageWidth: number; stageHeight: number } => {
  const maxWidth = window.innerWidth * 0.4;
  const maxHeight = window.innerHeight - 200;
  const squareWidth = Math.min(maxWidth, maxHeight);

  // Default is square type.
  let stageHeight: number = squareWidth;
  let stageWidth: number = squareWidth;

  switch (format) {
    case StageFormat.MOBILE:
      stageHeight = maxHeight;
      stageWidth = (maxHeight * 9) / 16;
      break;
    case StageFormat.DESKTOP:
      stageWidth = maxWidth;
      stageHeight = (maxWidth * 9) / 16;
  }
  return { stageWidth, stageHeight };
};
