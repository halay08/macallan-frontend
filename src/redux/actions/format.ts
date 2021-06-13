import { SET_FORMAT } from 'types/actions';
import { AppActions, StageFormat } from 'types/index';

export const setFormat = (payload: StageFormat): AppActions => ({
  type: SET_FORMAT,
  payload
});
