import React from 'react';
import '../styles/pages/MyPage.css';
import { BottomNavigation, TopBar } from "../components/common/Navigation";

function MyPage() {
  return (
    <div className="my-page-container">
      <div className={"my-page-top-container"}>
        <TopBar
          beforeButtonOnClickEvent={()=>{console.log("뒤로가기")}}
          alarmOnClickEvent={()=>{alert("alarm")}}
          centerText={"수진"}
          centerTextType={"user"}
          alarm={true}
          beforeButton={true}
          dropdown={true}
          dropdownList={["프로필 편집", "개인정보 설정", "설정"]}
        />
      </div>

      <div>

      </div>

       <BottomNavigation color={'black'} />
    </div>
  );
}

export default MyPage;
