import React, { useEffect, useState } from 'react';
import '../../styles/pages/mypage/Follow.css';
import { TopBar } from '../../components/common/Navigation';
import Follow from '../../components/Card/Follow';
import Follower from '../../components/Card/Follower';

function FollowPage() {
  const [currentTab, setCurrentTab] = useState({
    follower: true,
    follow: false,
  });

  useEffect(()=>{
    console.log("");
  },[]);

  useEffect(() => {
    const query = window.location.href.slice(window.location.href.search('=') + 1);
    if (query === 'follow') {
      setCurrentTab({
        follower: false,
        follow: true,
      });
    }
  }, []);

  return (
    <div className={'follow-following-page-container'}>
      <TopBar beforeButton={true} leftText={''} centerText={''} centerTextType={'user'} leftTextType={'user'} />

      <div className={'follow-following-page-inner-container'}>
        <div className={'follower-following-tab-container'}>
          <div
            onClick={() => {
              setCurrentTab({ follower: true, follow: false });
            }}
            className={currentTab.follower ? 'current-tab-div' : 'not-current-tab-div'}
          >
            <span className={currentTab.follower ? 'current-tab-span' : 'not-current-tab-span'}>팔로워{0}명</span>
          </div>
          <div
            onClick={() => {
              setCurrentTab({ follower: false, follow: true });
            }}
            className={currentTab.follow ? 'current-tab-div' : 'not-current-tab-div'}
          >
            <span className={currentTab.follow ? 'current-tab-span' : 'not-current-tab-span'}>팔로잉{0}명</span>
          </div>
        </div>
      </div>

      <div className={'follow-following-inner-container'}>
        {currentTab.follower ? <Follower /> : null}
        {currentTab.follow ? <Follow /> : null}
      </div>
    </div>
  );
}

export default FollowPage;
