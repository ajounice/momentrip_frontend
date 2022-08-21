import React, { useEffect, useState } from 'react';
import '../../styles/components/common/Navigation.css';
import {
  // eslint-disable-next-line max-len
  RiInboxArchiveLine,
  RiUser3Line,
  RiVideoAddLine,
  RiNotification2Line,
  RiHeart3Line,
  RiQuestionAnswerLine,
  RiShareForwardFill,
  RiListUnordered,
  RiHeart3Fill,
} from 'react-icons/ri';

const BottomNavigation = function () {
  return (
    <div className="bottom-nav-container">
      <RiInboxArchiveLine className="bottom-icon" />
      <RiVideoAddLine className="bottom-icon" />
      <RiUser3Line className="bottom-icon" />
    </div>
  );
};

const TopNavigation = function () {
  const [current, setCurrent] = useState({
    home: true,
    search: false,
    following: false,
  });

  const [topNavContainerStyle, setTopNavContainerStyle] = useState('top-nav-text-container style-home');

  const onClickHandlerTopNavigation = function (e :React.MouseEvent) {
    e.preventDefault();

    console.log(e.currentTarget.innerHTML);
    if (e.currentTarget.innerHTML === '홈') {
      setCurrent({
        home: true,
        search: false,
        following: false,
      });
      setTopNavContainerStyle('top-nav-text-container style-home');
    } else if (e.currentTarget.innerHTML === '검색') {
      setCurrent({
        home: false,
        search: true,
        following: false,
      });
      setTopNavContainerStyle('top-nav-text-container style-not-home');
    } else {
      setCurrent({
        home: false,
        search: false,
        following: true,
      });
      setTopNavContainerStyle('top-nav-text-container style-not-home');
    }
  };

  useEffect(() => {
    console.log(current);
  }, [current, topNavContainerStyle]);

  return (
    <div className="top-nav-container">
      <RiNotification2Line className="top-icon" />
      <div className={`${topNavContainerStyle}`}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <h1 className={current.following ? 'style-current-black' : 'style-not-current'} onClick={onClickHandlerTopNavigation}>팔로잉</h1>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <h1 className={current.home ? 'style-current-white' : 'style-not-current'} onClick={onClickHandlerTopNavigation}>홈</h1>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <h1 className={current.search ? 'style-current-black' : 'style-not-current'} onClick={onClickHandlerTopNavigation}>검색</h1>
      </div>
    </div>
  );
};

const VerticalNavigation = function () {
  // Props
  // 해당 숏폼을 좋아요 눌렀는지
  // 해당 숏폼에 대한 정보
  // 해당 숏폼에 달린 댓글 정보

  const [like, setLike] = useState(false);

  return (
    <div className="vertical-navigation-container">
      { like ? <RiHeart3Fill onClick={() => { setLike(false); }} className="vertical-icons" /> : <RiHeart3Line onClick={() => { setLike(true); }} className="vertical-icons" />}
      <RiQuestionAnswerLine className="vertical-icons" />
      <RiShareForwardFill className="vertical-icons" />
      <RiListUnordered className="vertical-icons" />
    </div>
  );
};

export { BottomNavigation, TopNavigation, VerticalNavigation };
