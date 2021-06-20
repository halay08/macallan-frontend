import CommonReducer from './common';
import StudioReducer from './studio';
import FormatReducer from './format';
import ArtworkReducer from './artwork';

const reducers = {
  common: CommonReducer,
  studio: StudioReducer,
  format: FormatReducer,
  artwork: ArtworkReducer
};

export default reducers;
