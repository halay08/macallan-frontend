import { ArtworkContact } from 'types/artwork';

export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_CONTACT = 'SET_CONTACT';
export const SET_IMAGE_ID = 'SET_IMAGE_ID';

export interface SetMessageAction {
  type: typeof SET_MESSAGE;
  payload: string;
}

export interface SetContactAction {
  type: typeof SET_CONTACT;
  payload: ArtworkContact;
}

export interface SetImageIdAction {
  type: typeof SET_IMAGE_ID;
  payload: string;
}

export type ArtworkActionTypes =
  | SetMessageAction
  | SetContactAction
  | SetImageIdAction;
