import React, { useEffect } from "react";
import { KAKAO_AUTH_URL } from '../OAuth';
import '../../styles/Login/LoginPage.css';

function LoginPage() {
  // const KAKAO_AUTH_URL = "KAKAO_AUTH_URL";

  return (
    <div className={'login-container'}>
      <img src={'img/renderImg.png'} alt={'background image'} className={'login-background-img'}/>
      <div className={'kakao-button-container'}>
        <a href={KAKAO_AUTH_URL}><img src={'img/kakao_login_medium_narrow.png'} alt={'kakao login button'} className={'kakao-login-button'}/></a>
      </div>
    </div>
  );
}

export default LoginPage;
