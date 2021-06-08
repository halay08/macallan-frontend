import { IStudioState } from '../reducers/studio';
export const SET_STAGE = 'SET_STAGE';
export const SET_COLOR = 'SET_COLOR';
export const SET_TEXTURE = 'SET_TEXTURE';

export interface SetStageAction {
  type: typeof SET_STAGE;
  payload: IStudioState;
}

export interface SetColorAction {
  type: typeof SET_COLOR;
  payload: Pick<IStudioState, 'color'>;
}
export interface SetTextureAction {
  type: typeof SET_TEXTURE;
  payload: Pick<IStudioState, 'texture'>;
}

export type StudioActionTypes =
  | SetColorAction
  | SetTextureAction
  | SetStageAction;
