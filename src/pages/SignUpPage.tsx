import React, { useEffect, useState } from 'react';
import '../styles/pages/Signup.css';
import Input from '../components/common/Input';
import axios from 'axios';
import { TopBar } from '../components/common/Navigation';
import { SERVER_API } from '../config';

function SignUpPage() {
  const [id, setID] = useState('');
  const [pw, setPW] = useState('');
  const [pw2, setPW2] = useState('');
  const [buttonActive, setButtonActive] = useState(false);
  const [duplicate, setDuplicate] = useState(true);

  useEffect(() => {
    console.log();
  }, [duplicate]);

  useEffect(() => {
    const reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gm;

    if (reg.test(id) && pw.length >= 8 && pw2.length >= 8 && pw === pw2) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [id, pw, pw2]);

  const [isAgreement, setIsAgreement] = useState(false);

  const onClickDuplicate = () => {
    // TODO:ID 중복확인
    axios({
      method: 'post',
      url: `${SERVER_API}/auth/email/duplicate`,
      data: {
        email: id,
      },
    })
      .then((res) => {
        if (res.data) {
          alert('중복된 이메일입니다.');
          setDuplicate(true);
        } else {
          setDuplicate(false);
        }
      })
      .catch((err) => {
        alert('중복된 ID입니다.');
      });
  };

  const onClickSignUp = () => {
    // TODO: SIGNUP API
    axios
      .post(`${SERVER_API}/auth/signup`, {
        email: id,
        password: pw,
      })
      .then((res) => {
        if (res.status === 201) {
          alert('회원가입 성공');
          window.location.assign('/');
        }
      })
      .catch((err) => {
        // TODO : 백엔드 연결 후 로직 수정
        alert('회원가입 실패');
      });
  };

  return (
    <div className={'signup-container'}>
      <div className={'signup-inner-container'}>
        <TopBar beforeButton={true} centerText={'회원가입'} centerTextType={'page'} />
        <div className={'signup-input-container'}>
          <div className="pb-24">
            <Input
              onChangeEventHandler={(e) => {
                setID(e.currentTarget.value);

                if (duplicate) {
                  setDuplicate(true);
                }
              }}
              label={'Email'}
              type={'text'}
              id={'id'}
              disabled={false}
              placeholder={'Email을 입력해주세요.'}
            />
            <Input
              onChangeEventHandler={(e) => {
                setPW(e.currentTarget.value);
              }}
              label={'PW'}
              type={'password'}
              id={'pw'}
              disabled={false}
              placeholder={'8글자 이상의 대/소문자 알파벳과 숫자로 입력해주세요.'}
            />
            <Input
              onChangeEventHandler={(e) => {
                setPW2(e.currentTarget.value);
              }}
              label={'PW Check'}
              type={'password'}
              id={'pw2'}
              disabled={false}
              placeholder={'Password 확인'}
            />
            {pw2 !== '' && (
              <span className={pw === pw2 ? 'pw-pw2-correct' : 'pw-pw2-incorrect'}>
                {pw === pw2 ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.'}
              </span>
            )}
            <button onClick={onClickDuplicate} className={!duplicate ? 'active-submit-button' : 'submit-button'}>
              ID 중복확인
            </button>
            <div className="mt-10 bg-white border-gray-300 border rounded-lg px-4 py-4">
              <span className="font-semibold">개인정보의 수집 및 이용 동의서</span>
              <br /> - 모멘트립은 서비스를 위한 회원가입, 고지사항 전달 등을 위해 아래와 같이 개인정보를 수집 및
              이용합니다. 이용자가 제공한 모든 정보는 다음의 목적을 위해 활용하며, 하기 목적 이외의 용도로는 사용되지
              않습니다. <br />
              <br />
              1. 개인정보 수집 항목 및 수집.이용 목적 <br />
              <table className="border-2 w-full">
                <th className="border-2">수집 목적</th>
                <th className="border-2">수집 항목</th>
                <th className="border-2">수집 근거</th>
                <tr className="">
                  <td className="border-2">회원 식별 및 서비스 제공</td>
                  <td className="border-2">이메일, 비밀번호</td>
                  <td className="">개인정보 보호법</td>
                </tr>
                <tr className="">
                  <td className="border-2">서비스 변경 및 고지사항 전달</td>
                  <td className="border-2">이메일</td>
                  <td className="">제15조 제1항</td>
                </tr>
              </table>
              2. 개인정보 보유 및 이용기간 <br />- 수집.이용 동의일로부터 개인정보의 수집.이용목적을 달성할 때까지{' '}
              <br />
              3. 동의거부관리 <br />- 귀하께서는 본 안내에 따른 개인정보 수집, 이용에 대하여 동의를 거부할 권리가
              있습니다. 다만, 귀하가 개인정보의 수집/이용에 동의를 거부하실 경우 서비스를 이용할 수 없음을 알려드립니다.
            </div>
            <div className="relative flex items-start">
              <div className="flex h-8 items-center">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  onClick={(e) => {
                    setIsAgreement(e.currentTarget.checked);
                  }}
                />
              </div>
              <div className="ml-3 text-lg">
                <span id="comments-description" className="text-gray-800">
                  (필수)위 개인정보 수집 및 이용에 동의합니다.
                </span>
              </div>
            </div>

            <button
              onClick={
                buttonActive
                  ? isAgreement
                    ? onClickSignUp
                    : () => {
                        alert('개인정보 이용 및 수집에 동의해주세요');
                      }
                  : () => {
                      alert('이메일과 비밀번호 형식을 확인해주세요');
                    }
              }
              className={buttonActive ? 'active-submit-button' : 'submit-button'}
            >
              완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
