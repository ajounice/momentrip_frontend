import React, { useEffect } from "react";
import '../styles/Login/Auth.css';
import axios from "axios";

function Auth() {
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    // 서버로 인가 코드 보내기
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/auth/kakao/callback?code=${code}`,
    }).then((res) => {
      // 토큰 받아오기
      localStorage.setItem('Token', res.data.accessToken);
      // 해당 유저가 정보를 등록한 유저인지 확인하기 위한 users/my api 요청
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/my`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
          },
        })
        .then((res) => {
          if (res.data.nickname === null) {
            // nickname 설정 안된 경우 === 프로필 설정 안한 경우
            // 프로필 설정 페이지로 이동
            window.location.assign('/add/data');
          }
          else {
            // 유저 정보 세션 등록
            window.sessionStorage.setItem('user', JSON.stringify(res.data));
            // 홈으로 이동
            window.location.assign('/home');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <div className="container">
    </div>
  );
}

export { Auth };
