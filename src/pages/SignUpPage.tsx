import React, { useEffect, useState } from "react";
import '../styles/pages/Signup.css';
import Input from "../components/common/Input";
import axios from "axios";
import { TopBar } from "../components/common/Navigation";
import { SERVER_API } from "../config";

function SignUpPage(){
  const [ id, setID ] = useState('');
  const [ pw, setPW ] = useState('');
  const [ pw2, setPW2 ] = useState('');
  const [ buttonActive , setButtonActive ] = useState(false);
  const [ duplicate, setDuplicate ] = useState(false);

  useEffect(()=>{
    if( id.length > 4  && pw.length > 8 && pw2.length > 8 && pw === pw2){
      setButtonActive(true);
    }
    else{
      setButtonActive(false);
    }
  },[id,pw,pw2])

  const onClickDuplicate = () => {
    console.log("onClickDuplicate");
    // TODO:ID 중복확인
    axios.get(`${SERVER_API}/users/${id}/duplicate`)
      .then((res)=>{
        if(res.status === 200){
          setDuplicate(true);
        }
      })
      .catch((err)=>{
          alert('중복된 ID입니다.');
      });
  }


  const onClickSignUp = () => {
    // TODO: SIGNUP API
      axios.post(`${SERVER_API}/auth/signup`,{
        email : id,
        password : pw,
      })
        .then((res)=>{
          if(res.status===200){
            alert('회원가입 성공');
            window.location.assign('/');
          }
        })
        .catch((err)=>{
          // TODO : 백엔드 연결 후 로직 수정
          alert("로그인 실패");
        })
  }

  return(
    <div className={'signup-container'}>
      <div className={'signup-inner-container'}>
        <TopBar beforeButton={true} centerText={"회원가입"} centerTextType={"page"} />
          <div className={'signup-input-container'}>
            <Input onChangeEventHandler={(e)=>{setID(e.currentTarget.value)}} label={"Email"} type={"text"} id={"id"} disabled={false} placeholder={"Email을 입력해주세요."} />
            <Input onChangeEventHandler={(e)=>{setPW(e.currentTarget.value)}} label={"PW"} type={"password"} id={"pw"} disabled={false} placeholder={"PW를 입력해주세요."} />
            <Input onChangeEventHandler={(e)=>{setPW2(e.currentTarget.value)}} label={"PW Check"} type={"password"} id={"pw2"} disabled={false} placeholder={"PW를 입력해주세요."} />
            <button onClick={duplicate ?  ()=>{console.log()}: onClickDuplicate } className={duplicate ?"active-submit-button" :  "submit-button"}>ID 중복확인</button>
            <button onClick={buttonActive && duplicate ? onClickSignUp : ()=>{console.log()}} className={buttonActive ?"active-submit-button" :  "submit-button"}>완료</button>
          </div>
      </div>
    </div>
  );
}

export default SignUpPage;
