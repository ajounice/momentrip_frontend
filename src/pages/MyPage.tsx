import React from 'react';
import '../styles/pages/MyPage.css';
import { BottomNavigation, TopBar } from "../components/common/Navigation";
import Avatar from "../components/common/Avatar";
import RoundSF from "../components/ShortForm/RoundSF";
import FullSF from "../components/ShortForm/FullSF";

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

function UserFollowPage(){
  return(
    <div>
      UserFollowPage
    </div>
  );
}

function MyPage() {

  return (
    <div className="my-page-container">
      <div className={"my-page-top-container"}>
        <TopBar
          alarmOnClickEvent={()=>{alert("alarm")}}
          centerText={"수진"}
          centerTextType={"user"}
          alarm={true}
          beforeButton={true}
          dropdown={true}
          dropdownList={["프로필 편집", "개인정보 설정", "설정"]}
        />
      </div>

      <section className={"my-page-user-info-outer-container"}>
        <div className={"my-page-user-default-info-container"}>
          {/* 유저 소개 정보*/}
          <Avatar
            size={'lg'}
            nickname={"@su_xin"}
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfLcI-dXmEcLctBrV_2u4c6rFmi23Rzo76w&usqp=CAU"}
          />
          <span className={"my-page-user-introduction"}>🧸여행을 좋아하는 컴순이🧸</span>
        </div>

        <div className={"my-page-user-follow-info-container"}>
          <div className={"my-page-following-number"}>
            <span>0</span>
            <span>팔로잉</span>
          </div>

          <div className={"my-page-follow-number"}>
            <span>2k</span>
            <span>팔로우</span>
          </div>
        </div>
      </section>
      {/*<ThumbnailList DataThumbnailList={dummy_thumbnail_data} />*/}

      <section className={"my-page-short-form-outer-container"}>
        <FullSF src={dummy_thumbnail_data[0].src} href={dummy_thumbnail_data[0].href} shortFormId={1} likeCount={4}/>
        <FullSF src={dummy_thumbnail_data[0].src} href={dummy_thumbnail_data[0].href} shortFormId={1} likeCount={4}/>
        <FullSF src={dummy_thumbnail_data[0].src} href={dummy_thumbnail_data[0].href} shortFormId={1} likeCount={4}/>
        <FullSF src={dummy_thumbnail_data[0].src} href={dummy_thumbnail_data[0].href} shortFormId={1} likeCount={4}/>
        <FullSF src={dummy_thumbnail_data[0].src} href={dummy_thumbnail_data[0].href} shortFormId={1} likeCount={4}/>
        <FullSF src={dummy_thumbnail_data[0].src} href={dummy_thumbnail_data[0].href} shortFormId={1} likeCount={4}/>
      </section>

      <div className={"my-page-bottom-container"}>
        <BottomNavigation color={'black'} />
      </div>
    </div>
  );
}

export default MyPage;
