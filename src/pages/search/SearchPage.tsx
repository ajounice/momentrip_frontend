import React from 'react';
import SearchBar from '../../components/Search/SearchBar';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchAfter from '../../components/Search/SearchAfter';
import SearchBefore from '../../components/Search/SearchBefore';
import InnerTab from '../../components/common/InnerTab';
import ThumbnailList from "../../components/Search/ThumbnailList";

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

const SearchPage = () => {
  const navigation = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search).get('keyword');
    setSearchKeyword(params !== null ? params : '');
  }, [new URLSearchParams(location.search).get('keyword')]);

  function searchHandler(value: string) {
    navigation('/search?keyword=' + value)
    location.reload();
  }

  return (
    <div className="px-4">
      {/* SearchBar */}
      <div className="mt-20 h-full">
        <SearchBar searchHandler={searchHandler} keyword={searchKeyword} />
      </div>
      {/* Search Contents */}
      {searchKeyword ? <SearchAfter keyword={searchKeyword}></SearchAfter> : <SearchBefore searchHandler={searchHandler}></SearchBefore>}


      {/* 검색하기 전 */}
      {searchKeyword === '' ? (
        <>
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
        </>
      ) : (
        <>

        </>
      )}
    </div>
  );
};

export default SearchPage;
