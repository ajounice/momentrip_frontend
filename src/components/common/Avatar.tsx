interface IAvatar {
  size?: string;
  src: string;
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
/* Avatar : src에 user profile 썸네일 링크 필요*/
export default function Avatar({ size = 'sm', src }: IAvatar) {
  {
    /* TODO 이미지가 세로로 긴 경우 가로 크기가 작은 부모 안에서 아바타 비율이 찌그러지는 현상 수정 필요 */
  }
  return <img className={`inline-block m-auto rounded-full ${sizes[size]}`} src={src} />;
}
