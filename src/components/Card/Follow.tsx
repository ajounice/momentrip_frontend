import React, { useState } from "react";
import Avatar from "../common/Avatar";
import '../../styles/components/Card/Follow.css';

interface IFollow{
  profile : string;
  name : string;
  follow : boolean;
}

function Follow(){
  const [ following, setFollowing ] = useState(true);

  // 팔로우일때 클릭 api

  // 팔로잉일때 클릭하는 api

  return(
    <div className={'follow-card-container'}>
      <div className={'follow-card-inner-container'}>
        <div className={'user-info-container'}>
          <Avatar size={'md'} src={'https://picsum.photos/200'} />
          <span className={'user-nickName'}>name</span>
        </div>
        <button onClick={()=>{setFollowing(!following)}} className={'delete-button'}>{following ? "팔로잉" : "팔로우"}</button>
      </div>
    </div>
  );
}

export default Follow;
