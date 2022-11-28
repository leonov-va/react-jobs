export const GET_POSITIONS = "GET_POSITIONS";
export const SET_POSITIONS = "SET_POSITIONS";

export const getPositions = () => ({
  type: "GET_POSITIONS",
});

export const setPositions = (positions) => ({
  type: "SET_POSITIONS",
  positions,
});
