import React, { useEffect, useState } from 'react';
import '../styles/pages/Signup.css';
import Input from '../components/common/Input';
import axios from 'axios';
import { TopBar } from '../components/common/Navigation';
import { SERVER_API } from '../config';

function SignUpPage() {
  const [id, setID] = useState('');
  const [pw, setPW] = useState('');
  const [pw2, setPW2] = useState('');
  const [buttonActive, setButtonActive] = useState(false);
  const [duplicate, setDuplicate] = useState(true);

  useEffect(()=>{
    console.log();
  },[duplicate]);


  useEffect(() => {
    const reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gm;

    if (reg.test(id) && pw.length >= 8 && pw2.length >= 8 && pw === pw2) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [id, pw, pw2]);

  const onClickDuplicate = () => {
    // TODO:ID 중복확인
    axios({
      method :"post",
      url :`${SERVER_API}/auth/email/duplicate`,
      data : {
        email : id
      }
    })
      .then((res) => {
        if(res.data){
          alert("중복된 이메일입니다.");
          setDuplicate(true);
        }
        else{
          setDuplicate(false);
        }
      })
      .catch((err) => {
        alert('중복된 ID입니다.');
      });
  };

  const onClickSignUp = () => {
    // TODO: SIGNUP API
    axios
      .post(`${SERVER_API}/auth/signup`, {
        email: id,
        password: pw,
      })
      .then((res) => {
        if (res.status === 201) {
          alert('회원가입 성공');
          window.location.assign('/');
        }
      })
      .catch((err) => {
        // TODO : 백엔드 연결 후 로직 수정
        alert('회원가입 실패');
      });
  };


  return (
    <div className={'signup-container'}>
      <div className={'signup-inner-container'}>
        <TopBar beforeButton={true} centerText={'회원가입'} centerTextType={'page'} />
        <div className={'signup-input-container'}>
          <Input
            onChangeEventHandler={(e) => {
              setID(e.currentTarget.value);

              if(duplicate){
                setDuplicate(true);
              }
            }}
            label={'Email'}
            type={'text'}
            id={'id'}
            disabled={false}
            placeholder={'Email을 입력해주세요.'}
          />
          <Input
            onChangeEventHandler={(e) => {
              setPW(e.currentTarget.value);
            }}
            label={'PW'}
            type={'password'}
            id={'pw'}
            disabled={false}
            placeholder={'8글자 이상의 대/소문자 알파벳과 숫자로 입력해주세요.'}
          />
          <Input
            onChangeEventHandler={(e) => {
              setPW2(e.currentTarget.value);
            }}
            label={'PW Check'}
            type={'password'}
            id={'pw2'}
            disabled={false}
            placeholder={'Password 확인'}
          />
          {pw2 !== '' && (
            <span className={pw === pw2 ? 'pw-pw2-correct' : 'pw-pw2-incorrect'}>
              {pw === pw2 ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.'}
            </span>
          )}
          <button onClick={onClickDuplicate } className={!duplicate ?"active-submit-button" :  "submit-button"}>ID 중복확인</button>
          <button
            onClick={
              buttonActive
                ? onClickSignUp
                : () => {
                    alert('이메일과 비밀번호 형식을 확인해주세요');
                  }
            }
            className={buttonActive ? 'active-submit-button' : 'submit-button'}
          >
            완료
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
