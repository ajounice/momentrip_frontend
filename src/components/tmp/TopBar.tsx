import React, { useState } from 'react';
import { RiNotification2Line, RiArrowLeftLine, RiCheckFill, RiMore2Fill } from 'react-icons/ri';

import { ITopBar } from '../../globalType';

export default function TopBar({
  beforeButton,
  leftText,
  leftTextType,
  centerText,
  centerTextType,
  alarm,
  alarmOnClickEvent,
  checkButton,
  checkButtonOnClickEvent,
  dropdown,
}: // dropdownList,
ITopBar) {
  const [dropDown, setDropDown] = useState<boolean>(false);

  return <div className={'top-bar-container'}></div>;
}
