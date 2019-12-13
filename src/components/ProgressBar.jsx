import React from 'react';
import './styles/ProgressBar.css';

const ProgressBar = props => {
  return <div className="progress">
    <div
      className="progress-bar"
      role="progressbar"
      style={{ width: `${props.percent}%` }}
      aria-valuenow={props.percent}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      {props.percent}%
    </div>
  </div>;
};

export default ProgressBar;