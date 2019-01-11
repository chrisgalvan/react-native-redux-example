import { SET_THEME } from "./actionTypes";

const setTheme = (theme) => ({
    type: SET_THEME,
    payload: theme
});

// thunk
export const SetTheme = (theme) => (dispatch, getState) => {
  dispatch(setTheme(theme));
} 