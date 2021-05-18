import { ONSLIDE_EVT } from '../constants';

export const changeSliderIdx = (idx) => {
  return {
    type: ONSLIDE_EVT,
    data: idx,
  };
};
