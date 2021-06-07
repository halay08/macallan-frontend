import Konva from 'konva';
export const GET_STAGE = 'GET_STAGE';
export const SET_STAGE = 'SET_STAGE';

export interface GetStageAction {
  type: typeof GET_STAGE;
  payload: Konva.Stage;
}

export interface SetStageAction {
  type: typeof SET_STAGE;
  payload: Konva.Stage;
}

export type StudioActionTypes = GetStageAction | SetStageAction;
