import { createStore, combineReducers } from "redux";
import loginPage from "./reducers";

const reducers = combineReducers({ loginPage });

export default createStore(reducers);
