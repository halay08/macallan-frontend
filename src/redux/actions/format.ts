import { SET_FORMAT } from 'types/actions';
import { AppActions, StageSize } from 'types/index';

export const setFormat = (payload: StageSize): AppActions => ({
  type: SET_FORMAT,
  payload
});
