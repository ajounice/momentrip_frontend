import React from 'react';
import SearchBar from '../components/Search/SearchBar';
import TagList from '../components/Search/TagList';
import ThumbnailList from '../components/Search/ThumbnailList';
import { TopNavigation } from '../components/common/Navigation';

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

const dummy_thumbnail_data = [
  {
    src: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
    href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
  },
  {
    src: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
    href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
  },
  {
    src: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
    href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
  },
  {
    src: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
    href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
  },
];

const SearchPage = () => {
  return (
    <div className="px-4">
      <TopNavigation />
      {/* SearchBar */}
      <div className="mt-20">
        {/* TODO SearchBar에서 엔터치면 값 전달되서 after로 넘어가게 구현 */}
        <SearchBar />
        <p className="mt-4 text-md font-bold">인기태그</p>
        <TagList itemList={dummy_data} />
      </div>
      {/* Popular Feed */}
      <div className="">
        <p className="mt-14 text-lg font-bold">#실패없는 호캉스 여행지 ✅</p>
      </div>
      <ThumbnailList DataThumbnailList={dummy_thumbnail_data} />
      {/* Popular Feed */}
      <div className="">
        <p className="mt-14 text-lg font-bold">#지금 핫한 여름 바다 🌊</p>
      </div>
      <ThumbnailList DataThumbnailList={dummy_thumbnail_data} />
      {/* Popular Feed */}
      <div className="">
        <p className="mt-14 text-lg font-bold">#속초 핫플 모음.zip 🏄‍♂️</p>
      </div>
      <ThumbnailList DataThumbnailList={dummy_thumbnail_data} />
      {/* Popular Feed */}
      <div className="">
        <p className="mt-14 text-lg font-bold">#한적하고 조용한 숙소 모아보기 🍃</p>
      </div>
      <ThumbnailList DataThumbnailList={dummy_thumbnail_data} />
    </div>
  );
};

export default SearchPage;
