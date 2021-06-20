import { ArtworkActionTypes, SET_CONTRACT, SET_MESSAGE } from 'types/actions';
import { Artwork } from 'types/reducers';

const initialState = {};

const ArtworkReducer = (
  state = initialState,
  action: ArtworkActionTypes
): Artwork => {
  switch (action.type) {
    case SET_MESSAGE:
      return { ...state, message: action.payload };
    case SET_CONTRACT:
      return { ...state, contract: action.payload };
    default:
      return state;
  }
};

export default ArtworkReducer;
