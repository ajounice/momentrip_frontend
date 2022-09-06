import React, { useState } from 'react';
import { RiHeart3Line, RiHeart3Fill } from 'react-icons/ri';

// import { setSyntheticTrailingComments } from 'typescript';

interface likeItemInter {
  box: any;
  id: any;
  isChecked: any;
}

interface InterThumbnail {
  src: string;
  href: string;
  shortFormId: number;
  likeCount?: number;
}

export default function RoundSF({ src, href, shortFormId, likeCount }: InterThumbnail) {
  const [isLike, setIsLike] = useState(false);

  return (
    <div className="w-36 relative">
      <a href={href}>
        <img src={src} className=" rounded-md w-full h-[300px] object-cover " />
      </a>
      <div className="absolute bottom-2 w-7 right-2 flex flex-col justify-center items-center">
        <button className="" onClick={() => setIsLike(!isLike)}>
          {!isLike ? <RiHeart3Line className="" /> : <RiHeart3Fill />}
        </button>
        {/* 숫자는 1~4자리 이내로 표현 */}
        {likeCount && <p className="text-sm">{likeCount}</p>}{' '}
      </div>
    </div>
  );
}
