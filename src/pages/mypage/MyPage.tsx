import React, { useEffect } from 'react';
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
  badge: 'mountain',
};
interface IBadgeList {
  [key: string]: { badge: string; text: string; color: string; afterColor: string };
}
const badgeList: IBadgeList = {
  mountain: {
    badge: '🌳',
    text: '산',
    color: 'bg-green-200',
    afterColor: 'after:border-b-green-200',
  },
  sea: {
    badge: '🌊',
    text: '바다',
    color: 'bg-blue-200',
    afterColor: 'after:border-b-blue-200',
  },
  hotel: {
    badge: '🏨',
    text: '숙소',
    color: 'bg-violet-200',
    afterColor: 'after:border-b-violet-200',
  },
  festival: {
    badge: '🎪',
    text: '축제',
    color: 'bg-red-200',
    afterColor: 'after:border-b-ed-200',
  },
  camping: {
    badge: '⛺',
    text: '캠핑',
    color: 'bg-indigo-200',
    afterColor: 'after:border-b-indigo-200',
  },
  night: {
    badge: '🌃',
    text: '야경',
    color: 'bg-yellow-200',
    afterColor: 'after:border-b-yellow-200',
  },
  activity: {
    badge: '🚴‍♂️',
    text: '액티비티',
    color: 'bg-coral-200',
    afterColor: 'after:border-b-coral-200',
  },
};
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
const mockBadgeDataTotal = 40;
const mockBadgeData = [
  {
    name: 'mountain',
    value: 22,
  },
  {
    name: 'sea',
    value: 10,
  },
  {
    name: 'hotel',
    value: 4,
  },
  {
    name: 'festival',
    value: 2,
  },
  {
    name: 'camping',
    value: 2,
  },
  {
    name: 'night',
    value: 0,
  },
  {
    name: 'activity',
    value: 0,
  },
];

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
  useEffect(() => {
    for (let i = 0; i < mockBadgeData.length; i++) {
      const element: HTMLElement | null = document.getElementById('progress_' + mockBadgeData[i].name);
      if (element) {
        element.style.width = Math.floor((mockBadgeData[i].value / mockBadgeDataTotal) * 100) + '%';

        if (i === 0) {
          element.style.borderTopLeftRadius = '9999px';
          element.style.borderBottomLeftRadius = '9999px';
        } else if (i === mockBadgeData.length - 1 || mockBadgeData[i + 1].value === 0) {
          element.style.borderTopRightRadius = '9999px';
          element.style.borderBottomRightRadius = '9999px';
        }
      }
    }
  }, []);
  return (
    <div className="px-4">
      <div className="my-20">
        {/* User Section */}
        <Avatar size={'lg'} nickname={userInfo.userId} src={userInfo.src} badge={userInfo.badge} />
        <div className="text-center pt-2">{userInfo.profileMessage}</div>
        {/* 프로그래스바 */}
        <div className="w-full  h-2.5 mt-7 flex">
          {mockBadgeData.map(
            (data, i) =>
              (data.value / mockBadgeDataTotal) * 100 != 0 && (
                <>
                  <div id={'progress_' + data.name} className={`h-2.5 ${badgeList[data.name].color}`}>
                    {i === 0 && (
                      <span
                        className={`top-8 w-full relative ${
                          badgeList[data.name].color
                        } rounded-xl mx-1 px-3 py-1 after:absolute after:top-0 after:w-0 after:h-0 after:border-solid after:border-transparent ${
                          badgeList[data.name].afterColor
                        } after:border-t-0 after:-ml-20 after:-mt-2.5 after:border-[10px]`}
                      >
                        {badgeList[data.name].text + ' 정복자! ' + badgeList[data.name].badge}
                      </span>
                    )}
                  </div>
                </>
              ),
          )}
        </div>
        <div className="grid grid-cols-2 text-center mt-16 mb-7">
          <div onClick={()=>{
            window.location.assign('/mypage/follow?type=follower');
          }}>
            <p>{userInfo.followers}</p>
            <p>팔로워</p>
          </div>
          <div onClick={()=>{
            window.location.assign('/mypage/follow?type=follow');
          }}>
            <p>{userInfo.following}</p>
            <p>팔로잉</p>
          </div>
        </div>
        {/* Post Section */}
        <div className="grid grid-cols-2 gap-1">
          {mockShortFormListsData.shortForm.map((data) => (
            <FullSF src={data.src} href={data.href} shortFormId={data.shortFormId} likeCount={data.likeCount} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyPage;
