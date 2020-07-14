import { data } from "./data";
import { sort } from "./sort";

const { combineReducers } = require("redux");


export const rootReducer = combineReducers({
  data,
  sort
});
