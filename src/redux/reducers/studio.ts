import { IStudioState } from 'types/reducers';
import {
  SET_STAGE,
  SET_COLOR,
  SET_TEXTURE,
  RESET,
  StudioActionTypes
} from 'types/actions';
import Konva from 'konva';
import { defaultTransformerConfig } from 'config';

const initialState: IStudioState = {
  stage: {} as any,
  transformer: new Konva.Transformer(defaultTransformerConfig),
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
        transformer:
          action.payload.transformer ||
          new Konva.Transformer(defaultTransformerConfig),
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
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default StudioReducer;
