import React, { useEffect, useState } from "react";
import 'swiper/css';
import '../../styles/components/View/ShortForm.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import ShortFormVideo from './ShortFormVideo';
import ShareModalPage from "../Modal/Vertical/BottomModalPage";
import Share from "../Modal/Vertical/Share";
import Comment from '../Modal/Vertical/Comment';
import TourInfo from "../Modal/Vertical/TourInfo";
import { CommentType } from "../../globalType";

// export interface IShortFormVideo{
//   videoUrl : string;
//   videoHidden : boolean; // 보여줄지 안보여줄지
//   videoStop : boolean;
//   // videoUploader :
//   videoTitle : string;
// }

// const defaultVideoProps = {
//   videoHidden: false,
//   videoStop: true,
// };

const mockShortFormVideoData = {
  Video: [
    {
      videoUrl: 'video/s1.mp4',
      videoHidden: true,
      videoStop: false,
      videoTitle: '첫 번째 비디오',
    },
    {
      videoUrl: 'video/s2.mp4',
      videoHidden: false,
      videoStop: true,
      videoTitle: '두본째 비디오',
    },
    {
      videoUrl: 'video/s3.mp4',
      videoHidden: false,
      videoStop: true,
      videoTitle: '두본째 비디오',
    },
    {
      videoUrl: 'video/s4.mp4',
      videoHidden: false,
      videoStop: true,
      videoTitle: '두본째 비디오',
    },
  ],
};


// export interface IVerticalState{
//   like : boolean;
//
//   shortFormId : number;
//   commentView : boolean;
//
//   shareView : boolean;
//   shareLink : string;
//
//   tourInfoView : boolean;
// }

function ShortForm() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  // share modal
  const [ viewShare, setViewShare ] = useState(false);
  // comment modal
  const [ viewComment, setViewComment ] = useState(false);
  const [ commentData, setCommentData] = useState<CommentType[]>([]);

  // tour info modal
  const [ viewTourInfo, setViewTourInfo ] = useState(false);
  // video like
  const [ like, setLike ] = useState(false);
  // video book mark
  const [ isBookMark, setIsBookMark ] = useState(false);

  useEffect(() => {
    console.log('current Index : ', currentVideoIndex);
  }, [currentVideoIndex]);

  useEffect(()=>{
    console.log("viewShare ",viewShare);
    console.log("viewComment ",viewComment);
    console.log("viewTourInfo ",viewTourInfo);
    console.log("like ",like);
  },[viewShare,viewComment,viewTourInfo,like])


  // touch -> 재생 멈춤/실행
  // vertical swiper -> 숏폼 next/before
  // 처음에 10개 비디오 프리로딩 ( 첫 영상 + 9개 )
  // 인덱스 10부터 다시 9개 프리로딩
  // props hidden = false/true로 보여주는거

  // <video tabIndex="-1" className="video-stream html5-main-video" webkit-playsinline=""
  //        playsInline="" x-webkit-airplay="allow" controlsList="nodownload"
  // eslint-disable-next-line max-len
  //        style="width: 504px; height: 896px; left: -45px; top: 0px;" title="가짜광기 눈빛 vs 찐광기 눈빛 ㅋㅋㅋㅋㅋ"
  //        loop="" src="blob:https://m.youtube.com/b60ecc3e-b394-43e1-9c1c-88d21d3a7c17"></video>

  return (
    <div id={"short-form"} className="short-form-container">
      <Swiper
        id={"swiper"}
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
        {/* <SwiperSlide className="short-form">
          <ShortFormVideo
            videoUrl="https://s3-us-west-2.amazonaws.com/s.cdpn.io/485050/movie.ogg"
            videoHidden
            videoStop={false}
            videoTitle="첫 번째 비디오"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ShortFormVideo
            videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            videoHidden={false}
            videoStop
            videoTitle="두본째 비ㅣㄷ오"
          />
        </SwiperSlide> */}
        {mockShortFormVideoData.Video.map((data) => (
          <SwiperSlide className="short-form">
            <ShortFormVideo
              setComment={setCommentData}
              isBookMark={isBookMark}
              setIsBookMark={setIsBookMark}
              isHeart={like}
              setIsHeart={setLike}
              setViewComment={setViewComment}
              setViewShare={setViewShare}
              setViewTourInfo={setViewTourInfo}
              videoUrl={data.videoUrl}
              videoHidden={data.videoHidden}
              videoStop={data.videoStop}
              videoTitle={data.videoTitle}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* comment, tour info ModalPage 유사한 새로운 component 생성 */}
        {/*<ModalPage open={verticalState.commentView} setOpen={(state)=>{{...verticalState}, commentView : state}>*/}
        {/*  <Comment></Comment>*/}
        {/*  }*/}
        {/*</ModalPage>*/}

        {/* tour info */}
        <ShareModalPage open={viewTourInfo} setOpen={setViewTourInfo}>
          <TourInfo setViewTourInfo={setViewTourInfo}/>
        </ShareModalPage>

         {/* comment */}
        <ShareModalPage open={viewComment} setOpen={setViewComment}>
          <Comment commentList={commentData} setViewComment={setViewComment}/>
        </ShareModalPage>

         {/* share */}
        <ShareModalPage open={viewShare} setOpen={setViewShare}>
          <Share setViewShare={setViewShare} />
        </ShareModalPage>
      </div>

    </div>
  );
}

export { ShortForm };
