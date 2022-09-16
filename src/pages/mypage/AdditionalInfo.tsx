import React, { useState } from "react";
import '../../styles/pages/mypage/AdditionalInfo.css';
import { TopBar } from "../../components/common/Navigation";
import Input from "../../components/common/Input";
import { SERVER_API } from "../../config";
import axios from "axios";

function AdditionalInfo(){
  const [ profileImgSrc , setProfileImgSrc ] = useState('');
  const [ profileImgData, setProfileImgData ] = useState('');
  const [ id, setId ] = useState('');
  const [ name, setName ] = useState('');
  const [ introduction, setIntroduction ] = useState('');



  // 추가 정보 입력 완료
  const onClickSubmit = (e:any) => {
    if( id !== '' && name !== ''){
      axios.patch(`${SERVER_API}/users`, {
        "nickname" : id,
        "name":name,
        "intro":introduction,
      },
        {
          headers : {
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
          }
        })
        .then((res)=>{
          if(res.status === 200){
            // TODO :수정해야함
            alert("첫 로그인 후 프로필 설정 성공");
          }
        })
        .catch((err)=>{
          alert("오류");
        })
      //TODO: 프로필 사진 요청 보내기
    }
    else{
      alert("필수 정보를 다 입력해주세요.");
    }
  }

  // 프로필 사진 이미지 변경
  const onChangeProfile = (e:any) => {
    if (e.target.files.length > 0) {
      const objectUrl = URL.createObjectURL(e.target.files[0]);
      setProfileImgSrc(objectUrl);
      setProfileImgData(e.target.files[0]);

      return () => URL.revokeObjectURL(objectUrl);
    }
    setProfileImgSrc('/images/defaultImg.png');

    setProfileImgData(e.target.files[0]);
  }

  return(
    <div className={'additional-info-container'}>
      <TopBar beforeButton={true} centerText={""} centerTextType={"page"} checkButton={true} checkButtonOnClickEvent={onClickSubmit}/>
      <div className={'additional-info-inner-container'}>
          <div className={'profile-img-container'}>
            <label htmlFor={'file-upload'}>
              <img src={profileImgSrc === '' ? '/img/profile_default.png':profileImgSrc} className={'profile-img'} />
            <input id="file-upload" style={{ display: 'none' }} type="file" onChange={onChangeProfile} />
            프로필 사진 변경</label>
          </div>

        <div className={'additional-info-input-container'}>
          <div className={'additional-info-input-inner-container'}>
            <Input onChangeEventHandler={(e)=>{setId(e.currentTarget.value)}} label={"아이디"} type={"text"} id={"id"} disabled={false} placeholder={"텍스트를 입력해주세요."}/>
            <Input onChangeEventHandler={(e)=>{setName(e.currentTarget.value)}} label={"이름"} type={"text"} id={"name"} disabled={false} placeholder={"텍스트를 입력해주세요."}/>
            <Input onChangeEventHandler={(e)=>{setIntroduction(e.currentTarget.value)}} label={"소개"} type={"text"} id={"introduction"} disabled={false} placeholder={"텍스트를 입력해주세요."}/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AdditionalInfo;
