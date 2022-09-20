import React, { useEffect, useState } from 'react';
import '../styles/pages/UploadPage.css';
import { RiMapPinLine } from 'react-icons/ri';
import UploadPageDropDown from "../components/DropDown/UploadPageDropDonw";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VideoThumbnail from 'react-video-thumbnail';
import { TopBar } from "../components/common/Navigation";
import axios from "axios";
import { SERVER_API } from "../config";

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

  const [ location, setLocation ] = useState('');

  const [ imgSrc, setImgSrc ] = useState('');
  const [ imgData, setImgData ] = useState('');


  const [accessToken, setAccessToken] = useState<string | null>();

  // category state
  const [category, setCategory ] = useState('카테고리를 선택해주세요');
  const [ categoryListView, setCategoryListView ] = useState(false);

  const onClickCategory =()=>{
    setCategoryListView(true);
  }

  useEffect(()=>{
    console.log(imgSrc);
  },[imgSrc]);

  useEffect(()=>{
    setAccessToken(window.localStorage.getItem('Token'));
  },[]);

  const onClickShortForm = (e : any) => {
    if (e.target.files.length > 0) {
      const objectUrl = URL.createObjectURL(e.target.files[0]);
      // setImgSrc(objectUrl);

      console.log(e.target.files[0].name);
      const fileName = document.getElementById('fileName') as HTMLDivElement;
      fileName.innerText = e.target.files[0].name;

      // const a = document.getElementById('source') as HTMLSourceElement;
      // a.src = objectUrl;
      // a.load();
      // a.onloadeddata = function(){
      //   a.play();
      // }

      setImgData(e.target.files[0]);

      return () => URL.revokeObjectURL(objectUrl);
      // URL.revokeObjectURL(objectUrl);
    }
    setImgSrc('/images/defaultImg.png');
    setImgData(e.target.files[0]);
  }

  const onClickUpload = (e:any) => {
    const data = new FormData();

    if(category ==='카테고리를 선택해주세요'){
      alert("카테고리를 선택해주세요.");
      return;
    }

    if(imgData === '') {
      alert("동영상을 업로드해주세요.");
      return;
    }

    const tagList = ParseTag(tag);
    tagList.push(category);

    data.append('tag', tagList.toString());
    data.append('video',imgData);
    data.append('site',location);

    axios({
      method:"post",
      url:`${SERVER_API}/forms`,
      headers : {
        Authorization: `Bearer ${accessToken}`,
      },
      data : data,
    })
      .then(()=>{
        alert("숏폼 업로드 성공");
        window.location.assign('/home');
      })
      .catch((err)=>{
        console.log(err);
      })

  }

  return (
    <div
      onClick={() => {
        setClick((prev) => !prev);
      }}
      className="upload-page-container"
    >
      <TopBar beforeButton={true} centerText={"업로드"} centerTextType={"page"} checkButton={true} checkButtonOnClickEvent={onClickUpload}/>
      <div className="mt-20">
        <section className={'upload-page-file-thumbnail-container'}>
          <label htmlFor={'file-upload'}>
            <div id={'fileName'} className={'upload-page-file-thumbnail'}>
            {/*<video autoPlay loop  width={"470"} height={"470"} controls >*/}
            {/*  /!*<source src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}/>*!/*/}
            {/*  <source id={'source'} />*/}
            {/*</video>*/}
            {/*  <img src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}/>*/}
            </div>
            <input
              accept = "video/*"
              id="file-upload" style={{ display: 'none' }} type="file" onChange={onClickShortForm} />
          </label>
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

              <input type={'text'} id={'location'} onChange={(e)=>{setLocation(e.currentTarget.value)}} className={'upload-page-location-input'} />
            </div>
            {/*https://react-kakao-maps-sdk.jaeseokim.dev/docs/sample/library/keywordBasic/*/}
          </div>

          <div>
          {/* 카테고리 입력하는  */}
            <div className={"upload-page-category-outer-container"}>
              <label>카테고리</label>

                <div placeholder={"카테고리를 선택해주세요"} onClick={onClickCategory}
                     className={"upload-page-category-container"}>
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
