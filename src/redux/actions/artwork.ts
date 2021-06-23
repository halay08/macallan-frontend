import { SET_CONTRACT, SET_IMAGE_ID, SET_MESSAGE } from 'types/actions';
import { AppActions, ArtworkContact } from 'types/index';

export const setMessage = (payload: string): AppActions => ({
  type: SET_MESSAGE,
  payload
});

export const setContract = (payload: ArtworkContact): AppActions => ({
  type: SET_CONTRACT,
  payload
});

export const setImageId = (payload: string): AppActions => ({
  type: SET_IMAGE_ID,
  payload
});
