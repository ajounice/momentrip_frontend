import React from 'react';
import TagList from './TagList';
import ThumbnailList from "./ThumbnailList";

const dummy_data = [
  {
    name: 'tag-busan',
    id: '부산',
    value: '부산',
  },
  {
    name: 'tag-jeju',
    id: '제주섬섬',
    value: '제주섬섬',
  },
  {
    name: 'tag-suwon',
    id: '수원시',
    value: '수원시',
  },
  {
    name: 'tag-night',
    id: '야경',
    value: '야경',
  },
  {
    name: 'tag-ic',
    id: '인천',
    value: '인천',
  },
  {
    name: 'tag-hks',
    id: '호캉스',
    value: '호캉스',
  },
  {
    name: 'tag-bks',
    id: '바캉스',
    value: '바캉스',
  },
];

// const dummy_thumbnail_data = [
//   {
//     src: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
//     href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
//   },
//   {
//     src: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
//     href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
//   },
//   {
//     src: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
//     href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
//   },
//   {
//     src: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
//     href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
//   },
// ];

const dummy_thumbnail_data = [
  {
    src: '/img/thumbnail2.jpeg',
    href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
    likeCount: 100,
  },
  {
    src: '/img/thumbnail3.png',
    href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
    likeCount: 23,
  },
  {
    src: '/img/thumbnail4.png',
    href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
    likeCount: 154,
  },
];

const dummy_thumbnail_data2 = [
  {
    src: '/img/thumbnail5.png',
    href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
    likeCount: 10234,
  },
  {
    src: '/img/thumbnail6.jpeg',
    href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
    likeCount: 1923,
  },
  {
    src: '/img/thumbnail7.jpeg',
    href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
    likeCount: 183,
  },
];

const SearchBefore = ({searchHandler}:{searchHandler:(value:string)=>void}) => {
  return (
    <div>
      {/* 검색하기 전 */}
      <p className="mt-4 text-md font-bold">인기태그</p>
      <TagList
        itemList={dummy_data}
        onHandler={(value: string) => searchHandler(value)}
      />

      <div className="">
        <p className="mt-8 text-lg font-bold">#실패없는 호캉스 여행지 ✅</p>
      </div>
      <ThumbnailList DataThumbnailList={dummy_thumbnail_data} />
      {/* Popular Feed */}
      <div className="">
        <p className="mt-8 text-lg font-bold">#지금 핫한 여름 바다 🌊</p>
      </div>
      <ThumbnailList DataThumbnailList={dummy_thumbnail_data2} />
      {/* Popular Feed */}
      <div className="">
        <p className="mt-8 text-lg font-bold">#속초 핫플 모음.zip 🏄‍♂️</p>
      </div>
      <ThumbnailList DataThumbnailList={dummy_thumbnail_data} />
      {/* Popular Feed */}
      <div className="">
        <p className="mt-8 text-lg font-bold">#한적하고 조용한 숙소 모아보기 🍃</p>
      </div>
      <ThumbnailList DataThumbnailList={dummy_thumbnail_data} />
    </div>
  );
};

export default SearchBefore;
