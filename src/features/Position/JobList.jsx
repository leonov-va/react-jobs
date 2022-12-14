import { selectFilters } from "features/Filter/filter.slice";
import { useSelector } from "react-redux";
import { JobPosition } from "./JobPosition";
import { selectFilteredPositions } from "./position.slice";

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
