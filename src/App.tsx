import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import './styles/pages/HomePage.css';

function App() {
  return (
    <div className="App">
      <Link to="/home"><span>Rendering Page</span></Link>

    </div>
  );
}

export default App;
