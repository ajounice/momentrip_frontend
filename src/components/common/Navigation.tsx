import React from 'react';
import '../../styles/components/common/Navigation.css';
import {
  RiInboxArchiveLine, RiUser3Line, RiVideoAddLine, RiNotification2Line,
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
  return (
    <div className="top-nav-container">
      <RiNotification2Line className="top-icon" />
      <div className="top-nav-text-container">
        <h1>팔로잉</h1>
        <h1>홈</h1>
        <h1>검색</h1>
      </div>
    </div>
  );
};

export { BottomNavigation, TopNavigation };
