import { AccessTimeOutlined } from '@material-ui/icons';
import { ONSLIDE_EVT } from '../constants';

const initialState = {
  selectedIdx: undefined,
};

export default function sliderReducer(state = initialState, action) {
  switch (action.type) {
    case ONSLIDE_EVT:
      return Object.assign({}, { selectedIdx: action.data });
    default:
      return state;
  }
}
