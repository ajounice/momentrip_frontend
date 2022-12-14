import { BsFillPatchCheckFill } from 'react-icons/bs';

export interface IAvatar {
  size?: string;
  src: string;
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
    badge: 'π³',
    text: 'μ°',
    color: 'bg-green-200',
  },
  sea: {
    badge: 'π',
    text: 'λ°λ€',
    color: 'bg-blue-200',
  },
  hotel: {
    badge: 'π¨',
    text: 'μμ',
    color: 'bg-violet-200',
  },
  festival: {
    badge: 'πͺ',
    text: 'μΆμ ',
    color: 'bg-red-200',
  },
  camping: {
    badge: 'βΊ',
    text: 'μΊ ν',
    color: 'bg-indigo-200',
  },
  night: {
    badge: 'π',
    text: 'μΌκ²½',
    color: 'bg-yellow-200',
  },
  activity: {
    badge: 'π΄ββοΈ',
    text: 'μ‘ν°λΉν°',
    color: 'bg-coral-200',
  },
};
/* Avatar : srcμ user profile μΈλ€μΌ λ§ν¬ νμ*/
export default function Avatar({ size = 'sm', src, nickname, biz = false, badge = '' }: IAvatar) {
  {
    /* TODO μ΄λ―Έμ§κ° μΈλ‘λ‘ κΈ΄ κ²½μ° κ°λ‘ ν¬κΈ°κ° μμ λΆλͺ¨ μμμ μλ°ν λΉμ¨μ΄ μ°κ·Έλ¬μ§λ νμ μμ  νμ */
  }
  // nicknameDir 'r'μ κ²½μ° xsμ smμμλ§ μ¬μ©ν©λλ€.
  // console.log(badgeList[badge].badge);
  return (
    <>
      {!nickname ? (
        <img className={`object-cover rounded-full ${sizes[size]}`} src={src} />
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
