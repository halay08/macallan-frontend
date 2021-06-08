import { SET_STAGE, SET_COLOR, SET_TEXTURE } from 'types/actions/studio.action';
import { AppActions } from 'types/index';
import { IStudioState } from 'types/reducers/studio';

export const setStage = (payload: IStudioState): AppActions => ({
  type: SET_STAGE,
  payload
});

export const setColor = (payload: Pick<IStudioState, 'color'>): AppActions => ({
  type: SET_COLOR,
  payload
});

export const setTexture = (
  payload: Pick<IStudioState, 'texture'>
): AppActions => ({
  type: SET_TEXTURE,
  payload
});
