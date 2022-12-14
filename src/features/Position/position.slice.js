import { createSlice } from "@reduxjs/toolkit";

const positionSlice = createSlice({
  name: "@@position",
  initialState: [],
  reducers: {
    getPositions: (state, _) => state,
    setPositions: (_, action) => action.payload,
  },
});

export const { getPositions, setPositions } = positionSlice.actions;

export const positionReducer = positionSlice.reducer;

export const selectPositions = (state) => state.positions;

export const selectFilteredPositions = (state, filters) => {
  if (filters.length === 0) return state.positions;

  return state.positions.filter((p) => {
    const badges = [].concat(p.role, p.level, ...p.languages, ...p.tools);

    return filters.every((f) => badges.includes(f));
  });
};
