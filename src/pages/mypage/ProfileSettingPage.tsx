import React, { useState } from "react";
import '../../styles/pages/mypage/ProfileSetting.css';
import { TopBar } from "../../components/common/Navigation";
import Avatar from "../../components/common/Avatar";
import Input from "../../components/common/Input";

const rexId = '';

const ProfileSettingPage = () => {
  const [ profileImgSrc , setProfileImgSrc ] = useState('');
  const [ profileImgData, setProfileImgData ] = useState('');

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
    <div className={'profile-setting-page-container'}>
        <div className={'profile-setting-page-top-bar-container'}>
          <TopBar beforeButton={true} centerText={""} centerTextType={"page"} checkButton={true}/>
        </div>

      <div className={'profile-setting-page-inner-container'}>
        <div className={'profile-setting-image-container'}>
          <div className={'profile-setting-img'}>
            <label htmlFor={'file-upload'}>
              <Avatar size={'lg'} src={profileImgSrc === '' ? '/img/profile_default.png':profileImgSrc}/>
              <input id="file-upload" style={{ display: 'none' }} type="file" onChange={onChangeProfile} />
              프로필 사진 변경</label>
          </div>
        </div>

          <div className={'profile-setting-user-ingo-container'}>
            {/*
              TODO :: register 적용해야함
              https://react-hook-form.com/api/useform/register
            */}
            {/* 아이디 10자 이하 첫글자 무조건 알파벳, 특수문자 포함 가*/}
            <Input label={"아이디"} type={"text"} id={"id"} disabled={false} placeholder={"텍스트를 입력해주세요."}/>
            {/* 특수문자 사용가능 */}
            <Input label={"이름"} type={"text"} id={"name"} disabled={false} placeholder={"텍스트를 입력해주세요."}/>
            {/**/}
            <Input label={"소개"} type={"text"} id={"introduction"} disabled={false} placeholder={"텍스트를 입력해주세요."}/>
            <span className={'business-account-change'}>비지니스 계정으로 전환</span>
          </div>
      </div>
    </div>
  );
};

export default ProfileSettingPage;
