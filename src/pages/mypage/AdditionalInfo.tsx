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
      if(profileImgSrc !== ''){
        axios.patch(`${SERVER_API}/users/my/edit/image`,
          profileImgData,{
          headers:{
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
          }
          })
          .then((res)=>{
            setProfileImgSrc(res.data.data);
          })
          .catch((err)=>{
            alert("프로필 이미지 수정에서 오류 발생");
          })
      }

      // nickname 중복 확인하기
      axios({
        // url : `${SERVER_API}/users/nickname/duplicate`,
        method :"post",
        url : `${SERVER_API}/users/my/edit/nickname/duplicate`,
        data : {
          "nickname" : id
        },
        headers : {
          Authorization: `Bearer ${localStorage.getItem('Token')}`,
        }
      })
        .then((res)=>{
          if(res.data === false){
            // 닉네임 중복이 아니라면 프로필 수정 요청
            axios.patch(`${SERVER_API}/users/my/edit`, {
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
                  alert("프로필 설정 성공");
                  window.location.assign('/home');
                }
              })
              .catch((err)=>{
                alert("프로필 설정 오류");
              })
          }
          else if(res.data === true){
            alert("중복된 닉네임 입니다.");
          }
        })
        .catch((err)=>{
          alert("닉네임 중복 검사 실패");
        })
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
      <TopBar beforeButton={false} centerText={""} centerTextType={"page"} checkButton={true} checkButtonOnClickEvent={onClickSubmit}/>
      <div className={'additional-info-inner-container'}>
          <div className={'profile-img-container'}>
            <label htmlFor={'file-upload'}>
              <img src={profileImgSrc === '' ? '/img/profile_default.png':profileImgSrc} className={'profile-img'} />
            <input id="file-upload" style={{ display: 'none' }} type="file" onChange={onChangeProfile} />
            프로필 사진 변경</label>
          </div>

        <div className={'additional-info-input-container'}>
          <div className={'additional-info-input-inner-container'}>
            <Input onChangeEventHandler={(e)=>{setId(e.currentTarget.value)}} label={"아이디"} type={"text"} id={"id"} disabled={false} placeholder={"(필수) 닉네임을 입력해주세요."}/>
            <Input onChangeEventHandler={(e)=>{setName(e.currentTarget.value)}} label={"이름"} type={"text"} id={"name"} disabled={false} placeholder={"(필수) 이름을 입력해주세요."}/>
            <Input onChangeEventHandler={(e)=>{setIntroduction(e.currentTarget.value)}} label={"소개"} type={"text"} id={"introduction"} disabled={false} placeholder={"(옵션) 소개를 입력해주세요."}/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AdditionalInfo;
