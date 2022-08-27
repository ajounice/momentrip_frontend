import { UseFormRegisterReturn } from 'react-hook-form';
import React from 'react';

export default function Input() {
  return <div>aa</div>;
}

// interface IInput {
//   type : string;
//   id: string;
//   disabled : boolean;
//   register: UseFormRegisterReturn;
//   // value: string;
//   placeholder: string;
//   validMessage?: string;
//   errorMessage?: string;
// }
// // valid나 error msg 둘 중 하나만 필요

// function Input({
//   type = "text",
//   id,
//   disabled = false,
//   register,
//   placeholder = "",
//   validMessage,
//   errorMessage
// }:IInput) {
//   return (
// <div>
//       <input
//       type={type}
//       name={id}
//       id={id}
//       className=""
//       placeholder={placeholder}
//       {...register}
//       // {disabled && "disabled"}
//       />
//       {errorMessage && <span className="text-red-600 text-sm font-medium">{errorMessage}</span>}
//       {validMessage && <span className="text-red-600 text-sm font-medium">{validMessage}</span>}
//     </div>
//   );
// };

// export default Input;
