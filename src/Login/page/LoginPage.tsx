import React, { useEffect } from 'react';
import '../../styles/Login/LoginPage.css';

function LoginPage() {
  return (
    <div className={'login-container'}>
      <img src={'img/renderImg.png'} alt={'background image'} className={'login-background-img'} />
      <div className={'kakao-button-container'}>
        <a href={`${process.env.KAKAO_AUTH_URL}`}>
          <img src={'img/kakao_login_medium_narrow.png'} alt={'kakao login button'} className={'kakao-login-button'} />
        </a>
      </div>
    </div>
  );
}

export default LoginPage;
