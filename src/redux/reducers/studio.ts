import { IStudioState } from 'types/reducers';
import {
  SET_STAGE,
  SET_COLOR,
  SET_TEXTURE,
  StudioActionTypes
} from 'types/actions';

const initialState: IStudioState = {
  stage: {} as any,
  color: '',
  texture: ''
};

const StudioReducer = (
  state = initialState,
  action: StudioActionTypes
): IStudioState => {
  switch (action.type) {
    case SET_STAGE:
      return {
        ...state,
        stage: action.payload.stage,
        color: action.payload.color,
        texture: action.payload.texture
      };
    case SET_COLOR:
      return {
        ...state,
        color: action.payload.color
      };
    case SET_TEXTURE:
      return {
        ...state,
        texture: action.payload.texture
      };
    default:
      return state;
  }
};

export default StudioReducer;
