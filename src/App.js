import { TheHeader } from "components/TheHeader";
import { FilterPanel } from "features/Filter/FilterPanel";
import { JobList } from "features/Position/JobList";
import { setPositions } from "features/Position/position.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import data from "./mock/data.json";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setPositions(data));
  }, []);

  return (
    <>
      <TheHeader />
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
}

export default App;
