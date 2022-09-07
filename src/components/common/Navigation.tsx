import React, { useCallback, useEffect, useState } from 'react';
import '../../styles/components/common/Navigation.css';
import { useNavigate } from 'react-router-dom';

import {
  RiInboxArchiveLine,
  RiUser3Line,
  RiVideoAddLine,
  RiNotification2Line,
  RiHeart3Line,
  RiQuestionAnswerLine,
  RiShareForwardLine,
  RiListUnordered,
  RiHeart3Fill,
  RiArrowLeftLine,
  RiCheckFill,
  RiMore2Fill,
} from 'react-icons/ri';
import { ITopBar, IVerticalNavigation } from '../../globalType';

const defaultCurrent = {
  home: true,
  search: false,
  following: false,
  alarmColor: 'white',
};

interface IBottomNavigation {
  color: 'black' | 'white';
  // activeCSS? : boolean;
}

function BottomNavigation({ color }: IBottomNavigation) {
  const navigation = useNavigate();

  return (
    <div className="bottom-nav-container">
      <RiInboxArchiveLine
        onClick={() => {
          navigation('/wish');
        }}
        fill={color}
        className="icon"
      />
      {/*<div className={(window.location.pathname === '/upload' && activeCSS === true) ? `upload-button active` : "upload-button"}>*/}
      {/*<label htmlFor={'upload-file'}>*/}
      {/* TODO::click하면 모달 띄우는 방식으로 수정 */}
      <RiVideoAddLine
        onClick={() => {
          navigation('/upload');
        }}
        fill={color}
        className="icon"
      />
      {/*</label>*/}
      {/*<input accept="video/*" type={'file'} id="upload-file"/>*/}
      {/*</div>*/}
      <RiUser3Line
        onClick={() => {
          navigation('/mypage');
        }}
        fill={color}
        className="icon"
      />
    </div>
  );
}

const TopNavigation = function () {
  const [current, setCurrent] = useState(defaultCurrent);
  const navigation = useNavigate();

  useEffect(() => {
    if (current.home) {
      navigation('/home');
    } else if (current.search) {
      navigation('/search');
    } else {
      navigation('/following');
    }
  }, [current]);

  const [topNavContainerStyle, setTopNavContainerStyle] = useState('top-nav-text-container style-home');

  const onClickHandlerTopNavigation = function (e: React.MouseEvent) {
    e.preventDefault();

    if (e.currentTarget.innerHTML === '홈') {
      setCurrent(defaultCurrent);
      setTopNavContainerStyle('top-nav-text-container style-home');
    } else if (e.currentTarget.innerHTML === '검색') {
      setCurrent({
        ...defaultCurrent,
        home: false,
        search: true,
        alarmColor: 'black',
      });
      setTopNavContainerStyle('top-nav-text-container style-not-home');
    } else {
      setCurrent({
        ...defaultCurrent,
        home: false,
        following: true,
        alarmColor: 'black',
      });
      setTopNavContainerStyle('top-nav-text-container style-not-home');
    }
  };

  return (
    <div className="top-nav-container">
      <RiNotification2Line fill={current.alarmColor} className="top-icon" />
      <div className={`${topNavContainerStyle}`}>
        <h1
          className={current.following ? 'style-current-black' : 'style-not-current'}
          onClick={onClickHandlerTopNavigation}
        >
          팔로잉
        </h1>
        <h1
          className={current.home ? 'style-current-white' : 'style-not-current'}
          onClick={onClickHandlerTopNavigation}
        >
          홈
        </h1>
        <h1
          className={current.search ? 'style-current-black' : 'style-not-current'}
          onClick={onClickHandlerTopNavigation}
        >
          검색
        </h1>
      </div>
    </div>
  );
};

const VerticalNavigation = function ({
  isSelectedInfo,
  setIsSelectedInfo,
  isSelectedHeart,
  setIsSelectedHeart,
  isSelectComment,
  setIsSelectComment,
  isClickedShare,
  setIsClickedShare,
}: IVerticalNavigation) {
  // Props
  // 해당 숏폼을 좋아요 눌렀는지
  // 해당 숏폼에 대한 정보
  // 해당 숏폼에 달린 댓글 정보

  const onClickShare = useCallback(() => {
    setIsClickedShare(!isClickedShare);
  }, [isClickedShare]);

  const onClickHeart = useCallback(() => {
    setIsSelectedHeart(!isSelectedHeart);
  }, [isSelectedHeart]);

  const onClickComment = useCallback(() => {
    setIsSelectComment(true);
  }, [isSelectComment]);

  const onClickInfo = useCallback(() => {
    setIsSelectedInfo(!isSelectedInfo);
  }, [isSelectedInfo]);

  return (
    <section className={'vertical-navigation-container'}>
      {isSelectedHeart ? (
        <RiHeart3Fill onClick={onClickHeart} className={'icon'} />
      ) : (
        <RiHeart3Line onClick={onClickHeart} className={'icon'} />
      )}
      <RiQuestionAnswerLine onClick={onClickComment} className={'icon'} />
      <RiShareForwardLine onClick={onClickShare} className={'icon'} />
      <RiListUnordered onClick={onClickInfo} className={'icon'} />
    </section>
  );

  //
  // const [like, setLike] = useState(false);
  // const color ='white';
  //
  // return (
  //   <div className="vertical-navigation-container">
  //     {like ? (
  //       <RiHeart3Fill
  //         fill={color}
  //         onClick={() => {
  //           setLike(false);
  //         }}
  //         className="icon"
  //       />
  //     ) : (
  //       <RiHeart3Line
  //         fill={color}
  //         onClick={() => {
  //           setLike(true);
  //         }}
  //         className="icon"
  //       />
  //     )}
  //     <RiQuestionAnswerLine fill={color} className="icon" />
  //     <RiShareForwardFill fill={color} className="icon" />
  //     <RiListUnordered fill={color} className="icon" />
  //   </div>
  // );
};

function TopBar({
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
  const navigation = useNavigate();

  /* onClickEvent in TopBar */
  // click event type 6
  // 프로필 편집 // routing

  // 개인정보 설정 // 없애도 될듯 ?
  // 설정 // routing
  // 공유 // url 생성 ? 모달로 띄어주기 ?
  // 사용자 차단 // server api
  // 사용자 신고 // server api
  // 선택
  // 폴더 삭제 // server api
  // 폴더 이름 변경 // server api

  // 기본적인 네비게이션바에서 접근 가능한페이지들은 뒤로가기 버튼 클릭시 홈으로 이동
  const DefaultPathList = ['/home', '/following', '/search', '/upload', '/mypage', '/wish'];

  return (
    <div className={'top-bar-container-bg'}>
      <div className={'top-bar-inner-left-container'}>
        {/* 뒤로가기 / 왼쪽 텍스트 */}
        {/*  뒤로가기*/}
        {beforeButton ? (
          <div
            onClick={() => {
              DefaultPathList.indexOf(window.location.pathname) > -1 ? navigation('/home') : history.back();
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
          <h1 className={'top-bar-inner-text-type-page'}>{centerText}</h1>
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
                {dropdownList.map((item) => {
                  return (
                    <div
                      className={'dropdown-list-item'}
                      onClick={
                        item === '프로필 편집'
                          ? () => {
                              navigation('/user/profile/setting');
                            }
                          : () => {
                              alert(item);
                            }
                      }
                    >
                      {item}
                    </div>
                  );
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

export { TopBar, BottomNavigation, TopNavigation, VerticalNavigation };
