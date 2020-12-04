import React from "react";
import ReactMarkdown from "react-markdown";
import { formatDistanceStrict } from "date-fns";

import brokenImage from "../assets/broken-image.png";

function isUrl(url) {
  const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

  return regexp.test(url);
}

function JobDetails({ theme, job }) {
  if (!job) {
    return (
      <p className="no-job">
        No job is selected. Please select a job from home page
      </p>
    );
  }

  let {
    company,
    company_logo,
    created_at,
    description,
    how_to_apply,
    location,
    title,
    type,
    company_url,
  } = job;

  company_url = isUrl(company_url) ? company_url : "";

  const timeFromNow = formatDistanceStrict(new Date(created_at), new Date(), {
    addSuffix: true,
  });

  return (
    <>
      <div className="container">
        <div className="job-details">
          <div className={`company-info bg-${theme}`}>
            <div className="logo-container">
              {company_logo ? (
                <img
                  src={company_logo}
                  alt={company}
                  className="company-logo"
                />
              ) : (
                <img
                  src={brokenImage}
                  alt="question mark"
                  className="company-logo"
                />
              )}
            </div>
            <div className="name-link">
              <div>
                <h3>{company}</h3>
                <p>{company_url}</p>
              </div>
              {company_url && (
                <a
                  href={company_url}
                  className="btn-link btn-washed"
                  target="_blank"
                  rel="noreferrer"
                >
                  Company Site
                </a>
              )}
            </div>
          </div>
          <div className={`job bg-${theme}`}>
            <div className="job-summary">
              <div>
                <div className="time-type-container text-gray mb-md">
                  <p>{timeFromNow}</p>
                  <span className="dot-divider"></span>
                  <p>{type}</p>
                </div>
                <h2>{title}</h2>
                <p className="text-violet">{location}</p>
              </div>
              <a href="#apply" className="btn btn-violet btn-link">
                Apply now
              </a>
            </div>
            <div className="job-description">
              <ReactMarkdown children={description} />
            </div>
          </div>
          <div className="how-to-apply" id="apply">
            <h3>How to Apply</h3>
            <ReactMarkdown children={how_to_apply} className="apply-details" />
          </div>
        </div>
      </div>
      <footer className={`footer bg-${theme}`}>
        <div className="container">
          <div className="name-link">
            <div>
              <h3>{company}</h3>
              <p>{company_url}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default JobDetails;
