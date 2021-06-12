import Konva from 'konva';

export interface IStudioState {
  stage: Konva.Stage;
  transformer?: Konva.Transformer;
  color: string;
  texture: string;
}
