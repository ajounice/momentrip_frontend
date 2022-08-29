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

const iconColor = 'white';

const BottomNavigation = function () {
  return (
    <div className="bottom-nav-container">
      <RiInboxArchiveLine fill={iconColor} className="icon" />
      <RiVideoAddLine fill={iconColor} className="icon" />
      <RiUser3Line fill={iconColor} className="icon" />
    </div>
  );
};

const TopNavigation = function () {
  const [current, setCurrent] = useState({
    home: true,
    search: false,
    following: false,
    alarmColor: 'white',
  });

  const [topNavContainerStyle, setTopNavContainerStyle] = useState('top-nav-text-container style-home');

  const onClickHandlerTopNavigation = function (e: React.MouseEvent) {
    e.preventDefault();

    console.log(e.currentTarget.innerHTML);
    if (e.currentTarget.innerHTML === '홈') {
      setCurrent({
        home: true,
        search: false,
        following: false,
        alarmColor: 'white',
      });
      setTopNavContainerStyle('top-nav-text-container style-home');
    } else if (e.currentTarget.innerHTML === '검색') {
      setCurrent({
        home: false,
        search: true,
        following: false,
        alarmColor: 'black',
      });
      setTopNavContainerStyle('top-nav-text-container style-not-home');
    } else {
      setCurrent({
        home: false,
        search: false,
        following: true,
        alarmColor: 'black',
      });
      setTopNavContainerStyle('top-nav-text-container style-not-home');
    }
  };

  useEffect(() => {
    console.log(current);
  }, [current, topNavContainerStyle]);

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

const VerticalNavigation = function () {
  // Props
  // 해당 숏폼을 좋아요 눌렀는지
  // 해당 숏폼에 대한 정보
  // 해당 숏폼에 달린 댓글 정보

  const [like, setLike] = useState(false);

  return (
    <div className="vertical-navigation-container">
      {like ? (
        <RiHeart3Fill
          fill={iconColor}
          onClick={() => {
            setLike(false);
          }}
          className="icon"
        />
      ) : (
        <RiHeart3Line
          fill={iconColor}
          onClick={() => {
            setLike(true);
          }}
          className="icon"
        />
      )}
      <RiQuestionAnswerLine fill={iconColor} className="icon" />
      <RiShareForwardFill fill={iconColor} className="icon" />
      <RiListUnordered fill={iconColor} className="icon" />
    </div>
  );
};

export { BottomNavigation, TopNavigation, VerticalNavigation };
