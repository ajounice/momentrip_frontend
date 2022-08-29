// import axios from 'axios';
import React from 'react';
import { KAKAO_AUTH_URL } from '../OAuth';

function LoginPage() {
  return (
    <div className="container">
      <a href={KAKAO_AUTH_URL}>Kakao Login</a>

    </div>
  );
}

export default LoginPage;
