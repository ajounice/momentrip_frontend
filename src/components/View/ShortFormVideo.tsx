import ReactPlayer from 'react-player';
import React, { useEffect, useState } from 'react';
import { CommentType, IShortFormVideo } from '../../globalType';
import VerticalNavigation from '../Navigation/VerticalNavigation';
import ProfileInSF, { IUserInfoInSF } from "../common/ProfileInSF";
import ShareModalPage from '../Modal/Vertical/BottomModalPage';
import TourInfo from '../Modal/Vertical/TourInfo';
import Comment from '../Modal/Vertical/Comment';
import axios from "axios";
import { SERVER_API } from "../../config";

function ShortFormVideo(videoProps: IShortFormVideo) {
  // 모달이 올라와 있을 때 배경 부분이 스크롤되는 것을 막기 위한 state
  const [touchEvent, setTouchEvent] = useState(false);

  const [viewComment, setViewComment] = useState(false);
  const [commentData, setCommentData] = useState<CommentType[]>([]);

  const [commentList, setCommentList] = useState<CommentType[][]>([]);

  // tour info modal
  const [viewTourInfo, setViewTourInfo] = useState(false);
  // video like
  const [like, setLike] = useState(false);
  // video book mark
  const [isBookMark, setIsBookMark] = useState(false);

  const [ currentUser, setCurrentUser ] = useState<IUserInfoInSF>({
    email : '',
    id : 0,
    image : '',
    intro : '',
    name : '',
    nickname : '',
    password : '',
    type : false,});

  const [ followState,setFollowState ] = useState(false);
  const [ currentUserFollowingList, setCurrentUserFollowingList ] = useState<IUserInfoInSF[]>([]);

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


  useEffect(()=>{
    axios.get(`${SERVER_API}/users/my`,{
      headers : {
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      }
    }).then((res)=>{

      setCurrentUser({
        email : res.data.email,
        id : res.data.id,
        image : res.data.image,
        intro : res.data.intro,
        name : res.data.name,
        nickname : res.data.nickname,
        password : "",
        type : false,
      });
    })
      .catch((err)=>{
        console.log(err);
      })
  },[]);

  useEffect(()=>{
    const nickname = currentUser.nickname;

    if(nickname !== ''){
      axios({
        method:"get",
        url : `${SERVER_API}/users/${nickname}/followings`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('Token')}`,
        }
      })
        .then((res)=>{
          setCurrentUserFollowingList(res.data);
        })
        .catch((err)=>{
          console.log(err);
        })
    }


  },[currentUser]);

  useEffect(()=>{
    currentUserFollowingList.forEach((user)=>{
      if( user !== null && user.nickname !== null && user.nickname === videoProps.user.nickname ){
        setFollowState(true);
        return;
      }
    })
  },[currentUserFollowingList]);


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

      <ProfileInSF followState={followState} user={videoProps.user} />
      {/*setViewShare((prev)=>!prev)*/}

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* comment, tour info ModalPage 유사한 새로운 component 생성 */}
        {/*<ModalPage open={verticalState.commentView} setOpen={(state)=>{{...verticalState}, commentView : state}>*/}
        {/*  <Comment></Comment>*/}
        {/*  }*/}
        {/*</ModalPage>*/}

        {/* tour info */}
        <ShareModalPage open={viewTourInfo} setOpen={setViewTourInfo}>
          <TourInfo setViewTourInfo={setViewTourInfo} />
        </ShareModalPage>

        {/* comment */}
        <ShareModalPage open={viewComment} setOpen={setViewComment}>
          <Comment
            shortFormId={videoProps.shortFormId}
            user={videoProps.user}
            commentList={commentList}
            setViewComment={setViewComment}
          />
        </ShareModalPage>
      </div>

      {/* 인스타 릴스나 유튜브 숏츠보면 영상이랑 vertical navigation이 같이 swipe되어서 ShortFormVideo에 넣음.*/}
      <VerticalNavigation
        setCurrentSfId={videoProps.setCurrentSfId}
        shortFormId={videoProps.shortFormId}
        setIsBookMark={videoProps.setIsBookMark}
        isBookMark={videoProps.isBookMark}
        setViewComment={setViewComment}
        isHeart={videoProps.isHeart}
        setIsHeart={videoProps.setIsHeart}
        setViewTourInfo={setViewTourInfo}
        setCommentData={videoProps.setComment}
      />
    </>
  );
}

export default ShortFormVideo;
