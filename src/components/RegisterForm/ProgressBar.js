import React from 'react';

export const ProgressBar = ({ similarity }) => {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${similarity}%` }}>
        {similarity > 0 && <span>{similarity}%</span>}
      </div>
    </div>
  );
};

