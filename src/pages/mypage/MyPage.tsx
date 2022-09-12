import React from 'react';
import '../../styles/pages/MyPage.css';
import Avatar from '../../components/common/Avatar';
import FullSF from '../../components/ShortForm/FullSF';

// 서버에서 가져온 정보
const userInfo = {
  userId: 'suy.ii',
  userName: '수연',
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfLcI-dXmEcLctBrV_2u4c6rFmi23Rzo76w&usqp=CAU',
  profileMessage: '🧸여행을 좋아하는 컴순이🧸',
  followers: 10,
  following: 20,
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

function MyPage() {
  return (
    <div className="px-4">
      <div className="my-20">
        {/* User Section */}
        <Avatar size={'lg'} nickname={userInfo.userId} src={userInfo.src} />
        <div className="text-center pt-2">{userInfo.profileMessage}</div>
        <div className="grid grid-cols-2 text-center my-6">
          <div>
            <p>{userInfo.followers}</p>
            <p>팔로워</p>
          </div>
          <div>
            <p>{userInfo.following}</p>
            <p>팔로잉</p>
          </div>
        </div>

        {/* Post Section */}
        <div className="grid grid-cols-2 gap-1">
          {mockShortFormListsData.shortForm.map((data) => (
            <FullSF src={data.src} href={data.href} shortFormId={data.shortFormId} likeCount={data.likeCount}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyPage;
