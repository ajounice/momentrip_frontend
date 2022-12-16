import React, { useState } from 'react';
import InnerTab from '../common/InnerTab';
import '../../styles/pages/search/SearchAfter.css';
// import FullSF from '../ShortForm/FullSF';

// const dummy_thumbnail_data = [
//   {
//     src: '/img/thumbnail2.jpeg',
//     href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
//     likeCount: 100,
//     profile: '/img/profile2.png'
//   },
//   {
//     src: '/img/thumbnail4.png',
//     href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
//     likeCount: 23,
//     profile: '/img/profile2.png'
//   },
//   {
//     src: '/img/thumbnail5.png',
//     href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
//     likeCount: 10234,
//     profile: '/img/profile2.png'
//   },
//   {
//     src: '/img/thumbnail6.jpeg',
//     href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
//     likeCount: 1923,
//     profile: '/img/profile2.png'
//   },
//   {
//     src: '/img/thumbnail7.jpeg',
//     href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
//     likeCount: 183,
//     profile: '/img/profile2.png'
//   },
//   {
//     src: '/img/thumbnail3.png',
//     href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
//     likeCount: 154,
//     profile: '/img/profile2.png'
//   },
// ];

const SearchAfter = ({keyword}:{keyword:string}) => {
  // TODO: keyword 검색 내용을 요청하는 api

  const tabs = ['게시물', '계정'];

  const [tabSelected, setTabSelected] = useState(tabs[0]);
  return (
    <div>
      <InnerTab
        tabs={tabs}
        selected={tabSelected}
        onChangeButton={(e) => setTabSelected(e.currentTarget.textContent)}
      ></InnerTab>

      {tabSelected === tabs[0] ? (
        <div>
          <h1 className={'search-keyword'}>{keyword}에 대한 게시물 검색결과</h1>
          {/*<div className={'thumbnail-grid-container'}>*/}
          {/*  {*/}
          {/*    dummy_thumbnail_data.map( (d) => {*/}
          {/*      return <FullSF shortFormId={1} src={d.src}  href={d.href}/>*/}
          {/*    })*/}
          {/*  }*/}
          {/*</div>*/}
        </div>
      ) : (
        <div>
          <h1 className={'search-keyword'}>{keyword}에 대한 계정 검색결과</h1>

        </div>
      )}
    </div>
  );
};

export default SearchAfter;
