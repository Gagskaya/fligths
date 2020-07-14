import { data } from "./data";
import { sort } from "./sort";
import { maxPrice } from "./maxPrice";
import { minPrice } from "./minPrice";

const { combineReducers } = require("redux");

export const rootReducer = combineReducers({
  data,
  sort,
  maxPrice,
  minPrice,
});
