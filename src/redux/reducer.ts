import { combineReducers } from "@reduxjs/toolkit";
import listReducer from "./slice";

const rootReducer = combineReducers({
  list: listReducer,
});

export default rootReducer;
