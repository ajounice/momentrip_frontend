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
  dropdownList,
}: ITopBar) {
  const [dropDown, setDropDown] = useState<boolean>(false);

  return (
    <div className={'top-bar-container'}>
      <div className={'top-bar-inner-left-container'}>
        {/* 뒤로가기 / 왼쪽 텍스트 */}
        {/*  뒤로가기*/}
        {beforeButton ? (
          <div
            onClick={() => {
              history.back();
            }}
            // onClick={beforeButtonOnClickEvent}
            className={'before-button-container'}
          >
            <RiArrowLeftLine className={'icon'} />
          </div>
        ) : null}

        <div className={'left-text-container'}>
          {/* 왼쪽 텍스트 */}
          <h1
            className={
              leftTextType !== null && leftTextType === 'user'
                ? 'top-bar-inner-text-type-user'
                : 'top-bar-inner-text-type-page'
            }
          >
            {leftText}
          </h1>
        </div>
      </div>

      {centerText === '' ? null : (
        <div className={`top-bar-inner-center-container`}>
          {/* 가운데 텍스트 */}
          <h1
            className={
              centerTextType !== null && centerTextType === 'user'
                ? 'top-bar-inner-text-type-user'
                : 'top-bar-inner-text-type-page'
            }
          >
            {centerText}
          </h1>
        </div>
      )}

      <div className={'top-bar-inner-right-container'}>
        {/* 알람 아이콘 / 체크 아이콘 / 드롭다운 메뉴 */}
        {/* 알람 */}
        {alarm ? (
          <div onClick={alarmOnClickEvent} className={'right-icon-container'}>
            <>
              <RiNotification2Line className={'alarm-icon'} />
            </>
          </div>
        ) : null}

        {/* 드롭다운 */}
        {dropdown ? (
          <div
            onClick={() => {
              setDropDown((prev) => !prev);
            }}
            className={'right-icon-container'}
          >
            <RiMore2Fill className={'icon'} />
            {dropdownList !== undefined && dropDown ? (
              <div className={'dropdown-container'}>
                {dropdownList.map((item, i) => {
                  return <div className={'dropdown-list-item'}>{item}</div>;
                })}
              </div>
            ) : null}
          </div>
        ) : null}

        {/* 체크 */}
        {checkButton ? (
          <div onClick={checkButtonOnClickEvent} className={'right-icon-container'}>
            <RiCheckFill className={'icon'} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
