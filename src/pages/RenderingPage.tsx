import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/common/Input';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RenderingPage() {
  const [localID, setLocalID] = useState<string>('');
  const [localPW, setLocalPW] = useState<string>('');

  const navigation = useNavigate();

  const onClickKakaoLoginButton = () => {
    // 서버에 로그인 요청 보내고 토큰 받아와야함.
    // 토큰 localstroge에 저장
    axios
      .get(`${process.env.REACT_APP_API_URL}/auth/kakao`)
      .then((res) => {
        console.log();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickLocalLoginButton = () => {
    const data = {
      email: localID,
      password: localPW,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, data)
      .then((res) => {
        if (res.status === 201) {
          // 201 created
          localStorage.setItem('Token', res.data.accessToken);
          window.location.assign('/home');
        }
      })
      .catch((err) => {
        console.log(err);
        alert('이메일 또는 비밀번호를 잘못입력하였습니다.');
      });
  };

  return (
    <>
      <div className="overlay">
        <h1>MomenTrip</h1>
        <p>여행의 특별한 순간을 나누다</p>
      </div>
      <video className="video-render" src="img/render.mp4" muted autoPlay loop></video>

      <div className="fade-In">
        <div className={'kakao-button-container'}>
          <div className={'local-login-container'}>
            <Input
              onChangeEventHandler={(e) => {
                setLocalID(e.currentTarget.value);
              }}
              type={'text'}
              id={'id'}
              disabled={false}
              placeholder={'Email'}
            />
            <Input
              onChangeEventHandler={(e) => {
                setLocalPW(e.currentTarget.value);
              }}
              type={'password'}
              id={'pw'}
              disabled={false}
              placeholder={'Password'}
            />
            <button onClick={onClickLocalLoginButton} className={'local-login-button'}>
              로그인
            </button>
            <a href={`${process.env.KAKAO_AUTH_URL}`}>
              <img
                src={'img/kakao_login_medium_narrow.png'}
                alt={'kakao login button'}
                className={'kakao-login-button'}
              />
            </a>
            <div
              onClick={() => {
                navigation('/signup');
              }}
              className={'local-register-button'}
            >
              회원가입
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RenderingPage;
