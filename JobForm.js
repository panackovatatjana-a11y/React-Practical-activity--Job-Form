import React, { useState } from 'react';

const JobForm = () => {
    const [jobTitle, setJobTitle] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!jobTitle || !status) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        alert("Job added successfully!");
    };

    return (
        <div className="form-header">
            <form onSubmit={handleSubmit}>
                
                {/* Job Title */}
                <input 
                    type="text" 
                    className="bot-input" 
                    placeholder="Enter the job"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                />
                
                {/* Category */}
                <div className="form-details">
                    <div className="bottom-line">
                        <button type="button">Read Emails</button>
                        <button type="button">Web parsing</button>
                        <button type="button">Send Emails</button>
                    </div>
                </div>

                {/* Status */}
                <select 
                    className="job-status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="">Select status</option>
                    <option value="start">Start</option>
                    <option value="running">Running</option>
                    <option value="completed">Completed</option>
                    <option value="stopped">Stopped</option>
                </select>
              
                {/* Submit */}
                <button type="submit" className="submit-data">Add Job</button>
            </form>
        </div>
    );
};

export default JobForm;

