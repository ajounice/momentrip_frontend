import React, { useState } from "react";
import '../../styles/components/common/ProfileInSF.css';
import Avatar from "./Avatar";

function ProfileInSF(){
  const [ follow, setFollow ] = useState(false);

  const onClickFollow = () => {
    setFollow((prev)=>!prev)
  }

  return(
    <div className={'profile-in-sf-container'}>
      <div className={'profile-container'}>
        <Avatar
          src={"https://picsum.photos/200"}
          nickname={"바다냥이"}
          size={'md'}
          biz={true}
          badge={"night"}
        />
      </div>
      <div className={'follow-following-button-container'}>
        <button onClick={onClickFollow} className={follow ?'follow-button' : 'following-button'} type={'submit'} >{ follow ? "팔로우" : "팔로잉"}</button>
      </div>
    </div>
  );
}

export default ProfileInSF;
