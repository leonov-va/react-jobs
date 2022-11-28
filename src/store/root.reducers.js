import { combineReducers } from "redux";
import { filterReducer } from "./filter/filter.reducer";
import { positionsReducer } from "./positions/positions.reducer";

export const rootReducers = combineReducers({
  positions: positionsReducer,
  filter: filterReducer,
});
