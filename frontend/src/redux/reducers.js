import { ActionTypes } from "./constants";

const defaultState = {
  isLoggedIn: false,
};

export default function loginPageReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return { ...state, isLoggedIn: action.payload };
    case ActionTypes.LOGOUT:
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
}
