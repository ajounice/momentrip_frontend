import React from 'react';
import Input from '../../components/common/Input';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

// interface IFormType {
//   input1: string;
//   input2: string;
//   input3: string;
//   input4: string;
// }

// 목업데이터 - 서버에서 받아온 정보로 가정
const mockData = {
  input3: 'cute.travel',
  input4: '',
};

const ComInput = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors, isSubmitted },
    getValues,
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    // defaultValues: mockData as IFormType,
  });
  const onSubmit = async (data: any) => {
    console.log(data);
    console.log('서버에 전송하여 저장');
  };

  const onError = () => {
    console.log(errors);
    return;
  };

  const [idCheck, setIdCheck] = useState(true);
  const [idCheckMsg, setIdCheckMsg] = useState('');
  const [serverCheck, setServerCheck] = useState(false); // 서버에서 체크한 적이 있는지

  const serverValidCheck = (str: string) => {
    if (str === 'testid') {
      return true;
    } else {
      return false;
    }
  };

  // useEffect(() => {
  //   if (isSubmitted) {
  //     if (watch('input4').length > 10) {
  //       setIdCheckMsg('아이디의 길이는 10글자 이내여야합니다.');
  //       setIdCheck(true);
  //       // } else if (serverValidCheck(watch('input4'))) {
  //       // TODO validCheck=서버에서 사용자가 입력한 값을 보내고 유효한지 (중복이 아닌지 등) true(valid) false(invalid)로 반환받은 값을 보냄
  //       // setIdCheckMsg('중복된 아이디입니다.');
  //       // setIdCheck(true);
  //       // setServerCheck(true);
  //     } else if (watch('input4') === '') {
  //       setIdCheckMsg('아이디를 입력해주세요.');
  //       setIdCheck(true);
  //     } else {
  //       setIdCheck(false);
  //     }
  //   }
  // }, [watch('input4')]);

  return (
    <div>
      <form className="m-4" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="my-8">
          <Input
            label="이름"
            type="text"
            id="input1"
            disabled={false}
            placeholder="Label이 있는 경우"
            register={register('input1')}
          ></Input>
        </div>
        <div className="my-8">
          <Input
            type="text"
            id="input2"
            disabled={false}
            placeholder="Label이 없는 경우"
            register={register('input2')}
          ></Input>
        </div>
        <div className="my-8">
          <Input
            label="기존에 서버에 저장된 값이 있을때"
            type="text"
            id="input3"
            disabled={false}
            placeholder="텍스트를 입력하세요."
            defaultValue={mockData.input3}
            register={register('input3')}
          ></Input>
        </div>
        <div className="my-8">
          <Input
            type="text"
            id="input4"
            label="닉네임 (require, max10)"
            disabled={false}
            placeholder="텍스트를 입력하세요"
            register={register('input4', {
              required: '닉네임을 입력해주세요',
              pattern: {
                value: /^[0-9a-zA-Z\b.]*$/i,
                message: '숫자와 영어, 마침표로만 작성해주세요',
              },
            })}
            errorMessage={errors.input4?.message}
            // validMessage={isSubmitted && serverCheck ? '유효한 아이디입니다.' : ''}
          ></Input>
        </div>
        <div className="my-8">
          <Input
            type="text"
            id="input5"
            disabled={false}
            placeholder="텍스트를 입력하세요"
            defaultValue="사전에 입력된 텍스트, 기존에 저장된 정보를 불러올때 등"
            register={register('input5')}
          ></Input>
        </div>
        <div className="my-8">
          <Input
            type="password"
            id="input6"
            disabled={false}
            placeholder="비밀번호 입력"
            register={register('input6')}
          ></Input>
        </div>

        <button
          type="submit"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ComInput;
