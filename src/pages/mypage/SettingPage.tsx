import React, { useEffect, useState } from 'react';
import '../../styles/pages/mypage/Setting.css';
import { TopBar } from '../../components/common/Navigation';
import AlertModal from '../../components/common/AlertModal';
import Input from '../../components/common/Input';
import axios from 'axios';
import ChangePassword from "./ChangePassword";

function ChangePasswordModal() {
  return <div className={'password-change-modal-container'}>qwe</div>;
}

const SettingPage = () => {
  const [Alert, setAlert] = useState({
    quit: false,
    password: false,
  });
  const [quit, setQuit] = useState(false); // 탈퇴 state

  // 사용자가 탈퇴하기 눌렀을때
  useEffect(() => {
    if (quit) {
      // 서버에 api 요청
      axios
        .delete(`${process.env.REACT_APP_API_URL}/users/{userNickName}/quit`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            alert('탈퇴성공');
          }
        })
        .catch((err) => {
          alert('탈퇴에 실패하였습니다.');
        });
    }
  }, [quit]);

  if (Alert.password) {
    window.location.assign('/mypage/setting/password');
  }

  return (
    <div className={'setting-page-container'}>
      {Alert.quit ? (
        <AlertModal
          okButton={true}
          okButtonEvent={() => {
            setQuit(true);
          }}
          closeEvent={() => {
            setAlert({ quit: false, password: false });
          }}
          close={true}
          TitleText={'탈퇴하시겠습니까?'}
          subText={'삭제된 데이터는 복구가 불가능 합니다.'}
        />
      ) : null}

      <TopBar beforeButton={true} centerText={'사용자 설정'} centerTextType={'page'} />
      <div className={'setting-page-inner-container'}>
        <h3
          onClick={() => {
            setAlert({ quit: false, password: true });
          }}
          className={'hover-pointer'}
        >
          비밀번호 변경
        </h3>
        <h3
          onClick={() => {
            setAlert({ quit: true, password: false });
          }}
          className={'hover-red-text hover-pointer'}
        >
          회원탈퇴
        </h3>
      </div>
    </div>
  );
};

export default SettingPage;
