import React, { useState } from 'react';
import { RiHeart3Line, RiHeart3Fill } from 'react-icons/ri';
import Avatar, { IAvatar } from '../common/Avatar';

interface likeItemInter {
  box: any;
  id: any;
  isChecked: any;
}

interface InterThumbnail {
  shortFormId: number;
  src: string;
  href: string;
  likeCount?: number;
  innerAvatar?: IAvatar;
}
const fullSF = ({ src, href, likeCount, shortFormId, innerAvatar }: InterThumbnail) => {
  const [isLike, setIsLike] = useState(false);

  return (
    <div className="w-full relative">
      <a href={href}>
        <img src={src} className="" />
      </a>
      {innerAvatar && (
        <div className="absolute bottom-3 w-7 left-2 flex flex-col justify-center items-center">
          <Avatar size="sm" src={innerAvatar.src}></Avatar>
        </div>
      )}
      <div className="absolute bottom-2 w-7 right-2 flex flex-col justify-center items-center">
        <button className="" onClick={() => setIsLike(!isLike)}>
          {!isLike ? <RiHeart3Line className="" /> : <RiHeart3Fill />}
        </button>
        {/* 숫자는 1~4자리 이내로 표현 */}
        {likeCount && <p className="text-sm">{likeCount}</p>}
      </div>
    </div>
  );
};

export default fullSF;
