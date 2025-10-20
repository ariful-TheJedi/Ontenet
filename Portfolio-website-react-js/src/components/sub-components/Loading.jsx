import React from 'react';



export default function Loader({ label = 'Loading...' }) {
  return (
    <div className="loading-fullscreen" role="status" aria-live="polite">
      <div className="loading-dots" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
        <p>Loading</p>
      <span className="loading-visually-hidden">{label}</span>
    </div>
  );
}
