import { useFetchPositions } from "./hooks/useFetchPositions";
import { usePositions } from "./hooks/usePositions";
import { JobPosition } from "./JobPosition";

const JobList = () => {
  useFetchPositions();
  const positions = usePositions();

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  );
};

export { JobList };
