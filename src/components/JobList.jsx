import { useSelector } from "react-redux";
import { selectFilters } from "store/filter/filter.selectors";
import { selectFilteredPositions } from "store/positions/positions.selectors";
import { JobPosition } from "./JobPosition";

const JobList = () => {
  const filters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectFilteredPositions(state, filters)
  );

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  );
};

export { JobList };
