import {
  ArtworkActionTypes,
  SET_CONTACT,
  SET_IMAGE_ID,
  SET_MESSAGE
} from 'types/actions';
import { Artwork } from 'types/reducers';

const initialState = {};

const ArtworkReducer = (
  state = initialState,
  action: ArtworkActionTypes
): Artwork => {
  switch (action.type) {
    case SET_MESSAGE:
      return { ...state, message: action.payload };
    case SET_CONTACT:
      return { ...state, contact: action.payload };
    case SET_IMAGE_ID:
      return { ...state, id: action.payload };
    default:
      return state;
  }
};

export default ArtworkReducer;
