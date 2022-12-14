import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";
import { clearFilter, removeFilter, selectFilters } from "./filter.slice";

const FilterPanel = () => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map((filter) => (
            <Badge
              key={filter}
              variant="clearable"
              onClick={() => dispatch(removeFilter(filter))}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={() => dispatch(clearFilter())}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
