import React, { useState } from "react";
import '../../styles/pages/mypage/Follow.css';
import { TopBar } from "../../components/common/Navigation";
import Follow from "../../components/Card/Follow";
import Follower from "../../components/Card/Follower";

function FollowPage(){
  const [ currentTab, setCurrentTab] = useState({
    follower : true,
    follow : false,
  });

  return(
    <div className={'follow-following-page-container'}>
      <TopBar beforeButton={true} leftText={"nickName"} centerText={""} centerTextType={"user"} leftTextType={"user"} />

      <div className={'follow-following-page-inner-container'}>
        <div className={'follower-following-tab-container'}>
          <div onClick={()=>{setCurrentTab({follower: true, follow: false})}} className={currentTab.follower ? 'current-tab-div' : 'not-current-tab-div'}>
            <span className={currentTab.follower ? 'current-tab-span' : 'not-current-tab-span'}>팔로워{"1"}명</span>
          </div>
          <div onClick={()=>{setCurrentTab({follower: false, follow: true})}} className={currentTab.follow ? 'current-tab-div' : 'not-current-tab-div'}>
            <span className={currentTab.follow ? 'current-tab-span' : 'not-current-tab-span'}>팔로잉{"2"}명</span>
          </div>
        </div>
      </div>

      <div className={'follow-following-inner-container'}>
          <Follower />
          <Follow />
          <Follower />
          <Follow />
          <Follower />
          <Follow />
          <Follower />
          <Follow />
          <Follower />
          <Follow />
          <Follower />
          <Follow />
          <Follower />
          <Follow />
          <Follower />
          <Follow />
          <Follower />
          <Follow />
      </div>
    </div>
  );
}

export default FollowPage;
