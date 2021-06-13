import { StageFormat } from 'types';
import { SET_FORMAT, FormatActionTypes } from 'types/actions';

const initialState: StageFormat = StageFormat.UNDEFINED;

const FormatReducer = (
  state = initialState,
  action: FormatActionTypes
): StageFormat => {
  switch (action.type) {
    case SET_FORMAT:
      return action.payload;
    default:
      return state;
  }
};

export default FormatReducer;
