import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "features/Filter/filter.slice";
import { positionReducer } from "features/Position/position.slice";

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    positions: positionReducer,
  },
});
