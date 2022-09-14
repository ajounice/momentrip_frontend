import React from 'react';
import '../../styles/pages/mypage/ProfileSetting.css';
import { TopBar } from "../../components/common/Navigation";
import Avatar from "../../components/common/Avatar";
import Input from "../../components/common/Input";

const rexId = '';

const ProfileSettingPage = () => {
  return(
    <div className={'profile-setting-page-container'}>
        <div className={'profile-setting-page-top-bar-container'}>
          <TopBar beforeButton={true} centerText={""} centerTextType={"page"} checkButton={true}/>
        </div>

      <div className={'profile-setting-page-inner-container'}>
        <div className={'profile-setting-image-container'}>
          <div className={'profile-setting-img'}>
            <Avatar size={'lg'} src={'data:image/jpeg;base64,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'}/>
          </div>
          <label>
            프로필 사진 수정
            {/*<input/>*/}
          </label>
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
