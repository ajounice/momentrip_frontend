import React, { useEffect } from "react";
import '../styles/Login/Auth.css';

function Auth() {
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(()=>{
    console.log("Auth");
  },[]);

  return (
    <div className="container">
      <h1 className="text">Auth</h1>
      <span className="text">{code}</span>
    </div>
  );
}

export { Auth };
