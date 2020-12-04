import Job from "./Job";

function Jobs({ jobs, theme, jobHandler }) {
  return (
    <div className="jobs-container">
      {jobs.map(job => (
        <Job job={job} key={job.id} theme={theme} jobHandler={jobHandler} />
      ))}
    </div>
  );
}

export default Jobs;
