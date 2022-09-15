import ReactPlayer from 'react-player';
import React, { useEffect, useState } from 'react';
import { IShortFormVideo } from '../../globalType';
import VerticalNavigation from '../Navigation/VerticalNavigation';

function ShortFormVideo(videoProps: IShortFormVideo) {
  // 모달이 올라와 있을 때 배경 부분이 스크롤되는 것을 막기 위한 state
  const [touchEvent, setTouchEvent] = useState(false);

  // // 댓글 모달
  // const [ viewComment, setViewComment ] = useState<boolean>(false);
  // // 공유 모달
  // const [ viewShare, setViewShare ] = useState<boolean>(false);
  // // tour info 투어 인포 모달
  // const [ viewTourInfo, setViewTourInfo ] = useState<boolean>(false);
  // // 좋아요를 위한 state
  // const [ isHeart, setIsHeart ] = useState<boolean>(false);

  // User의 Vertical Navigation Click 감지를 위한 useEffect
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  // useEffect(()=>{
  //   if(viewComment || viewShare || viewTourInfo ){
  //     setTouchEvent(false);
  //     // video.style.touchAction = 'auto';
  //   }
  //   else{
  //     setTouchEvent(true);
  //
  //     // video.style.removeProperty('hidden');
  //     // video.style.touchAction = 'none';
  //   }
  //
  // },[viewComment,viewShare,viewTourInfo,isHeart]);

  return (
    <>
      <ReactPlayer
        width={window.innerWidth}
        height={window.innerHeight}
        className={touchEvent === false ? `short-form-touch-event-none` : `short-form-touch-event-auto`}
        url={videoProps.videoUrl}
        muted
        playing
        autoPlay
        loop
        onPlay={() => {
          console.log('play');
        }}
      />

      {/*setViewShare((prev)=>!prev)*/}

      {/* 인스타 릴스나 유튜브 숏츠보면 영상이랑 vertical navigation이 같이 swipe되어서 ShortFormVideo에 넣음.*/}
      <VerticalNavigation
        setIsBookMark={videoProps.setIsBookMark}
        isBookMark={videoProps.isBookMark}
        setViewComment={videoProps.setViewComment}
        setViewShare={videoProps.setViewShare}
        isHeart={videoProps.isHeart}
        setIsHeart={videoProps.setIsHeart}
        setViewTourInfo={videoProps.setViewTourInfo}
        setCommentData={videoProps.setComment}
      />
    </>
  );
}

export default ShortFormVideo;
