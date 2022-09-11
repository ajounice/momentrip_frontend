import ReactPlayer from 'react-player';
import React, { useEffect, useState } from "react";
import { IShortFormVideo } from '../../globalType';
import VerticalNavigation from "../Navigation/VerticalNavigation";
import Comment from '../../components/Modal/Vertical/Comment';

function ShortFormVideo(videoProps: IShortFormVideo) {
  // 댓글 모달
  const [ viewComment, setViewComment ] = useState<boolean>(false);
  // 공유 모달
  const [ viewShare, setViewShare ] = useState<boolean>(false);
  // tour info 투어 인포 모달
  const [ viewTourInfo, setViewTourInfo ] = useState<boolean>(false);
  // 좋아요를 위한 state
  const [ isHeart, setIsHeart ] = useState<boolean>(false);

  // User의 Vertical Navigation Click 감지를 위한 useEffect
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(()=>{

  },[viewComment,viewShare,viewTourInfo,isHeart]);

  return (
    <>
      {
        viewComment
        ? <Comment setViewComment={setViewComment}/>
          : null
      }

      <ReactPlayer
        width={window.innerWidth}
        height={window.innerHeight}
        className="short-form"
        // eslint-disable-next-line react/destructuring-assignment
        url={videoProps.videoUrl}
        muted
        playing
        autoPlay
        loop
        onPlay={() => {
          console.log('play');
        }}
      />

      {/* 인스타 릴스나 유튜브 숏츠보면 영상이랑 vertical navigation이 같이 swipe되어서 ShortFormVideo에 넣음.*/}
      <VerticalNavigation
        viewComment={viewComment}
        setViewComment={setViewComment}
        viewShare={viewShare}
        setViewShare={setViewShare}
        isHeart={isHeart}
        setIsHeart={setIsHeart}
        viewTourInfo={viewTourInfo}
        setViewTourInfo={setViewTourInfo}/>
    </>
  );
}

export default ShortFormVideo;
