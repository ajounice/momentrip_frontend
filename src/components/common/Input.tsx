import { UseFormRegisterReturn } from 'react-hook-form';
import React, { Dispatch, SetStateAction } from 'react';

interface IInput {
  type: string; // text, password
  id: string;
  label?: string;
  disabled: boolean;
  register?: UseFormRegisterReturn;
  placeholder: string;
  errorMessage?: any;
  defaultValue?: string;
  onChangeEventHandler?: (e: any) => void;
}
// valid나 error msg 둘 중 하나만 필요

export default function Input({
  type = 'text',
  label,
  id,
  disabled = false,
  register,
  placeholder = '',
  errorMessage,
  defaultValue = '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChangeEventHandler = () => {}, // input 값 바뀌는 함수가 없어서 추가함.
}: IInput) {
  return (
    <div>
      {label ? (
        <label htmlFor={id} className="ml-2 block font-medium text-gray-700">
          {label}
        </label>
      ) : null}
      {register ? (
        <div className="mt-1 border-b border-gray-300 ">
          <input
            type={type}
            id={id}
            className="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-gray-600 focus:ring-0 "
            placeholder={placeholder}
            {...register}
            disabled={disabled}
            defaultValue={defaultValue}
            onChange={onChangeEventHandler}
          />
          {errorMessage && <span className="text-red-600 text-sm font-medium">{errorMessage}</span>}
        </div>
      ) : (
        <div className="mt-1 border-b border-gray-300 ">
          <input
            type={type}
            id={id}
            className="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-gray-600 focus:ring-0 "
            placeholder={placeholder}
            disabled={disabled}
            defaultValue={defaultValue}
            onChange={onChangeEventHandler}
          />
          {/* {errorMessage && <span className="text-red-600 text-sm font-medium">{errorMessage}</span>}
          {validMessage && <span className="text-red-600 text-sm font-medium">{validMessage}</span>} */}
        </div>
      )}
    </div>
  );
}
