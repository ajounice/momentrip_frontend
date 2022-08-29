import React, { useEffect, useState } from 'react';
import 'swiper/css';
import '../../styles/components/View/ShortForm.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  A11y, Navigation, Pagination, Scrollbar,
} from 'swiper';
import { VerticalNavigation } from '../common/Navigation';
import ShortFormVideo from './ShortFormVideo';

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

function ShortForm() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  useEffect(() => {
    console.log('current Index : ', currentVideoIndex);
  }, [currentVideoIndex]);

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
    <div className="short-form-container">

      <Swiper
        className="swiper-container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        direction="vertical"
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => { console.log('slide change'); setCurrentVideoIndex(swiper.activeIndex); }}
      >

        <SwiperSlide className="short-form">
          <ShortFormVideo videoUrl="https://s3-us-west-2.amazonaws.com/s.cdpn.io/485050/movie.ogg" videoHidden videoStop={false} videoTitle="첫 번째 비디오" />
        </SwiperSlide>
        <SwiperSlide>
          <ShortFormVideo videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" videoHidden={false} videoStop videoTitle="두본째 비ㅣㄷ오" />
        </SwiperSlide>
      </Swiper>

      <VerticalNavigation />
    </div>
  );
}

export { ShortForm };
