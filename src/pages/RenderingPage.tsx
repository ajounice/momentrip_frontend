import { RiDriveFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/common/Input';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_API } from "../config";

function RenderingPage() {
  const KAKAO_AUTH_URL = 'KAKAO_AUTH_URL';

  const [localID, setLocalID] = useState<string>('');
  const [localPW, setLocalPW] = useState<string>('');

  const navigation = useNavigate();

  useEffect(() => {
    console.log(localID);
    console.log(localPW);
  }, [localID, localPW]);

  const onClickKakaoLoginButton = () => {
    // 서버에 로그인 요청 보내고 토큰 받아와야함.
    // 토큰 localstroge에 저장
    axios.get(`${SERVER_API}/auth/kakao`)
      .then((res)=>{console.log(res)})
      .catch((err)=>{console.log(err)});
  }

  const onClickLocalLoginButton = () =>{

    const data = new FormData();
    data.append('email',localID);
    data.append('password',localPW);

    axios.post(`${SERVER_API}/auth/login`,data)
      .then((res)=>{
        if(res.status===200){
          localStorage.setItem('Token',res.data.data);
          window.location.assign('/home');
        }
      })
      .catch((err)=>{
        console.log(err);
      })
  }

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
            <a href={KAKAO_AUTH_URL}>
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
