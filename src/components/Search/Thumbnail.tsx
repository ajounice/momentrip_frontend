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
}
const Thumbnail = ({ src, href }: InterThumbnail) => {
  const [isLike, setIsLike] = useState(false);

  return (
    <div className="w-36 relative">
      <a href={href}>
        <img src={src} className=" rounded-md " />
      </a>
      <div className="absolute bottom-2 w-7 right-2 flex flex-col justify-center items-center">
        <button className="" onClick={() => setIsLike(!isLike)}>
          {!isLike ? <RiHeart3Line className="" /> : <RiHeart3Fill />}
        </button>
        {/* 숫자는 1~4자리 이내로 표현 */}
        <p className="text-sm">4.1k</p>
      </div>
    </div>
  );
};

export default Thumbnail;
