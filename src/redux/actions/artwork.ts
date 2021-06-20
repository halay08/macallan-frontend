import { SET_CONTRACT, SET_MESSAGE } from 'types/actions';
import { AppActions, ArtworkContact } from 'types/index';

export const setMessage = (payload: string): AppActions => ({
  type: SET_MESSAGE,
  payload
});

export const setContract = (payload: ArtworkContact): AppActions => ({
  type: SET_CONTRACT,
  payload
});
