import { StageSize } from 'types/artwork';

export const SET_FORMAT = 'SET_FORMAT';

export interface SetFormatAction {
  type: typeof SET_FORMAT;
  payload: StageSize;
}
export type FormatActionTypes = SetFormatAction;
