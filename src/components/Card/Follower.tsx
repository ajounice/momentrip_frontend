import React, { Dispatch, SetStateAction } from "react";
import Avatar from '../common/Avatar';
import '../../styles/components/Card/Follow.css';
import { IUserInfoInSF } from "../common/ProfileInSF";
import axios from "axios";
import { SERVER_API } from "../../config";

interface IFollowers{
  follower : IUserInfoInSF;
  setDeps : Dispatch<SetStateAction<boolean>>;
}

function Follower({follower,setDeps}:IFollowers) {

  const onClickDelete = () => {
    const nickname = follower.nickname;
    // TODO 나를 팔로우하고 있는 사람 삭제하는 APi 추가해야함.


  }

  return (
    <div onClick={()=>{
      window.location.assign(`/profile/${follower.nickname}`)
    }} className={'follow-card-container'}>
       <div className={'follow-card-inner-container'}>
        <div className={'user-info-container'}>
          <Avatar size={'md'} src={follower.image !== null ? follower.image : '/img/profile_default.png'} />
          <span className={'user-nickName'}>{follower.nickname}</span>
        </div>
        {/*<button onClick={onClickDelete} className={'delete-button'}>삭제</button>*/}
      </div>
    </div>
  );
}

export default Follower;
