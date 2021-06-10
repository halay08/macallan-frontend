import { StageSize } from 'types';
import { SET_FORMAT, FormatActionTypes } from 'types/actions';

const initialState: StageSize = StageSize.UNDEFINED;

const FormatReducer = (
  state = initialState,
  action: FormatActionTypes
): StageSize => {
  switch (action.type) {
    case SET_FORMAT:
      return action.payload;
    default:
      return state;
  }
};

export default FormatReducer;
