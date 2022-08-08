import React from 'react';
import {
  IButton,
} from '../../globalType';
import '../../styles/components/Button/Button.css';

interface ButtonProps{
  buttonStyle : IButton;
  // eslint-disable-next-line no-undef
  onClickEvent : React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ buttonStyle, onClickEvent }:ButtonProps) {
  let css;
  if (buttonStyle.disabled) {
    css = `${buttonStyle.styleType}-${buttonStyle.color}-disabled ${buttonStyle.size} ${buttonStyle.fontWeight}`;
  } else {
    css = `${buttonStyle.styleType}-${buttonStyle.color} ${buttonStyle.size} ${buttonStyle.fontWeight}`;
  }

  return (
    // eslint-disable-next-line max-len,react/button-has-type
    <button className={css} type={buttonStyle.buttonType} onClick={onClickEvent}>{buttonStyle.text}</button>
  );
}
export default Button;
