import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Avatar from '../common/Avatar';
import '../../styles/components/Card/Follow.css';
import { IUserInfoInSF } from "../common/ProfileInSF";
import axios from "axios";
import { SERVER_API } from "../../config";

interface IFollow {
  following : IUserInfoInSF;
  setDeps : Dispatch<SetStateAction<boolean>>;
}

function Follow({following, setDeps}:IFollow) {
  const [ followState, setFollowState ] = useState(true);
  useEffect(()=>{
    console.log();
  },[followState]);

  // 팔로우일때 클릭 api
  const onClickFollow = () =>{
    const nickname = following.nickname;
    axios({
      method : "post",
      url : `${SERVER_API}/users/${nickname}/follow`,
      headers:{
        Authorization : `Bearer ${localStorage.getItem('Token')}`
      }
    })
      .then(()=>{
        setDeps((prev)=>!prev);
        setFollowState(true);
      })
      .catch((err)=>{
        console.log(err);
      })
  }


  // 언팔로우일때 클릭하는 api
  const onClickUnfollow = () =>{
    const nickname = following.nickname;
    axios({
      method : "delete",
      url : `${SERVER_API}/users/${nickname}/unfollow`,
      headers:{
        Authorization : `Bearer ${localStorage.getItem('Token')}`
      }
    })
      .then(()=>{
        setDeps((prev)=>!prev);
        setFollowState(false);
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  return (
    <div onClick={()=>{
      window.location.assign(`/profile/${following.nickname}`)
    }} className={'follow-card-container'}>
       <div className={'follow-card-inner-container'}>
        <div className={'user-info-container'}>
          <Avatar size={'md'} src={following.image!==null ? following.image :'/img/profile_default.png'} />
          <span className={'user-nickName'}>{following.nickname}</span>
        </div>
        <button onClick={followState? onClickUnfollow : onClickFollow} className={followState?'follow-page-follow-button' :'delete-button'}>{followState ? "팔로잉" : "팔로우"}</button>
      </div>
    </div>
  );
}

export default Follow;
