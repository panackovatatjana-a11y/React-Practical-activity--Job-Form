import React, { useState } from "react";
import JobColumn from "./component/JobColumn";

import startIcon from "./assets/start.png";
import progressIcon from "./assets/in Progress.jpg";
import doneIcon from "./assets/Done.jpg";
import "./component/JobColumn.css";



export default function App() {
  // Simple job data
  const [jobs] = useState([
    { id: 1, title: "Check emails", status: "start" },
    { id: 2, title: "Write report", status: "progress" },
    { id: 3, title: "Deploy app", status: "completed" },
    { id: 4, title: "Fix bug #42", status: "start" }
  ]);

  // Filter jobs by status
  const needToStart = jobs.filter(job => job.status === "start");
  const inProgress = jobs.filter(job => job.status === "progress");
  const completed = jobs.filter(job => job.status === "completed");

  return (
    <div className="job-columns">

      <JobColumn
        title="Need to Start"
        image={startIcon}
        alt="Start icon"
        jobs={needToStart}
      />

      <JobColumn
        title="In Progress"
        image={progressIcon}
        alt="Progress icon"
        jobs={inProgress}
      />

      <JobColumn
        title="Completed"
        image={doneIcon}
        alt="Completed icon"
        jobs={completed}
      />

    </div>
  );
}
