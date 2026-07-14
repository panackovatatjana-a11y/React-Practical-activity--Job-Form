import React from 'react'
import"./AppForm1.css";

export const AppForm = () => {
  return (
    <div className="formheader">
      <form>
        <input type="text"  className="bot-in" placeholder="Enter your name" />
        <div className="formdetails">
          <div className="bottomline">
            <button className="tag">Read Emails</button>
            <button className="tag">Web Parsing</button>
            <button className="tag">Send Emails</button>
          </div>
          <div>
          <select className="jobStatus"><option        value="Start">Start process</option>
          <option value="Stopped" >Stop Process </option>
          <option value="Completed">Completed process</option> 
          </select>
          </div>
        <button type="submit" className="submitdata">Submit</button>
        </div>
      </form>
    </div>
  )
}
export default AppForm;

