import React from 'react';
import './App.css';

const App: React.FC<any> = () => {
  document.title = 'Custom React Planner Library'
  const name = `duc168`
  return (
    <div className="App">
      <header className="App-header">
        <h1>Custom React Planner Library</h1>
        <p>
          <i>By <code>{name}</code></i>
        </p>
      </header>
    </div>
  );
}

export default App;
