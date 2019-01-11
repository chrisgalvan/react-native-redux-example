import { SET_THEME } from '../actions/actionTypes';
import { initialState } from '../initialState';

export const contextReducer = (state = initialState.context, action) => {
  switch(action.type) {
  case SET_THEME: {
    return {
      ...state,
      ...action.payload,
    };
  }

  default:
    return state;
  }
};