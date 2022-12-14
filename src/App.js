import { TheHeader } from "components/TheHeader";
import { FilterPanel } from "features/Filter/FilterPanel";
import { JobList } from "features/Position/JobList";

function App() {
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
