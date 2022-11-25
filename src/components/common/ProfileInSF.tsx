import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import '../../styles/components/common/ProfileInSF.css';
import Avatar from './Avatar';
import axios from 'axios';

export interface IUserInfoInSF {
  email: string;
  id: number;
  image: string;
  intro: string;
  name: string;
  nickname: string;
  password: string;
  type: boolean;
}

interface IProfileSF {
  user: IUserInfoInSF;
  follow: number;
  setFollow: Dispatch<SetStateAction<number>>;
}

// { image, type, nickname, name, intro, email, password, id}:IUserInfoInSF
function ProfileInSF({ user, follow, setFollow }: IProfileSF) {
  // const [ follow, setFollow ] = useState(false);
  // const [ currentUser, setCurrentUser ] = useState<IUserInfoInSF>({
  //   email : '',
  //   id : 0,
  //   image : '',
  //   intro : '',
  //   name : '',
  //   nickname : '',
  //   password : '',
  //   type : false,});

  const [followState, setFollowState] = useState(false);
  const [currentUserFollowingList, setCurrentUserFollowingList] = useState<IUserInfoInSF[]>([]);
  const [LocalStorage, setLocalStorage] = useState<boolean | null>();
  const [key, setKey] = useState('');

  useEffect(() => {
    setAccessToken(window.localStorage.getItem('Token'));
  }, []);

  useEffect(() => {
    // console.log("ProfileSF follow : ",follow);
    console.log('localStorage.getItem(user.nickname) : ', localStorage.getItem(key));
  }, [follow]);

  const [accessToken, setAccessToken] = useState<string | null>();
  const [me, setMe] = useState<IUserInfoInSF>({
    email: '',
    id: 0,
    image: '',
    intro: '',
    name: '',
    nickname: '',
    password: '',
    type: false,
  });

  useEffect(() => {
    // setFollow(follow += 1);
    const nickname = me.nickname;
    const result = localStorage.getItem(nickname);
    if (result === null) {
      setLocalStorage(null);
    } else {
      setLocalStorage(true);
    }
  }, [follow]);

  useEffect(() => {
    console.log('LocalStorage n: ', LocalStorage);
  }, [LocalStorage]);

  useEffect(() => {
    if (user === null) {
      console.log('');
    } else {
      setKey(user.nickname);
    }
  }, [accessToken]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/users/my`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    })
      .then((res) => {
        setMe(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [accessToken]);

  useEffect(() => {
    // 현재 팔로우 중인 리스트 가져오기
    const nickname = me.nickname;
    if (nickname !== '') {
      axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/users/${nickname}/followings`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('Token')}`,
        },
      })
        .then((res) => {
          setCurrentUserFollowingList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [me, followState]);

  useEffect(() => {
    if (currentUserFollowingList.length !== 0) {
      currentUserFollowingList.forEach((users) => {
        // console.log(user);
        if (user !== null && users !== null) {
          localStorage.setItem(users.nickname, users.nickname);

          if (user.nickname === users.nickname) {
            setLocalStorage(true);
            setFollowState(true);
            return;
          }
        }
      });
    }
  }, [currentUserFollowingList]);

  const onClickUnFollow = () => {
    const nickname = user.nickname;

    // 언팔로우 신청
    axios({
      method: 'delete',
      url: `${process.env.REACT_APP_API_URL}/users/${nickname}/unfollow`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        localStorage.removeItem(`${nickname}`);
        setLocalStorage(null);
        setFollow((follow += 1));
        setFollowState(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickFollow = () => {
    const nickname = user.nickname;

    // 팔로우 신청
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/users/${nickname}/follow`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        setFollow((follow -= 1));
        localStorage.setItem(`${nickname}`, nickname);
        setLocalStorage(true);
        setFollowState(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={'profile-in-sf-container'}>
      <div className={'profile-container'}>
        <Avatar
          src={user !== null && user.image !== '' ? user.image : '/img/profile_default.png'}
          nickname={user !== null ? user.nickname : '유저'}
          size={'md'}
          biz={user !== null ? user.type : false}
          badge={'night'}
        />
      </div>
      <div className={'follow-following-button-container'}>
        {user !== null && me.id === user.id ? null : (
          <button
            onClick={user !== null && localStorage.getItem(key) !== null ? onClickUnFollow : onClickFollow}
            className={user !== null && localStorage.getItem(key) !== null ? 'following-button' : 'follow-button'}
            type={'submit'}
          >
            {user !== null && localStorage.getItem(key) !== null ? '팔로잉' : '팔로우'}
          </button>
        )}
      </div>
    </div>
  );
}

export default ProfileInSF;
