import React, { useEffect, useState } from 'react';
import '../../styles/pages/mypage/Follow.css';
import { TopBar } from '../../components/common/Navigation';
import Follow from '../../components/Card/Follow';
import Follower from '../../components/Card/Follower';
import axios from "axios";
import { SERVER_API } from "../../config";
import follower from "../../components/Card/Follower";

function FollowPage() {
  const [currentTab, setCurrentTab] = useState({
    follower: false,
    follow: false,
  });

  const [ Followings, setFollowings ] = useState([]);
  const [ Followers,setFollowers ] = useState([]);

  const [ deps, setDeps ] = useState(false);

  useEffect(() => {
    const query = window.location.href.slice(window.location.href.search('=') + 1);
    if (query === 'follow') {
      setCurrentTab({
        follower: false,
        follow: true,
      });
    }
    else{
      setCurrentTab({
        follower: true,
        follow: false,
      });
    }
  }, []);


  useEffect(()=>{

      axios({
        method :'get',
        url : `${SERVER_API}/users/my/followers`,
        headers:{
          Authorization: `Bearer ${localStorage.getItem('Token')}`,
        }
      })
        .then((res)=>{
          setFollowers(res.data);

          axios({
            method :'get',
            url : `${SERVER_API}/users/my/followings`,
            headers:{
              Authorization: `Bearer ${localStorage.getItem('Token')}`,
            }
          })
            .then((res)=>{
              setFollowings(res.data);
            })
            .catch((err)=>{
              console.log(err);
            })
        })
        .catch((err)=>{
          console.log(err);
        })



  },[currentTab,deps]);


  useEffect(()=>{
    console.log();
  },[Followers,Followings]);


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
            <span className={currentTab.follower ? 'current-tab-span' : 'not-current-tab-span'}>팔로워{Followers.length}명</span>
          </div>
          <div
            onClick={() => {
              setCurrentTab({ follower: false, follow: true });
            }}
            className={currentTab.follow ? 'current-tab-div' : 'not-current-tab-div'}
          >
            <span className={currentTab.follow ? 'current-tab-span' : 'not-current-tab-span'}>팔로잉{Followings.length}명</span>
          </div>
        </div>
      </div>

      <div className={'follow-following-inner-container'}>
        {
          currentTab.follower ?
          Followers.map((follower)=>{
            return <Follower follower={follower} setDeps={setDeps}/>
          })
         : null}
        {currentTab.follow
          ?
            Followings.map((following)=> {
              return <Follow following={following} setDeps={setDeps} />
            })
           : null}
      </div>
    </div>
  );
}

export default FollowPage;
