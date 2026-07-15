import React from 'react';

export default function JobColumn({ title, image, alt, jobs }) {
  return (
    <section className="job-column">
      
      <div className="heading-status">
        <h2>{title}</h2>
        <img className="statusImage" src={image} alt={alt} />
      </div>

      <ul className="job-list">
        {jobs.map(job => (
          <li key={job.id} className="job-item">
            {job.title}
          </li>
        ))}
      </ul>

    </section>
  );
}
