import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useInterval } from 'react-use';

import 'swiper/css';
import '../../styles/components/View/ShortForm.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

import ShortFormVideo from './ShortFormVideo';
import ShareModalPage from '../Modal/Vertical/BottomModalPage';
import Comment from '../Modal/Vertical/Comment';
import TourInfo from '../Modal/Vertical/TourInfo';
import ProfileInSF, { IUserInfoInSF } from "../common/ProfileInSF";

import { CommentType } from '../../globalType';
import { SERVER_API } from "../../config";

interface IGetFormsData {
  id: number;
  content: string;
  title: string | null;
  thumbnail: string;
  video: string;
  viewCount: number;
}
interface IFormsData extends IGetFormsData {
  videoHidden: boolean;
  videoStop: boolean;
  user : IUserInfoInSF;
}

const mockShortFormVideoData = {
  Video: [
    {
      video: 'video/s1.mp4',
      videoHidden: true,
      videoStop: false,
      title: '첫 번째 비디오',
    },
    {
      video: 'video/s2.mp4',
      videoHidden: false,
      videoStop: true,
      title: '두본째 비디오',
    },
    {
      video: 'video/s3.mp4',
      videoHidden: false,
      videoStop: true,
      title: '두본째 비디오',
    },
    {
      video: 'video/s4.mp4',
      videoHidden: false,
      videoStop: true,
      title: '두본째 비디오',
    },
  ],
};

function ShortForm() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  // share modal
  const [viewShare, setViewShare] = useState(false);
  // comment modal
  const [viewComment, setViewComment] = useState(false);
  const [commentData, setCommentData] = useState<CommentType[]>([]);

  const [ commentList , setCommentList ] = useState<CommentType[][]>([]);

  // tour info modal
  const [viewTourInfo, setViewTourInfo] = useState(false);
  // video like
  const [like, setLike] = useState(false);
  // video book mark
  const [isBookMark, setIsBookMark] = useState(false);

  const [accessToken, setAccessToken] = useState<string | null>();

  const [ currentSfId, setCurrentSfId] = useState(0);

  const [formsData, setFormsData] = useState<IFormsData[]>([
    {
      id: -1,
      content: '',
      title: '',
      thumbnail: '',
      video: '',
      viewCount: 0,
      videoHidden: false,
      videoStop: true,
      user : {
        id : 0,
        email : '',
        image : '',
        intro : '',
        name : '',
        nickname : '',
        password : '',
        type : false,
      }
    },
  ]);


  useEffect(() => {
    console.log('current Index : ', currentVideoIndex);
  }, [currentVideoIndex]);

  /* ===== 서버 연동 ===== */

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const axios = require('axios');
  const instance = axios.create({
    baseURL: 'http://test.heroforyou.space/api',
    timeout: 3000,
  });
  useEffect(() => {
    async function getForms() {
      try {
        const response = await instance.get('/forms', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(response.data);
        if (response.status === 200) {
          const tmpData: Array<any> = response.data;
          tmpData.map((data, i) =>
            i === 0
              ? (tmpData[i] = { ...data, videoHidden: true, videoStop: false })
              : (tmpData[i] = { ...data, videoHidden: false, videoStop: true }),
          );
          setFormsData(response.data);
        }
        return null;
      } catch (error) {
        console.error(error);
      }
    }

    getForms();
    // console.log(formsData);
  }, [accessToken]);

  useEffect(() => {
    setAccessToken(window.localStorage.getItem('Token'));
  }, []);

  useEffect(()=>{
    const tmp: any[] = [];
    formsData.forEach((item)=>{
      console.log("item.id : ",item.id);
      const itemID = item.id;
      axios(
        {
          method:"get",
          url:`${SERVER_API}/forms/${itemID}/comments`,
          headers : {
            Authorization: `Bearer ${accessToken}`,
          }
        }
      ).then((res:any)=>{
        if(res.status === 200){
          console.log(res.data);
          tmp.push(res.data);
        }
      }).catch((err:any)=>{
        console.log(err);
      })
    })

    setCommentList(tmp);

  },[formsData]);

  return (
    <div id={'short-form'} className="short-form-container">
      <Swiper
        id={'swiper'}
        className="swiper-container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        direction="vertical"
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => {
          console.log('slide change');
          setCurrentVideoIndex(swiper.activeIndex);
        }}
      >
        {formsData.map((data,index) => (
          <SwiperSlide className="short-form">
            <ShortFormVideo
              shortFormId={data.id}
              setComment={setCommentData}
              isBookMark={isBookMark}
              setIsBookMark={setIsBookMark}
              isHeart={like}
              setIsHeart={setLike}
              setViewComment={setViewComment}
              setViewTourInfo={setViewTourInfo}
              videoUrl={data.video}
              videoHidden={data.videoHidden}
              videoStop={data.videoStop}
              videoTitle={data.title}
<<<<<<< HEAD
              currentVideoIndex={currentVideoIndex}
=======
              user={data.user}
              setCurrentSfId={setCurrentSfId}
>>>>>>> dev
            />

            {/*<div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">*/}
            {/*  /!* comment, tour info ModalPage 유사한 새로운 component 생성 *!/*/}
            {/*  /!*<ModalPage open={verticalState.commentView} setOpen={(state)=>{{...verticalState}, commentView : state}>*!/*/}
            {/*  /!*  <Comment></Comment>*!/*/}
            {/*  /!*  }*!/*/}
            {/*  /!*</ModalPage>*!/*/}

            {/*  /!* tour info *!/*/}
            {/*  <ShareModalPage open={viewTourInfo} setOpen={setViewTourInfo}>*/}
            {/*    <TourInfo setViewTourInfo={setViewTourInfo} />*/}
            {/*  </ShareModalPage>*/}

            {/*  /!* comment *!/*/}
            {/*  <ShareModalPage open={viewComment} setOpen={setViewComment}>*/}
            {/*    <Comment index={index} shortFormId={data.id} user={data.user} commentList={commentList} setViewComment={setViewComment} />*/}
            {/*  </ShareModalPage>*/}
            {/*</div>*/}
            {/*id={user.id} email={user.email} password={user.password} intro={user.intro} type={user.type} nickname={user.nickname} image={user.image} name={user.name}*/}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export { ShortForm };
