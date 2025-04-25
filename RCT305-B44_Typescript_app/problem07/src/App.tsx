import React from 'react';
import './App.css';
import Timer from './components/Timer';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Timer with TypeScript</h1>
      <Timer />
    </div>
  );
};

export default App;
