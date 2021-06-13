import { StageFormat } from 'types/artwork';

export const SET_FORMAT = 'SET_FORMAT';

export interface SetFormatAction {
  type: typeof SET_FORMAT;
  payload: StageFormat;
}
export type FormatActionTypes = SetFormatAction;
