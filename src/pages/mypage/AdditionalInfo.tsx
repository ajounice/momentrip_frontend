import React, { useState } from "react";
import '../../styles/pages/mypage/AdditionalInfo.css';
import { TopBar } from "../../components/common/Navigation";
import Input from "../../components/common/Input";

function AdditionalInfo(){
  const [ profileImgSrc , setProfileImgSrc ] = useState('');
  const [ profileImgData, setProfileImgData ] = useState('');

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
      <TopBar beforeButton={true} centerText={""} centerTextType={"page"} checkButton={true}/>
      <div className={'additional-info-inner-container'}>
          <div className={'profile-img-container'}>
            <label htmlFor={'file-upload'}>
              <img src={profileImgSrc === '' ? '/img/profile_default.png':profileImgSrc} className={'profile-img'} />
            <input id="file-upload" style={{ display: 'none' }} type="file" onChange={onChangeProfile} />
            프로필 사진 변경</label>
          </div>

        <div className={'additional-info-input-container'}>
          <div className={'additional-info-input-inner-container'}>
            <Input label={"아이디"} type={"text"} id={"id"} disabled={false} placeholder={"텍스트를 입력해주세요."}/>
            {/* 특수문자 사용가능 */}
            <Input label={"이름"} type={"text"} id={"name"} disabled={false} placeholder={"텍스트를 입력해주세요."}/>
            {/**/}
            <Input label={"소개"} type={"text"} id={"introduction"} disabled={false} placeholder={"텍스트를 입력해주세요."}/>

          </div>
        </div>

      </div>
    </div>
  );
}

export default AdditionalInfo;
