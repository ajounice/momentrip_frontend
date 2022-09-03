import React from 'react';
import Input from '../../components/common/Input';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

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
  const serverCheck = false;

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
            label="이름 (require, max10)"
            disabled={false}
            placeholder="텍스트를 입력하세요"
            register={register('input4', {
              required: '이름을 입력해주세요',
              maxLength: {
                value: 10,
                message: '글자 수는 10자 이하입니다.',
              },
            })}
            errorMessage={errors.input4?.message}
            validCheck={watch('input4') !== 'testid'}
            validMessage={isSubmitted ? '유효한 아이디입니다.' : ''}
          ></Input>
        </div>
        <div className="my-8">
          <Input
            type="text"
            id="input5"
            disabled={false}
            placeholder="텍스트를 입력하세요"
            defaultValue="입력된 텍스트"
            register={register('input5')}
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
