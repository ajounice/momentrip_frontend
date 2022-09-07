import React, { useEffect, useState } from "react";
import "../styles/pages/UploadPage.css";
import { BottomNavigation, TopBar } from "../components/common/Navigation";
import { RiMapPinLine } from "react-icons/ri";

// 태그 파싱 함수
function ParseTag(hashtags : string) : string[] {
  let string = hashtags;
  const result = [];
  const rexStart = /[#]/gm;
  const rexEnd = ' ';

  let flag = true;
  while (flag) {
    const startIdx = string.search(rexStart);
    const endIdx = string.search(rexEnd);

    if (startIdx !== -1 && endIdx !== -1) {
      if (string.slice(startIdx + 1, endIdx) !== '') {
        result.push(string.slice(startIdx + 1, endIdx));
      }
      string = string.slice(endIdx + 1);
    } else if (startIdx !== -1 && endIdx === -1) {
      if (string.slice(startIdx + 1, endIdx) !== '') {
        result.push(string.slice(startIdx + 1));
      }
      string = '';
    } else {
      flag = false;
    }
  }
  return result;
}

function UploadShortFormPage() {
  // 백엔드로 보내야 하는 데이터 형식 예상
  // 비디오 : 바이너리
  // 태그 : 파싱된 문자열 리스트
  // 설명 : 문자열
  // 장소 : 일단은 문자

  // tag state
  const [ tag , setTag ] = useState<string>(""); //

  // 설명 state
  const [ introduction, setIntroduction ] = useState<string>("");

  const [ click, setClick ] = useState<boolean>(false);
  const [ hidden, setHidden ] = useState<boolean>(false);

  useEffect(()=>{
    console.log("click");
    if(document.activeElement !== null){
      console.log(document.activeElement.id);
      if(document.activeElement.id === "location"
        || document.activeElement.id ===  "tag"
        || document.activeElement.id ==="introduction"
      ){
        setHidden(true);
      }else{
        setHidden(false);
      }
    }else{
      setHidden(false);
    }

    console.log(tag);

  },[document.activeElement]);

  return (
    <div
      onClick={()=>{
      setClick((prev)=>!prev);
    }} className="upload-page-container">
      <div className={"upload-page-top-container"}>
        <TopBar beforeButton={true} centerText={"업로드"} centerTextType={"page"} checkButton={true} checkButtonOnClickEvent={()=>{alert("check")}}/>
      </div>

      <section className={"upload-page-file-thumbnail-container"}>
      <img alt={'short form thumbnail'} className={"upload-page-file-thumbnail"} src={'https://picsum.photos/200'} width={150} height={150} />
      {/* 업로드된 영상 썸네일 */}
      </section>

      <section className={"upload-page-sf-info-container"}>
      {/* 업로드할 게시물 내용*/}
        <div className={"upload-page-tag-input-container"}>
        {/* 태그 입력 */}
          <label htmlFor={"tag"}>태그 입력 (#으로 구분)</label>
        <input
               onChange={(e)=>{setTag(e.currentTarget.value)}}
               className={"upload-page-tag-input"}
               type={"text"} id={"tag"}
               placeholder={"텍스트를 입력하세요"}
        />
        </div>

        <div className={"upload-page-introduction-container"}>
        {/* 설명 입력 */}
          <label className={"ml-2 block font-medium text-gray-700 mb-2"} htmlFor={"introduction"}>설명</label>
            <textarea
              className={"upload-page-introduction-textarea"}
              id={"introduction"}
              placeholder={"텍스트를 입력하세요"}
              onClick={(e)=>{setIntroduction(e.currentTarget.value)}}
            />
        </div>

        <div className={"upload-page-add-location-outer-container"}>
            {/* 장소 추가 */}
            <label htmlFor={"location"}>장소추가</label>
            {/* 장소 검색 기능 */}
            <div className={"upload-page-add-location-inner-container"}>
              <RiMapPinLine className={"upload-page-location-icon"}/>

              <input
                type={'text'}
                id={'location'}
                className={"upload-page-location-input"}
              />
            </div>
            {/*https://react-kakao-maps-sdk.jaeseokim.dev/docs/sample/library/keywordBasic/*/}
          </div>

      </section>

      <div className={hidden ? "hidden" : "upload-page-bottom-nav-container"}>
        <BottomNavigation
          color={'black'}
          // activeCSS={false}
          // 사용자가 파일 업로드 했냐 안했냐에 따라서 true false
          // 업로드 아직 안한 경우 true
          // 업로드 한 경우 false
        />
      </div>
    </div>
  );
}

export default UploadShortFormPage;
