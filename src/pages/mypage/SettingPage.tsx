import React, { useState } from 'react';
import '../../styles/pages/mypage/Setting.css';
import { TopBar } from '../../components/common/Navigation';
import Input from '../../components/common/Input';
import axios from 'axios';
import CustomModal from "../../components/common/CustomModal";
import Button from "../../components/Button/Button";
import { useNavigate, useNavigationType } from "react-router-dom";

const SettingPage = () => {
  const [quit, setQuit] = useState(false); // 탈퇴 state
  const navigation = useNavigate();

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

      <TopBar beforeButton={true} centerText={'사용자 설정'} centerTextType={'page'} />
      <div className={'setting-page-inner-container'}>
        <h3
          onClick={() => {
            navigation('/mypage/setting/password');
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
