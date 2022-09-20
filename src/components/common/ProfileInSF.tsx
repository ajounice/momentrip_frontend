import React, { useEffect, useState } from "react";
import '../../styles/components/common/ProfileInSF.css';
import Avatar from "./Avatar";
import axios from "axios";
import { SERVER_API } from "../../config";


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
  followState : boolean;
}

// { image, type, nickname, name, intro, email, password, id}:IUserInfoInSF
function ProfileInSF({user,followState}:IProfileSF){
  const [ follow, setFollow ] = useState(false);

  const [accessToken, setAccessToken] = useState<string | null>();
  const [ me, setMe ]= useState<IUserInfoInSF>({
    email : '',
    id : 0,
    image : '',
    intro : '',
    name : '',
    nickname : '',
    password : '',
    type : false,
  });

  useEffect(() => {
    setAccessToken(window.localStorage.getItem('Token'));
  }, []);

  useEffect(()=>{
    axios({
      method : 'get',
      url : `${SERVER_API}/users/my`,
      headers:{
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      }
    })
      .then((res)=>{
        setMe(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
  },[accessToken]);

  const onClickFollow = () => {
    const nickname = user.nickname;
    setFollow((prev)=>!prev)
    if(follow){
      // 언팔로우 신청
      axios({
        method: 'delete',
        url: `${SERVER_API}/users/${nickname}/unfollow`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res)=>{
          console.log();
        })
        .catch((err)=>{
          console.log(err);
        })

    }
    else{
      // 팔로우 신청
      axios({
        method: 'post',
        url: `${SERVER_API}/users/${nickname}/follow`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res)=>{
          console.log();
        })
        .catch((err)=>{
          console.log(err);
        })
    }
  }

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
        {
          user!==null && me.id === user.id ? null
          :<button onClick={onClickFollow} className={follow ? 'follow-button' : 'following-button'}
                 type={'submit'}>{followState ? "팔로우" : "팔로잉"}</button>

        }
      </div>
    </div>
  );
}

export default ProfileInSF;
