import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import sliderReducer from './sliderReducer';

export default combineReducers({
  errors: errorReducer,
  slider: sliderReducer,
});
