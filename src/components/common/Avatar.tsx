import { BsFillPatchCheckFill } from 'react-icons/bs';

export interface IAvatar {
  size?: string;
  src: string;
  nickname?: string;
  biz?: boolean;
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
/* Avatar : src에 user profile 썸네일 링크 필요*/
export default function Avatar({ size = 'sm', src, nickname, biz = false }: IAvatar) {
  {
    /* TODO 이미지가 세로로 긴 경우 가로 크기가 작은 부모 안에서 아바타 비율이 찌그러지는 현상 수정 필요 */
  }
  // nicknameDir 'r'의 경우 xs와 sm에서만 사용합니다.
  return (
    <>
      {!nickname ? (
        <img className={`object-cover rounded-full ${sizes[size]}`} src={src} />
      ) : size === 'sm' || size === 'xs' ? (
        <div className={`flex text-center text-md min-w-max`}>
          <img className={`rounded-full object-cover ${sizes[size]}  m-auto`} src={src} />
          <div className={`flex w-full ${maginSizes[size]}`}>
            {nickname}
            {biz && <BsFillPatchCheckFill className="fill-gray-400 inline-block"></BsFillPatchCheckFill>}
          </div>
        </div>
      ) : (
        // size md, lg
        <div className={`text-center text-sm min-w-max`}>
          <img className={`rounded-full object-cover ${sizes[size]}  m-auto`} src={src} />
          <div className={`w-full ${maginSizes[size]}`}>
            {nickname}
            {biz && <BsFillPatchCheckFill className="fill-gray-400 inline-block"></BsFillPatchCheckFill>}
          </div>
        </div>
      )}
    </>
  );
}
