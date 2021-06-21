import { ArtworkContact } from 'types/artwork';

export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_CONTRACT = 'SET_CONTRACT';
export const SET_IMAGE_ID = 'SET_IMAGE_ID';

export interface SetMessageAction {
  type: typeof SET_MESSAGE;
  payload: string;
}

export interface SetContractAction {
  type: typeof SET_CONTRACT;
  payload: ArtworkContact;
}

export interface SetImageIdAction {
  type: typeof SET_IMAGE_ID;
  payload: string;
}

export type ArtworkActionTypes =
  | SetMessageAction
  | SetContractAction
  | SetImageIdAction;
