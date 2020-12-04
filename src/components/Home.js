import Search from "./Search";
import Jobs from "./Jobs";
import Loading from "./Loading";

function Home({
  theme,
  jobs,
  jobHandler,
  handlePage,
  handleSubmit,
  queries,
  error,
  status,
  lastPage,
}) {
  const { description, location, fulltime } = queries;
  const numJobs = jobs.length;

  let resultsSummary = `Showing ${numJobs} jobs`;

  if (description) {
    resultsSummary += ` for ${description}`;
  }
  if (location) {
    resultsSummary += ` in ${location}`;
  }

  if (fulltime) {
    resultsSummary += ` that is fulltime.`;
  }

  return (
    <>
      <div className="container">
        <Search theme={theme} handleSubmit={handleSubmit} />
        {status === "pending" && jobs.length === 0 ? (
          <Loading text="Fetching data" className="loading" />
        ) : (
          <div className="jobs">
            <p className={`results-summary ${theme}`}>{resultsSummary}</p>
            <Jobs jobs={jobs} theme={theme} jobHandler={jobHandler} />
            <button
              className="btn btn-violet btn-lg"
              onClick={handlePage}
              disabled={lastPage}
            >
              {status === "pending" ? (
                <Loading text="Fetching data" />
              ) : (
                "Load More"
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
