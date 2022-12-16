import { TopBar } from "../../components/common/Navigation";
import Input from "../../components/common/Input";
import React, { useEffect, useState } from "react";
import '../../styles/pages/mypage/Setting.css';
import axios from "axios";
import BasicModal from "../../components/common/BasicModal";
import { useNavigate } from "react-router-dom";

function ChangePasswordPage() {
  const [ password, setPassword ] = useState({
    'currentPW': '',
    'changePW': '',
    'changePW2': '',
  });

  const navigation = useNavigate();

  const [view, setView] = useState(false);
  const [modalView, setModalView] = useState({
    view: false,
    result: ''
  });

  const onPressEnter = (e: any) => {
     if(e.code === 'Enter'|| e.type === 'click') {
        if(view && password.changePW === password.changePW2) {
          axios
            .patch(`${process.env.REACT_APP_API_URL}/users/my/edit/password`,{
              password: password.changePW,
              passwordConfirmation: password.currentPW
            }, {
              headers: {
                Authorization: `Bearer ${window.localStorage.getItem('Token')}`,
              },
            })
            .then((res) => {
              if(res.status === 200) {
                setModalView({view: true, result: 'success'});
              }
            })
            .catch((err) => {
              setModalView({view: true, result: 'fail'});
            });
        }
      }
  }

  const onChangeInput = (e: any) => {
    const temp = JSON.parse(JSON.stringify(password));
    temp[e.target.id] = e.target.value;
    setPassword(temp);
  }

  useEffect(()=> {
    // console.log(password);
    // 1. 정규식 체크
    // 2. change password === change password 2 check
    if(password.changePW.length >= 8 && password.changePW2.length >= 8) {
      setView(true);
    }
    else {
      setView(false);
    }

  },[password]);

  return(
    <div className={'change-password-container'}>
      {
        modalView.view
          ?  <>
            {
              modalView.result === 'success'
              ?
              <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <BasicModal title="비밀번호 변경에 성공하였습니다." open={true} setOpen={() => {navigation('/mypage/setting')}}>
                  <>
                    <div className="m-8"> </div>
                    <div className="flex gap-2">

                    </div>
                  </>
                </BasicModal>
              </div>
                :
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                  <BasicModal title="비밀번호 변경에 실패하였습니다." open={true} setOpen={() => {setModalView({view: false, result: ''})}}>
                    <>
                      <div className="m-8"> </div>
                      <div className="flex gap-2">
                      </div>
                    </>
                  </BasicModal>
                </div>
            }
          </>
          : <>
            <TopBar beforeButton={true} centerText={'비밀번호 설정'} centerTextType={'page'} />
            <div className={'password-change-inner-container'}>
              <div className={'password-change-input-container'}>
                <div>
                  <Input
                    onPress={onPressEnter}
                    label={'현재 비밀번호'}
                    type={'password'}
                    id={'currentPW'}
                    disabled={false}
                    onChangeEventHandler={onChangeInput}
                    placeholder={'현재 비밀번호를 입력하세요'}
                  />
                </div>

                <div className={'input-div'}>
                  <Input
                    onPress={onPressEnter}
                    label={'변경할 비밀번호'}
                    type={'password'}
                    id={'changePW'}
                    disabled={false}
                    onChangeEventHandler={onChangeInput}
                    placeholder={'변경할 비밀번호를 입력하세요.'}
                  />
                  {
                    password.changePW.length < 8 && password.changePW.length !== 0 ?
                      <span>8자 이상 입력하세요.</span>
                      : <></>
                  }
                </div>


                <div className={'input-div'}>
                  <Input
                    onPress={onPressEnter}
                    label={'변경할 비밀번호'}
                    type={'password'}
                    id={'changePW2'}
                    disabled={false}
                    onChangeEventHandler={onChangeInput}
                    placeholder={'변경할 비밀번호를 입력하세요.'}
                  />
                  {
                    password.changePW2.length < 8 && password.changePW2.length !== 0 ?
                      <span>8자 이상 입력하세요.</span>
                      : <></>
                  }
                </div>
                {
                  view
                    ?<div>
                      {
                        password.changePW === password.changePW2
                          ? <span className={'pw-pw2-correct'}>비밀번호가 일치합니다.</span>
                          :<span className={'pw-pw2-incorrect'}>비밀번호가 일치하지 않습니다.</span>
                      }
                    </div>
                    : <></>
                }

                <button onClick={onPressEnter} className={'password-change-button'} type={'submit'}>
                  확인
                </button>
              </div>
            </div></>
      }
    </div>
  )
}

export default ChangePasswordPage;
