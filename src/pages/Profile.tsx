import React, { useEffect, useState } from 'react';
import Avatar from '../components/common/Avatar';
import FullSF from '../components/ShortForm/FullSF';
import axios from 'axios';
import { TopBar } from '../components/common/Navigation';

interface IProfile {
  userId: string;
}

interface IBadge {
  name: string;
  value: number;
}

interface IUserInfo {
  email: string;
  badgeList: IBadge[];
  forms: [];
  id: number;
  image: null | string;
  intro: string;
  name: string;
  nickname: string;
  type: boolean;
}

const Profile = () => {
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    email: '',
    badgeList: [],
    forms: [],
    id: 0,
    image: null,
    intro: '',
    name: '',
    nickname: '',
    type: false,
  });

  const [mount, setMount] = useState(0);
  const [follow, setFollow] = useState({
    follower: 0,
    following: 0,
  });

  useEffect(() => {
    if (mount === 0) {
      setMount(1);
    } else {
      const nickname = location.pathname.slice(location.pathname.search('profile/') + 8);
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/${nickname}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
          },
        })
        .then((res) => {
          setUserInfo(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [mount]);

  useEffect(() => {
    const nickname = location.pathname.slice(location.pathname.search('profile/') + 8);

    axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/users/${nickname}/followers`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    })
      .then((res) => {
        setFollow({
          ...follow,
          follower: res.data.length,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/users/${nickname}/followings`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    })
      .then((res) => {
        setFollow({
          ...follow,
          following: res.data.length,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userInfo]);

  return (
    <div>
      <TopBar beforeButton={true} centerText={userInfo.name} centerTextType={'user'} />
      <div className="px-4">
        <div className="my-20">
          {/* User Section */}
          <Avatar
            size={'lg'}
            nickname={userInfo.nickname}
            src={userInfo.image !== null ? userInfo.image : '/img/profile_default.png'}
          />
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
