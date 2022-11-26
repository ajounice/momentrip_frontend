import React, { useEffect, useState } from 'react';
import '../../styles/pages/mypage/Setting.css';
import { TopBar } from '../../components/common/Navigation';
import AlertModal from '../../components/common/AlertModal';
import Input from '../../components/common/Input';
import axios from 'axios';
import CustomModal from "../../components/common/CustomModal";
import Button from "../../components/Button/Button";
import {CopyToClipboard} from "react-copy-to-clipboard";

function ChangePasswordModal() {
  return <div className={'password-change-modal-container'}>qwe</div>;
}

const SettingPage = () => {
  const [Alert, setAlert] = useState({
    quit: false,
    password: false,
  });
  const [quit, setQuit] = useState(false); // 탈퇴 state
  const [ userNickName, setUserNickName] = useState(''); // user nick name

  useEffect(()=>{
    axios.
        get(`${process.env.REACT_APP_API_URL}/users/my`, {
          headers: {
            Authorization : `Bearer ${localStorage.getItem('Token')}`
          }
    })
        .then((res)=>{
          if(res.status === 200){
            setUserNickName(res.data.nickname);
          }
        })
        .catch((err)=>{
          console.log(err);
        })
  },[]);

  function QuitService(){
      axios
      .delete(`${process.env.REACT_APP_API_URL}/users/my/quit`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('Token')}`,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          alert('탈퇴성공');
          window.location.assign('/');
        }
      })
      .catch((err) => {
        alert('탈퇴에 실패하였습니다.');
      });
  }

  if (Alert.password) {
    return (
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
    );
  }

  return (
    <div className={'setting-page-container'}>
      {quit ? (
          <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <CustomModal open={quit} setOpen={setQuit} title="탈퇴하시겠습니까?">
            <>
              <div className="m-8"> </div>
              <div className="flex gap-2">
                <Button title="닫기" handleClick={() => setQuit(false)} color="primaryB"></Button>
                  <button type={"submit"} onClick={QuitService}
                      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 disabled:bg-gray-300`}
                  >
                    예
                  </button>
              </div>
            </>
          </CustomModal>
          </div>
      ) : null}

      {Alert.password ? <ChangePasswordModal /> : null}

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
            onClick={()=>setQuit(true)}
          className={'hover-red-text hover-pointer'}
        >
          회원탈퇴
        </h3>
      </div>
    </div>
  );
};

export default SettingPage;
