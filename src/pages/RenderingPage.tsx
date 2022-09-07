import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RenderingPage() {
  const KAKAO_AUTH_URL = 'KAKAO_AUTH_URL';
  return (
    <>
      <div className="overlay">
        <h1>MomenTrip</h1>
        <p>여행의 특별한 순간을 나누다</p>
      </div>
      <video className="video-render" src="img/render.mp4" muted autoPlay loop></video>

      <div className={'login-container'}>
        <img src={'img/renderImg.png'} alt={'background image'} className={'login-background-img'} />
        <div className={'kakao-button-container'}>
          <a href={KAKAO_AUTH_URL}>
            <img
              src={'img/kakao_login_medium_narrow.png'}
              alt={'kakao login button'}
              className={'kakao-login-button'}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default RenderingPage;
