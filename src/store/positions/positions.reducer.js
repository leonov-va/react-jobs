import { GET_POSITIONS, SET_POSITIONS } from "./positions.actions";

export const positionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POSITIONS:
      return state;
    case SET_POSITIONS:
      return action.positions
    default:
      return state;
  }
};
