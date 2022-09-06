import React from 'react';
import '../styles/pages/MyPage.css';
import { TopBar } from "../components/common/Navigation";

function MyPage() {
  return (
    <div className="my-page-container">
    <TopBar
      checkButtonOnClickEvent={()=>{console.log("확인")}}
      beforeButtonOnClickEvent={()=>{console.log("뒤로가기")}}
      alarmOnClickEvent={()=>{alert("alarm")}}
      leftTextType={"user"}
      centerText={"수진"}
      centerTextType={"user"}
      alarm={true}
      beforeButton={true}
      checkButton={true}
      leftText={"수진"}
      dropdown={true}
      dropdownList={["프로필 편집", "개인정보 설정", "설정"]}
    />


    </div>
  );
}

export default MyPage;
