import { FilterPanel } from "components/FilterPanel";
import { JobList } from "components/JobList";
import { TheHeader } from "components/TheHeader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPositions } from "store/positions/positions.actions";

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
