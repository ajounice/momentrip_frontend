import React, { useEffect, useState } from 'react';
import Avatar from '../components/common/Avatar';
import FullSF from '../components/ShortForm/FullSF';
import { SERVER_API } from "../config";
import axios from "axios";
import { TopBar } from "../components/common/Navigation";

interface IProfile {
  userId: string;
}

interface IBadge{
  name :string;
  value : number;
}

interface IUserInfo {
 email : string;
 badgeList : IBadge[];
 forms : [];
 id : number;
 image : null | string;
 intro : string;
 name : string;
 nickname : string;
 type  :boolean;

}
// const mockUserInfo: IUserInfo = {
//   userId: 'other',
//   userName: '다른사람',
//   src: 'https://thumb.zumst.com/400x250/https://static.news.zumst.com/images/58/2020/03/27/e3124f5ec4cf4df18e162ba591a5f24a.jpg',
//   profileMessage: '뷰맛집만 돌아다니는 다른사람',
//   followers: 120,
//   following: 230,
// };

const mockShortFormListsData = {
  shortForm: [
    {
      userId: 1,
      shortFormId: 1,
      src: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
      href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
      likeCount: 12,
      innerAvatar: {
        src: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTRfMTUw/MDAxNTYzMTEyNjcwNzIy.fE7H6I1cLHlImgwlfFK6iSafnnIscZ9Hp-lIbWPtDV4g.UP4blzQP-WlF4XqHZZBn0p7HMbsqF064zo5mSWtzl2sg.JPEG.studygir/tejuTyY_(17).jpg?type=w800',
      },
    },
    {
      userId: 1,
      shortFormId: 1,
      src: 'https://png.pngtree.com/thumb_back/fh260/png-vector/20200530/ourmid/pngtree-beach-png-image_2215226.jpg',
      href: 'https://png.pngtree.com/thumb_back/fh260/png-vector/20200530/ourmid/pngtree-beach-png-image_2215226.jpg',
      likeCount: 12,
      innerAvatar: {
        src: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTRfMTUw/MDAxNTYzMTEyNjcwNzIy.fE7H6I1cLHlImgwlfFK6iSafnnIscZ9Hp-lIbWPtDV4g.UP4blzQP-WlF4XqHZZBn0p7HMbsqF064zo5mSWtzl2sg.JPEG.studygir/tejuTyY_(17).jpg?type=w800',
      },
    },
    {
      userId: 1,
      shortFormId: 1,
      src: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
      href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
      likeCount: 12,
      innerAvatar: {
        src: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTRfMTUw/MDAxNTYzMTEyNjcwNzIy.fE7H6I1cLHlImgwlfFK6iSafnnIscZ9Hp-lIbWPtDV4g.UP4blzQP-WlF4XqHZZBn0p7HMbsqF064zo5mSWtzl2sg.JPEG.studygir/tejuTyY_(17).jpg?type=w800',
      },
    },
    {
      userId: 1,
      shortFormId: 1,
      src: 'https://png.pngtree.com/thumb_back/fh260/png-vector/20200530/ourmid/pngtree-beach-png-image_2215226.jpg',
      href: 'https://png.pngtree.com/thumb_back/fh260/png-vector/20200530/ourmid/pngtree-beach-png-image_2215226.jpg',
      likeCount: 12,
      innerAvatar: {
        src: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTRfMTUw/MDAxNTYzMTEyNjcwNzIy.fE7H6I1cLHlImgwlfFK6iSafnnIscZ9Hp-lIbWPtDV4g.UP4blzQP-WlF4XqHZZBn0p7HMbsqF064zo5mSWtzl2sg.JPEG.studygir/tejuTyY_(17).jpg?type=w800',
      },
    },
  ],
};

const Profile = () => {
  // const [userId, setUserId] = useState<string | null>('');
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    email : '',
    badgeList : [],
    forms : [],
    id : 0,
    image : null,
    intro : '',
    name : '',
    nickname : '',
    type  :false,
  });

  const [mount , setMount] = useState(0);
  const [ follow, setFollow ] = useState({
    follower : 0,
    following : 0,
  })

  useEffect(() => {
   if(mount ===0 ){
     setMount(1);
   }
   else{
     const nickname = location.pathname.slice(location.pathname.search('profile/')+8,);
     axios.get(`${SERVER_API}/users/${nickname}`,
       {
         headers: {
           Authorization: `Bearer ${localStorage.getItem('Token')}`,
         }
       })
       .then((res)=>{
           setUserInfo(res.data);
       })
       .catch((err)=>{
         console.log(err);
       })
   }
  }, [mount]);

  useEffect(()=>{
    const nickname = location.pathname.slice(location.pathname.search('profile/')+8,);

    axios({
      method:"get",
      url : `${SERVER_API}/users/${nickname}/followers`,
      headers:{
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      }
    })
      .then((res)=>{
        setFollow({
          ...follow,
          follower : res.data.length
        })
      })
      .catch((err)=>{
        console.log(err);
      })


    axios({
      method:"get",
      url : `${SERVER_API}/users/${nickname}/followings`,
      headers:{
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      }
    })
      .then((res)=>{
        setFollow({
          ...follow,
          following : res.data.length
        })
      })
      .catch((err)=>{
        console.log(err);
      })
  },[userInfo]);


  return (
    <div>
      <TopBar beforeButton={true} centerText={userInfo.name} centerTextType={"user"}/>
      <div className="px-4">
        <div className="my-20">
          {/* User Section */}
          <Avatar size={'lg'} nickname={userInfo.nickname} src={userInfo.image !== null ? userInfo.image : '/img/profile_default.png' }/>
          <div className="text-center pt-2">{userInfo.intro}</div>
          <div className="grid grid-cols-2 text-center my-6">
            <div>
              <p>{follow.follower}</p>
              <p>팔로워</p>
            </div>
            <div>
              <p>{follow.following}</p>
              <p>팔로잉</p>
            </div>
          </div>

          {/* Post Section */}
          <div className="grid grid-cols-2 gap-1">
            {/*{userInfo.forms.map((data) => (*/}
            {/*  <FullSF*/}
            {/*    src={data.src}*/}
            {/*    href={data.href}*/}
            {/*    shortFormId={data.shortFormId}*/}
            {/*    likeCount={data.likeCount}*/}
            {/*  ></FullSF>*/}
            {/*))}*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
