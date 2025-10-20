import React from 'react';

export default function ErrorPage({ message = 'Something went wrong.', onRetry }) {
  return (
    <div className="loading-fullscreen" role="alert" aria-live="assertive">
      <div className="loading-error-icon">⚠️</div>
      <h2 className="loading-error-title">Error</h2>
      <p className="loading-error-message">{message}</p>
      {onRetry && (
        <button className="loading-error-button" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
}
