import React, { useState } from "react";
import '../styles/pages/Signup.css';
import Input from "../components/common/Input";

function SignUpPage(){
  const [ id, setID ] = useState('');
  const [ pw, setPW ] = useState('');
  const [ pw2, setPW2 ] = useState('');

  return(
    <div className={'signup-container'}>
      <div className={'signup-inner-container'}>
          <h1 className={'font-bold text-2xl'}>회원가입</h1>
          <div className={'signup-input-container'}>
            <Input onChangeEventHandler={(e)=>{setID(e.currentTarget.value)}} label={"ID"} type={"text"} id={"id"} disabled={false} placeholder={"ID를 입력해주세요."} />
            <Input onChangeEventHandler={(e)=>{setPW(e.currentTarget.value)}} label={"PW"} type={"password"} id={"pw"} disabled={false} placeholder={"PW를 입력해주세요."} />
            <Input onChangeEventHandler={(e)=>{setPW2(e.currentTarget.value)}} label={"PW Check"} type={"password"} id={"pw2"} disabled={false} placeholder={"PW를 입력해주세요."} />
            <button className={'submit-button'}>완료</button>
          </div>
      </div>
    </div>
  );
}

export default SignUpPage;
