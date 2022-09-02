import React, { useEffect, useState } from 'react';
import '../../styles/components/common/Navigation.css';
import {useNavigate} from 'react-router-dom';
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

const defaultCurrent = {
  home: true,
  search: false,
  following: false,
  alarmColor: 'white',
};

const BottomNavigation = function () {
  const [color, setColor] = useState('white');

  useEffect(()=>{
    console.log("Vertical : ",color);

    if(window.location.pathname === '/home'){
      setColor('white');
    }else{
      setColor('black');
    }
  },[window.location.pathname]);

  return (
    <div className="bottom-nav-container">
      <RiInboxArchiveLine fill={color} className="icon" />
      <RiVideoAddLine fill={color} className="icon" />
      <RiUser3Line fill={color} className="icon" />
    </div>
  );
};

const TopNavigation = function () {
  const [current, setCurrent] = useState(defaultCurrent);
  const navigation = useNavigate();

  useEffect(() => {
    console.log(current);
  }, [current]);

  const [topNavContainerStyle, setTopNavContainerStyle] = useState('top-nav-text-container style-home');

  const onClickHandlerTopNavigation = function (e: React.MouseEvent) {
    e.preventDefault();

    console.log(e.currentTarget.innerHTML);
    if (e.currentTarget.innerHTML === '홈') {
      setCurrent(defaultCurrent);
      setTopNavContainerStyle('top-nav-text-container style-home');
      navigation('/home');
    } else if (e.currentTarget.innerHTML === '검색') {
      setCurrent({
        ...defaultCurrent,
        home: false,
        search: true,
        alarmColor: 'black',
      });
      setTopNavContainerStyle('top-nav-text-container style-not-home');
      navigation('/search');
    } else {
      setCurrent({
        ...defaultCurrent,
        home: false,
        following: true,
        alarmColor: 'black',
      });
      setTopNavContainerStyle('top-nav-text-container style-not-home');
      navigation('/following');
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

const VerticalNavigation = function () {
  // Props
  // 해당 숏폼을 좋아요 눌렀는지
  // 해당 숏폼에 대한 정보
  // 해당 숏폼에 달린 댓글 정보

  const [like, setLike] = useState(false);
  const [color, setColor] = useState('white');

  useEffect(()=>{
    if (window.location.pathname === '/home') {
      setColor('white');
    } else {
      setColor('black');
    }

    console.log("Bottom");
    console.log(window.location.pathname);
    console.log(color);
  },[window.location.pathname]);



  return (
    <div className="vertical-navigation-container">
      {like ? (
        <RiHeart3Fill
          fill={color}
          onClick={() => {
            setLike(false);
          }}
          className="icon"
        />
      ) : (
        <RiHeart3Line
          fill={color}
          onClick={() => {
            setLike(true);
          }}
          className="icon"
        />
      )}
      <RiQuestionAnswerLine fill={color} className="icon" />
      <RiShareForwardFill fill={color} className="icon" />
      <RiListUnordered fill={color} className="icon" />
    </div>
  );
};

export { BottomNavigation, TopNavigation, VerticalNavigation };
