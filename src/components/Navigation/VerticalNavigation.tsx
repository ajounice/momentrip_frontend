import React, { useCallback, useEffect } from "react";
import {
  RiHeart3Line,
  RiQuestionAnswerLine,
  RiShareForwardLine,
  RiListUnordered,
  RiHeart3Fill,
  RiBookmarkLine, RiBookmarkFill
} from "react-icons/ri";
import { IVerticalNavigation } from '../../globalType';
import '../../styles/components/common/Navigation.css';

export default function VerticalNavigation({
  setViewTourInfo,
  setViewShare,
  setViewComment,
  setIsHeart,
  isHeart,
  isBookMark,
  setIsBookMark,
}: IVerticalNavigation) {
  // Props
  // 해당 숏폼을 좋아요 눌렀는지
  // 해당 숏폼에 대한 정보
  // 해당 숏폼에 달린 댓글 정보

  const onClickShare = ()=> {
    setViewShare((prev) => !prev);
  }

  const onClickHeart = ()=>{
    setIsHeart((prev)=>!prev);
  }

  const onClickComment =()=>{
    setViewComment((prev)=>!prev);
  }

  const onClickInfo = ()=>{
    setViewTourInfo((prev)=>!prev);
  }

  useEffect(()=>{
    console.log("isHeart : ",isHeart);
  },[isHeart])

  return (
    <section className={'vertical-navigation-container'}>
      {isHeart ? (
        <RiHeart3Fill color={"white"}  onClick={onClickHeart} className={'icon'} />
      ) : (
        <RiHeart3Line color={"white"}  onClick={onClickHeart} className={'icon'} />
      )}
      {
        isBookMark ?
          <RiBookmarkFill color={'white'} className={'icon'} onClick={()=>{setIsBookMark(false)}}/>
          : <RiBookmarkLine color={'white'}  className={'icon'} onClick={()=>{setIsBookMark(true)}}/>
      }
      <RiQuestionAnswerLine color={"white"} onClick={onClickComment} className={'icon'} />
      <RiShareForwardLine color={"white"}  onClick={onClickShare} className={'icon'} />
      <RiListUnordered color={"white"}  onClick={onClickInfo} className={'icon'} />
    </section>
  );

}
