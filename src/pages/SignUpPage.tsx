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

  useEffect(()=>{
    if( id.length > 4  && pw.length > 8 && pw2.length > 8 && pw === pw2){
      setButtonActive(true);
    }
    else{
      setButtonActive(false);
    }
  },[id,pw,pw2])

  const onClickSignUp = () => {
    let flag = false;

    axios.get(`${SERVER_API}/users/${id}/duplicate`)
      .then((res)=>{
        if(res.status === 200){
          flag = true;
        }
        console.log("`${SERVER_API}/users/${id}/duplicate` : ",res);
      })
      .catch((err)=>{
        console.log("`${SERVER_API}/users/${id}/duplicate` : ",err);
        flag = false;
      });


    if(flag){
      axios.post(`${SERVER_API}/auth/signup`,{
        email : id,
        password : pw,
      })
        .then((res)=>{
          if(res.status===200){
            // TODO : 백엔드 연결 후 로직 수정
            console.log("`${SERVER_API}/auth/signup` : ",res.data.data);

            alert("로그인 성공");
          }
        })
        .catch((err)=>{
          // TODO : 백엔드 연결 후 로직 수정
          console.log("${SERVER_API}/auth/signup",err);
          alert("로그인 실패");
        })
    }else{
      alert("이미 존재하는 ID입니다.");
    }
  }

  return(
    <div className={'signup-container'}>
      <div className={'signup-inner-container'}>
        <TopBar beforeButton={true} centerText={"회원가입"} centerTextType={"page"} />
          <div className={'signup-input-container'}>
            <Input onChangeEventHandler={(e)=>{setID(e.currentTarget.value)}} label={"ID"} type={"text"} id={"id"} disabled={false} placeholder={"ID를 입력해주세요."} />
            <Input onChangeEventHandler={(e)=>{setPW(e.currentTarget.value)}} label={"PW"} type={"password"} id={"pw"} disabled={false} placeholder={"PW를 입력해주세요."} />
            <Input onChangeEventHandler={(e)=>{setPW2(e.currentTarget.value)}} label={"PW Check"} type={"password"} id={"pw2"} disabled={false} placeholder={"PW를 입력해주세요."} />
            <button onClick={buttonActive ? onClickSignUp : ()=>{console.log()}} className={buttonActive ?"active-submit-button" :  "submit-button"}>완료</button>
          </div>
      </div>
    </div>
  );
}

export default SignUpPage;
