import React from "react";

const ProgressBar = ({ value = 10 }) => {
  return (
    <div className="progressbar">
      <label htmlFor="progress" style={{ marginRight: 10 }}>
        {value}%
      </label>
      <progress
        id="progress"
        value={value}
        max="100"
        title={`${value}%`}
        className="full-width"
      >
        {value}%
      </progress>
    </div>
  );
};

export default ProgressBar;
