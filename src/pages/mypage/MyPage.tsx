import React, { useEffect, useState } from 'react';
import '../../styles/pages/MyPage.css';
import Avatar from '../../components/common/Avatar';
import FullSF from '../../components/ShortForm/FullSF';
import axios from 'axios';
import { TopBar } from '../../components/common/Navigation';
import { Form } from '../../globalType';

const userInfo = {
  userId: '',
  userName: '',
  profileMessage: '',
  followers: 0,
  following: 0,
  src: '',
  badge: '',
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
const mockBadgeDataTotal = 4;
// const mockBadgeData = [
//   {
//     name: 'mountain',
//     value: 22,
//   },
//   {
//     name: 'sea',
//     value: 10,
//   },
//   {
//     name: 'hotel',
//     value: 4,
//   },
//   {
//     name: 'festival',
//     value: 2,
//   },
//   {
//     name: 'camping',
//     value: 2,
//   },
//   {
//     name: 'night',
//     value: 0,
//   },
//   {
//     name: 'activity',
//     value: 0,
//   },
// ];

const mockBadgeData = [
  {
    name: 'mountain',
    value: 0,
  },
  {
    name: 'sea',
    value: 4,
  },
  {
    name: 'hotel',
    value: 0,
  },
  {
    name: 'festival',
    value: 0,
  },
  {
    name: 'camping',
    value: 0,
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

interface IBadge {
  name: 'sea' | 'hotel' | 'festival' | 'activity' | 'night' | 'camping' | 'mountain';
  value: number;
}

export interface MyInfo {
  myBadgeList: IBadge[];
  id: number;
  email: string;
  nickname: string;
  password: null;
  name: string;
  intro: string;
  type: boolean;
  image: string;
  // form : Form[];
}

function MyPage() {
  const [myInfo, setMyIfo] = useState<MyInfo>({
    myBadgeList: [],
    id: 0,
    email: '',
    nickname: '',
    password: null,
    name: '',
    intro: '',
    type: false,
    image: '',
    // form : [],
  });

  const [myForm, setMyForm] = useState<Form[]>([]);
  const [myBadgeList, setBadgeList] = useState<IBadge[]>([]);
  const [total, setTotal] = useState(0);

  const [mount, setMount] = useState(0);
  const [accessToken, setAccessToken] = useState<string | null>();

  const [follower, setFollower] = useState(0);
  const [following, setFollowing] = useState(0);

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

  useEffect(() => {
    if (mount === 0) {
      setAccessToken(window.localStorage.getItem('Token'));
      setMount(1);
    } else {
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/my`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setMyIfo(res.data);

            const arr = [];
            for (let i = 0; i < res.data.badgeList; i += 1) {
              if (res.data.badgeList[i].name !== 'total') {
                arr.push(res.data.badgeList[i]);
              }
            }
            setBadgeList(arr);
            setTotal(res.data.badgeList);
            setMyForm(res.data.forms);
          }
        });
    }
  }, [mount]);

  useEffect(() => {
    const flag = false;

    // 팔로워 리스트 조회
    myInfo.nickname ? axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/users/${myInfo.nickname}/followers`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        setFollower(res.data.length);
        // 팔로잉 리스트 조회
        axios({
          method: 'get',
          url: `${process.env.REACT_APP_API_URL}/users/${myInfo.nickname}/followings`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then((res) => {
            setFollowing(res.data.length);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      })
      : null
  }, [myInfo]);

  useEffect(() => {
    console.log('myForm : ', myForm);
  }, [myForm]);

  return (
    <div>
      <TopBar
        beforeButton={true}
        centerText={myInfo.name}
        centerTextType={'user'}
        alarm={false}
        dropdown={'mypage'}
        // dropdownList={['프로필 편집', '개인정보 설정', '설정']}
      />
      <div className="px-4">
        <div className="my-20">
          {/* User Section */}
          <div className="grid justify-center">
            {userInfo.src ? (
              <Avatar size={'lg'} nickname={''} />
            ) : (
              <Avatar
                src={myInfo.image === null ? '/img/profile_default.png' : myInfo.image}
                biz={myInfo.type}
                size={'lg'}
                nickname={myInfo.nickname}
                badge={'sea'}
              />
            )}
          </div>
          <div className="text-center pt-2">{userInfo.profileMessage}</div>
          {/*<Avatar size={'lg'} biz={myInfo.type} nickname={myInfo.nickname} src={myInfo.image} badge={userInfo.badge} />*/}
          <div className="text-center pt-2">{myInfo.intro}</div>
          {/* 프로그래스바 */}
          <div className="w-full  h-2.5 mt-7 flex rounded-full bg-gray-300 animate-pulse">
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
            {/*<div className="mt-7 mx-auto text-xs ">열심히 활동하고 취향 뱃지를 달아보세요!</div>*/}
          </div>
          <div className="grid grid-cols-2 text-center mt-16 mb-7">
            <div
              onClick={() => {
                window.location.assign('/mypage/follow?type=follower');
              }}
            >
              <p>{follower}</p>
              <p>팔로워</p>
            </div>
            <div
              onClick={() => {
                window.location.assign('/mypage/follow?type=follow');
              }}
            >
              <p>{following}</p>
              <p>팔로잉</p>
            </div>
          </div>

          {/* Post Section */}
          <div className="grid grid-cols-2 gap-1">
            {/*like count 일단 view count */}
            {myForm
              ? myForm.map((data) => {
                  return (
                    <FullSF
                      src={data.thumbnail}
                      href={data.thumbnail}
                      shortFormId={data.id}
                      likeCount={data.viewCount}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
