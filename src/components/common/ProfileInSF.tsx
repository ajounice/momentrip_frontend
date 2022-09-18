import React, { useEffect, useState } from "react";
import '../../styles/components/common/ProfileInSF.css';
import Avatar from "./Avatar";


export interface IUserInfoInSF{
  email : string;
  id : number;
  image : string;
  intro : string;
  name : string;
  nickname : string;
  password : string;
  type : boolean;
}

interface IProfileSF{
  user : IUserInfoInSF;
}

// { image, type, nickname, name, intro, email, password, id}:IUserInfoInSF
function ProfileInSF({user}:IProfileSF){
  const [ follow, setFollow ] = useState(false);

  const onClickFollow = () => {
    setFollow((prev)=>!prev)
  }

  useEffect(()=>{
    console.log("ProfileSF : ",user);
  },[]);

  return(
    <div className={'profile-in-sf-container'}>
      <div className={'profile-container'}>
        <Avatar
          src={user !== null && user.image !== '' ? user.image : '/img/profile_default.png'}
          nickname={user !== null ? user.nickname : "유저"}
          size={'md'}
          biz={user !== null ? user.type : false}
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
