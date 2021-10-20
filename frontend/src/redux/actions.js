import { ActionTypes } from "./constants";

export const setLogin = (isUserLoggedIn) => ({
  type: ActionTypes.LOGIN,
  payload: isUserLoggedIn,
});
export const setLogout = (isUserLoggedIn) => ({
  type: ActionTypes.LOGOUT,
  payload: isUserLoggedIn,
});
