import { createSelector } from "reselect";

const loginPageState = (state) => state.loginPage;

export const makeSelectLoggedIn = createSelector(
  loginPageState,
  (loginPage) => loginPage.isLoggedIn
);
