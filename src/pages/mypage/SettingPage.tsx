import React, { useEffect, useState } from "react";
import '../../styles/pages/mypage/Setting.css';
import { TopBar } from "../../components/common/Navigation";
import AlertModal from "../../components/common/AlertModal";
import Input from "../../components/common/Input";

function ChangePasswordModal(){
  return(
    <div className={'password-change-modal-container'}>
qwe
    </div>
  )
}

const SettingPage = () => {
  const [ alert, setAlert ] = useState({
    quit : false,
    password : false,
  });
  const [ quit, setQuit] = useState(false); // 탈퇴 state

  // 사용자가 탈퇴하기 눌렀을때
  useEffect(()=>{
    if(quit){
      // 서버에 api 요청
   }
  },[quit])

  if(alert.password){
    return(
      <div className={'change-password-container'}>
        <TopBar beforeButton={true} centerText={"비밀번호 설정"} centerTextType={"page"} />
        <div className={'password-change-inner-container'}>
          <div className={'password-change-input-container'}>
            <Input label={"현재 비밀번호"} type={"password"} id={"currentPW"} disabled={false} placeholder={"현재 비밀번호를 입력하세요"}/>
            <Input label={"변경할 비밀번호"} type={"password"} id={"changePW"} disabled={false} placeholder={"변경할 비밀번호를 입력하세요."}/>
            <Input label={"변경할 비밀번호"} type={"password"} id={"changePW2"} disabled={false} placeholder={"변경할 비밀번호를 입력하세요."}/>

            <button className={'password-change-button'} type={'submit'}>확인</button>
          </div>
        </div>
      </div>
    )
  }

  return <div className={'setting-page-container'}>
    {
      alert.quit
      ? <AlertModal okButton={true} okButtonEvent={()=>{setQuit(true)}} closeEvent={()=>{setAlert({quit:false, password: false})} } close={true} TitleText={"탈퇴하시겠습니까?"} subText={"삭제된 데이터는 복구가 불가능 합니다."} />
        : null
    }

    {
      alert.password
      ? <ChangePasswordModal />
        :null
    }

     <TopBar beforeButton={true} centerText={"사용자 설정"} centerTextType={"page"} />
      <div className={'setting-page-inner-container'}>
        <h3 onClick={()=>{setAlert({quit:false, password: true})}} className={'hover-pointer'}>비밀번호 변경</h3>
        <h3 onClick={()=>{setAlert({ quit : true, password : false})}} className={'hover-red-text hover-pointer'}>회원탈퇴</h3>
      </div>
  </div>;
};

export default SettingPage;
