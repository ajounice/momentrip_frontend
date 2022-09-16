import React, { useEffect, useState } from 'react';
import Avatar from '../components/common/Avatar';
import FullSF from '../components/ShortForm/FullSF';

interface IProfile {
  userId: string;
}
interface IUserInfo {
  userId: string;
  userName: string;
  src: string;
  profileMessage: string;
  followers: number;
  following: number;
}
const mockUserInfo: IUserInfo = {
  userId: 'other',
  userName: '다른사람',
  src: 'https://thumb.zumst.com/400x250/https://static.news.zumst.com/images/58/2020/03/27/e3124f5ec4cf4df18e162ba591a5f24a.jpg',
  profileMessage: '뷰맛집만 돌아다니는 다른사람',
  followers: 120,
  following: 230,
};
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
    userId: '',
    userName: '',
    src: '',
    profileMessage: '',
    followers: 0,
    following: 0,
  });
  function getUserInfo(userId: string | null) {
    //TODO userId로 서버에서 아바타, 팔로잉 팔로우 수 등의 정보를 받아옴
    setUserInfo(mockUserInfo);
  }
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    // setUserId(params.get('id'));
    getUserInfo(params.get('id'));
  }, []);
  return (
    <div>
      <div className="px-4">
        <div className="my-20">
          {/* User Section */}
          <Avatar size={'lg'} nickname={userInfo.userId} src={userInfo.src} />
          <div className="text-center pt-2">{userInfo.profileMessage}</div>
          <div className="grid grid-cols-2 text-center my-6">
            <div>
              <p>{userInfo.followers}</p>
              <p>팔로우</p>
            </div>
            <div>
              <p>{userInfo.following}</p>
              <p>팔로잉</p>
            </div>
          </div>

          {/* Post Section */}
          <div className="grid grid-cols-2 gap-1">
            {mockShortFormListsData.shortForm.map((data) => (
              <FullSF
                src={data.src}
                href={data.href}
                shortFormId={data.shortFormId}
                likeCount={data.likeCount}
              ></FullSF>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
