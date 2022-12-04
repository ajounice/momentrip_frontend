import { TopBar } from "../../components/common/Navigation";
import Input from "../../components/common/Input";
import React from "react";
import '../../styles/pages/mypage/Setting.css';

function ChangePasswordPage() {
  return(
    <div className={'change-password-container'}>
      <TopBar beforeButton={true} centerText={'비밀번호 설정'} centerTextType={'page'} />
      <div className={'password-change-inner-container'}>
        <div className={'password-change-input-container'}>
          <Input
            label={'현재 비밀번호'}
            type={'password'}
            id={'currentPW'}
            disabled={false}
            placeholder={'현재 비밀번호를 입력하세요'}
          />
          <Input
            label={'변경할 비밀번호'}
            type={'password'}
            id={'changePW'}
            disabled={false}
            placeholder={'변경할 비밀번호를 입력하세요.'}
          />
          <Input
            label={'변경할 비밀번호'}
            type={'password'}
            id={'changePW2'}
            disabled={false}
            placeholder={'변경할 비밀번호를 입력하세요.'}
          />

          <button className={'password-change-button'} type={'submit'}>
            확인
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChangePasswordPage;
