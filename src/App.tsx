import { Link } from 'react-router-dom';
import React, { useEffect } from "react";
import './App.css';
import './styles/pages/HomePage.css';

declare global {
  interface Window {
    Kakao: any;
  }
}

function App() {


  return (
    <div className="App">
      <Link to="/login">
        <span>Rendering Page</span>
      </Link>
    </div>
  );
}

export default App;
