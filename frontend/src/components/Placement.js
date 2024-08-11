// src/components/job/jobs.js
import React from 'react';
import './placement.css'; // Import the CSS file for styling

// Job data
const jobs = [
  {
    id: 1,
    role: 'MERN Stack Developer',
    company: 'Gidy.ai',
    year: 2024,
    link: 'https://gidy.ai/',
    location: 'Chennai, India',
    description: 'Develop and maintain web applications using modern technologies.'
  },
  {
    id: 2,
    role: 'Software Engineer',
    company: 'Cstream.io',
    year: 2024,
    link: 'https://cstream.io/',
    location: 'Chennai, India',
    description: 'Engineering principles and knowledge of programming languages to build software solutions for end users.'
  },
  // Add more job objects here
];

// JobItem component
const JobItem = ({ job }) => {
  return (
    <li className="job-item">
      <h2>{job.role}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Year:</strong> {job.year}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <a href={job.link} target="_blank" rel="noopener noreferrer">Apply Now</a>
    </li>
  );
};

// JobList component
const JobList = () => {
  return (
    <div className="job-container">
      <div className="box-container">
        <h1>Job Portal</h1>
        <ul>
          {jobs.map(job => (
            <JobItem key={job.id} job={job} />
          ))}
        </ul>
      </div>
      <div className="box-container">
        <p>Jobs will be updated soon. These are sample jobs for now.</p>
      </div>
      <div className="note">
        Apologies for the inconvenience, but due to time constraints, some
        features are not included. I have done my best to address the key aspects.
      </div>
    </div>
  );
};

// Exporting the JobList component for use in other files
export default JobList;
