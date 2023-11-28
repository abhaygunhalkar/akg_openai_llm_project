import React from 'react';
import ErrorBoundary from './ErrorBoundary';


function App() {
  return (
    <div className="App">
      <ErrorBoundary>
       <iframe
        title="Welcome Page"
        src="/Welcome.html"
        style={{ width: '100%', height: '100vh', border: 'none' }}
      />
      </ErrorBoundary>
    </div>
  );
}

export default App;
