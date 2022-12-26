import { BsFillPatchCheckFill } from 'react-icons/bs';

export interface IAvatar {
  size?: string;
  src?: string;
  nickname?: string;
  biz?: boolean;
  badge?: string;
}

type sizeType = {
  [key: string]: string;
};

const sizes: sizeType = {
  xs: 'w-[24px] h-[24px]',
  sm: 'w-[32px] h-[32px]',
  md: 'w-[64px] h-[64px]',
  lg: 'w-[108px] h-[108px]',
};
const maginSizes: sizeType = {
  xs: 'mt-0.5 ml-1',
  sm: 'mt-2 ml-1',
  md: 'mt-1',
  lg: 'mt-1',
};

interface IBadgeList {
  [key: string]: { badge: string; text: string; color: string };
}

const badgeList: IBadgeList = {
  mountain: {
    badge: '🌳',
    text: '산',
    color: 'bg-green-200',
  },
  sea: {
    badge: '🌊',
    text: '바다',
    color: 'bg-blue-200',
  },
  hotel: {
    badge: '🏨',
    text: '숙소',
    color: 'bg-violet-200',
  },
  festival: {
    badge: '🎪',
    text: '축제',
    color: 'bg-red-200',
  },
  camping: {
    badge: '⛺',
    text: '캠핑',
    color: 'bg-indigo-200',
  },
  night: {
    badge: '🌃',
    text: '야경',
    color: 'bg-yellow-200',
  },
  activity: {
    badge: '🚴‍♂️',
    text: '액티비티',
    color: 'bg-coral-200',
  },
};
/* Avatar : src에 user profile 썸네일 링크 필요*/
export default function Avatar({ size = 'sm', src, nickname, biz = false, badge }: IAvatar) {
  {
    /* TODO 이미지가 세로로 긴 경우 가로 크기가 작은 부모 안에서 아바타 비율이 찌그러지는 현상 수정 필요 */
  }
  return (
    <>
      {!nickname ? (
        <img className={`object-cover rounded-full ${sizes[size]}`} src={src ? src : '/img/profile_default.png'} />
      ) : size === 'sm' || size === 'xs' ? (
        <div className={`flex text-center text-md min-w-max`}>
          <img className={`rounded-full object-cover ${sizes[size]}  m-auto`} src={src} />
          <div className={`flex w-full ${maginSizes[size]}`}>
            {biz && <BsFillPatchCheckFill className="fill-gray-400 inline-block" />}
          </div>
        </div>
      ) : (
        // size md, lg
        <div className={`text-center min-w-max`}>
          <img className={`rounded-full object-cover ${sizes[size]}  m-auto`} src={src} />
          <div className={`w-full ${maginSizes[size]} flex justify-center mt-1 text-base`}>
            {nickname}
            {biz && <BsFillPatchCheckFill className="fill-gray-400 inline-block" />}
            {badge ? (
              <div className={`ml-1 rounded-lg ${badgeList[badge].color} w-5 h-5`}>{badgeList[badge].badge}</div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
