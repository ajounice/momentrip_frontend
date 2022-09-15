import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../components/common/Avatar';
import FullSF from '../components/ShortForm/FullSF';

const mockFollowUsersData = {
  user: [
    {
      userId: 1,
      userName: '바다냥이ㅁㅁㅁㅁㅁ',
      biz: true,
      profile: '',
      src: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTRfMTUw/MDAxNTYzMTEyNjcwNzIy.fE7H6I1cLHlImgwlfFK6iSafnnIscZ9Hp-lIbWPtDV4g.UP4blzQP-WlF4XqHZZBn0p7HMbsqF064zo5mSWtzl2sg.JPEG.studygir/tejuTyY_(17).jpg?type=w800',
    },
    {
      userId: 2,
      userName: '길냥이',
      biz: false,
      profile: '',
      src: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTRfMTAy/MDAxNTYzMTEyNjcyMzYw.K6YSbpr6UUJcA-tDFv6gA8qF3_-sGftNzLby6eR6Ta0g.ojgbM4xvOAsEgw8yEXOVoPFs69dopMBFuYh40TM1yT0g.JPEG.studygir/tejuTyY_%283%29.jpg?type=w2',
    },
    {
      userId: 3,
      userName: '행궁냥이',
      biz: false,
      profile: '',
      src: 'https://pbs.twimg.com/media/ElUCWyDUUAEMH-g?format=jpg&name=large',
    },
    {
      userId: 4,
      userName: '서울냥이',
      biz: false,
      profile: '',
      src: 'https://steamuserimages-a.akamaihd.net/ugc/780731510554040180/799CD3BE222A70B5D56BF1C66628F002EA8EFD3E/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
    },
    {
      userId: 5,
      userName: '바다냥이',
      biz: true,
      profile: '',
      src: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTRfMTUw/MDAxNTYzMTEyNjcwNzIy.fE7H6I1cLHlImgwlfFK6iSafnnIscZ9Hp-lIbWPtDV4g.UP4blzQP-WlF4XqHZZBn0p7HMbsqF064zo5mSWtzl2sg.JPEG.studygir/tejuTyY_(17).jpg?type=w800',
    },
    {
      userId: 6,
      userName: '길냥이',
      biz: false,
      profile: '',
      src: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTRfMTAy/MDAxNTYzMTEyNjcyMzYw.K6YSbpr6UUJcA-tDFv6gA8qF3_-sGftNzLby6eR6Ta0g.ojgbM4xvOAsEgw8yEXOVoPFs69dopMBFuYh40TM1yT0g.JPEG.studygir/tejuTyY_%283%29.jpg?type=w2',
    },
    {
      userId: 7,
      userName: '행궁냥이',
      biz: false,
      profile: '',
      src: 'https://pbs.twimg.com/media/ElUCWyDUUAEMH-g?format=jpg&name=large',
    },
    {
      userId: 8,
      userName: '서울냥이',
      biz: false,
      profile: '',
      src: 'https://steamuserimages-a.akamaihd.net/ugc/780731510554040180/799CD3BE222A70B5D56BF1C66628F002EA8EFD3E/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
    },
  ],
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
      userId: 2,
      shortFormId: 2,
      src: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
      href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
      likeCount: 93,
      innerAvatar: {
        src: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTRfMTAy/MDAxNTYzMTEyNjcyMzYw.K6YSbpr6UUJcA-tDFv6gA8qF3_-sGftNzLby6eR6Ta0g.ojgbM4xvOAsEgw8yEXOVoPFs69dopMBFuYh40TM1yT0g.JPEG.studygir/tejuTyY_%283%29.jpg?type=w2',
      },
    },
    {
      userId: 3,
      shortFormId: 3,
      src: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
      href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
      likeCount: 15,
      innerAvatar: {
        src: 'https://pbs.twimg.com/media/ElUCWyDUUAEMH-g?format=jpg&name=large',
      },
    },
    {
      userId: 4,
      shortFormId: 4,
      src: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
      href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
      likeCount: 41,
      innerAvatar: {
        src: 'https://steamuserimages-a.akamaihd.net/ugc/780731510554040180/799CD3BE222A70B5D56BF1C66628F002EA8EFD3E/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
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
      userId: 2,
      shortFormId: 2,
      src: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
      href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
      likeCount: 93,
      innerAvatar: {
        src: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTRfMTAy/MDAxNTYzMTEyNjcyMzYw.K6YSbpr6UUJcA-tDFv6gA8qF3_-sGftNzLby6eR6Ta0g.ojgbM4xvOAsEgw8yEXOVoPFs69dopMBFuYh40TM1yT0g.JPEG.studygir/tejuTyY_%283%29.jpg?type=w2',
      },
    },
    {
      userId: 3,
      shortFormId: 3,
      src: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
      href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
      likeCount: 15,
      innerAvatar: {
        src: 'https://pbs.twimg.com/media/ElUCWyDUUAEMH-g?format=jpg&name=large',
      },
    },
    {
      userId: 4,
      shortFormId: 4,
      src: 'https://png.pngtree.com/thumb_back/fh260/png-vector/20200530/ourmid/pngtree-beach-png-image_2215226.jpg',
      href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
      likeCount: 41,
      innerAvatar: {
        src: 'https://steamuserimages-a.akamaihd.net/ugc/780731510554040180/799CD3BE222A70B5D56BF1C66628F002EA8EFD3E/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
      },
    },
  ],
};

function FollowingPage() {
  console.log("following page");
  return (
    <div className="px-4">
      <div className="my-20">
        {/* 팔로잉한 유저 리스트 */}
        <div className="overflow-x-auto">
          <div className="flex whitespace-nowrap">
            {mockFollowUsersData.user.map((data) => (
              <Link to={data.profile}>
                <>
                  {data.userName.length > 5 ? (
                    <div className="w-20">
                      <Avatar
  size="md"
  src={data.src}
  nickname={data.userName.substring(0, 5) + ".."}
  biz={data.biz}
  />
                    </div>
                  ) : (
                    <div className="w-20">
                      <Avatar size="md" src={data.src} nickname={data.userName} biz={data.biz}/>
                    </div>
                  )}
                </>
              </Link>
            ))}
          </div>
        </div>
        {/* 구분선 */}
        <hr className="my-4 border-gray-700"/>
        {/* TODO 숏폼과 아바타 합쳐진 컴포넌트 추가 */}
        <div className="grid grid-cols-2 gap-1">
          {mockShortFormListsData.shortForm.map((data) => (
            <FullSF
  src={data.src}
  href={data.href}
  shortFormId={data.shortFormId}
  likeCount={data.likeCount}
  innerAvatar={data.innerAvatar}
  />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FollowingPage;
