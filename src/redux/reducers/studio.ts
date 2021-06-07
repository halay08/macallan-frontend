import { Studio } from 'types/reducers';
import { GET_STAGE, SET_STAGE, StudioActionTypes } from 'types/actions';

const initialState: Studio = {
  stage: {} as any
};

const StudioReducer = (
  state = initialState,
  action: StudioActionTypes
): Studio => {
  switch (action.type) {
    case GET_STAGE:
      return {
        ...state,
        stage: action.payload
      };

    case SET_STAGE:
      return {
        ...state,
        stage: action.payload
      };

    default:
      return state;
  }
};

export default StudioReducer;
