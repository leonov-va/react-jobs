import { selectFilters } from "features/Filter/filter.slice";
import { useSelector } from "react-redux";
import { selectFilteredPositions } from "../position.slice";

export const usePositions = () => {
  const filters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectFilteredPositions(state, filters)
  );

  return positions;
};
