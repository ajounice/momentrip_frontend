import React, { useEffect, useState } from 'react';
import '../styles/pages/UploadPage.css';
import { RiMapPinLine } from 'react-icons/ri';
import UploadPageDropDown from "../components/DropDown/UploadPageDropDonw";

// 태그 파싱 함수
function ParseTag(hashtags: string): string[] {
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
  const [tag, setTag] = useState<string>(''); //

  // 설명 state
  const [introduction, setIntroduction] = useState<string>('');

  const [click, setClick] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);

  // category state
  const [category, setCategory ] = useState('카테고리를 선택해주세요');
  const [ categoryListView, setCategoryListView ] = useState(false);

  return (
    <div
      onClick={() => {
        setClick((prev) => !prev);
      }}
      className="upload-page-container"
    >
      <div className="mt-20">
        <section className={'upload-page-file-thumbnail-container'}>
          <img
            alt={'short form thumbnail'}
            className={'upload-page-file-thumbnail'}
            src={'https://picsum.photos/200'}
            width={150}
            height={150}
          />
          {/* 업로드된 영상 썸네일 */}
        </section>

        <section className={'upload-page-sf-info-container'}>
          {/* 업로드할 게시물 내용*/}
          <div className={'upload-page-tag-input-container'}>
            {/* 태그 입력 */}
            <label htmlFor={'tag'}>태그 입력 (#으로 구분)</label>
            <input
              onChange={(e) => {
                setTag(e.currentTarget.value);
              }}
              className={'upload-page-tag-input'}
              type={'text'}
              id={'tag'}
              placeholder={'텍스트를 입력하세요'}
            />
          </div>

          <div className={'upload-page-introduction-container'}>
            {/* 설명 입력 */}
            <label className={'ml-2 block font-medium text-gray-700 mb-2'} htmlFor={'introduction'}>
              설명
            </label>
            <textarea
              className={"upload-page-introduction-textarea"}
              id={"introduction"}
              placeholder={"텍스트를 입력하세요"}
              onChange={(e)=>{setIntroduction(e.currentTarget.value)}}
              onClick={(e) => {
                setIntroduction(e.currentTarget.value);
              }}
            />
          </div>

          <div className={'upload-page-add-location-outer-container'}>
            {/* 장소 추가 */}
            <label htmlFor={'location'}>장소추가</label>
            {/* 장소 검색 기능 */}
            <div className={'upload-page-add-location-inner-container'}>
              <RiMapPinLine className={'upload-page-location-icon'} />

              <input type={'text'} id={'location'} className={'upload-page-location-input'} />
            </div>
            {/*https://react-kakao-maps-sdk.jaeseokim.dev/docs/sample/library/keywordBasic/*/}
          </div>

          <div>
          {/* 카테고리 입력하는  */}
            <div className={"upload-page-category-outer-container"}>
              <label>카테고리</label>

              <div placeholder={"카테고리를 선택해주세요"} onClick={()=>{setCategoryListView(true)}} className={"upload-page-category-container"}>
                {category}
              </div>
            </div>
            {
              categoryListView
              ? <UploadPageDropDown setCategoryList={setCategoryListView} setCategory={setCategory} dropDownList={["산","바다/계곡","호캉스/호텔","축제","캠핑","야경","액티비티","박물관/역사","해외 여행","쇼핑"]}/>
              : null
            }
          </div>
        </section>
      </div>
    </div>
  );
}

export default UploadShortFormPage;
