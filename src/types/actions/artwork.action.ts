import { ArtworkContact } from 'types/artwork';

export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_CONTRACT = 'SET_CONTRACT';

export interface SetMessageAction {
  type: typeof SET_MESSAGE;
  payload: string;
}

export interface SetContractAction {
  type: typeof SET_CONTRACT;
  payload: ArtworkContact;
}

export type ArtworkActionTypes = SetMessageAction | SetContractAction;
