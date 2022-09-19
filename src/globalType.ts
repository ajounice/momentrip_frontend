import React, { Dispatch, SetStateAction } from "react";
import { IUserInfoInSF } from "./components/common/ProfileInSF";

export type Size = 'sm' | 'md' | 'lg';
export type StyleType = 'line' | 'full';
export type ButtonType = 'button' | 'submit' | 'reset';
export type FontWeight = 'light' | 'normal' | 'bold';

// Short Form 댓글 가져오기
export interface CommentType{
  id : number;
  content : string;
  user : IUserInfoInSF;
}

/* Button Interface */
export interface IButton{
  text: string;
  buttonType: ButtonType;
  styleType: StyleType;
  color: string;
  size: Size;
  fontWeight: FontWeight;
  disabled: boolean;
}

/* comment Interface */
/* 해당 숏폼에 달린 댓글 정보
*  댓글 남긴 사람 닉네임,
*  댓글 남긴 사람 id,
*  댓글 남긴 사람 프로필 이미지
*  댓글 남긴 날짜
*  댓글 텍스트
*  댓글 id
* */

export interface IComment{
  writerID : string;
  writerNickName : string;
  writerProfileImage : string;
  commentID : number;
  writtenDate : number;
  comment : string;
}

/* ShortForm Base Information */
// 해당 숏폼을 좋아요 눌렀는지
interface IShortFormInfo{
  like : boolean;
  tourInfo : ITourInfo;
  commentList : IComment[];
}

/* Tour Info */
/* 해당 숏폼에 대한 정보
*  숏폼 관련 장소 이름
*  숏폼 관련 투어 이름
*  숏폼 관련 투어 이미지
*  숏폼 관련 투어 가격
*  숏폼 관련 투어 정보 저장 유무
*  숏폼 관련 투어 태그들
*  숏폼 관련 투어들과 관련된 숏폼
*  숏폼 관련 투어의 위경도 정보 */
interface ITourInfo{
  placeName : string; // 장소 이름 ex) 부산
  tourName : string; // 투어 이름 ex) 송도 케이블카
  tourPrice : number; // 투어 가격
  tourImage : string; // 투어 이미지 링크
  tourTagList : string[]; // 투어 관련 태그 리스트
  latitude : number; // 위도
  longitude : number; // 경도
}

export interface IVerticalNavigation {
  setCurrentSfId:Dispatch<SetStateAction<number>>;
  isBookMark : boolean;
  setIsBookMark :Dispatch<SetStateAction<boolean>>;
  setViewComment : Dispatch<SetStateAction<boolean>>;
  isHeart : boolean;
  setIsHeart : Dispatch<SetStateAction<boolean>>;
  setViewTourInfo : Dispatch<SetStateAction<boolean>>;
  setCommentData : Dispatch<SetStateAction<CommentType[]>>;
  currentVideoIndex?: number;
  shortFormId ?: number;
}

export interface IShortFormVideo{
  setCurrentSfId:Dispatch<SetStateAction<number>>;
  videoUrl : string;
  videoHidden : boolean; // 보여줄지 안보여줄지
  videoStop : boolean;
  // videoUploader :
  videoTitle : string | null;

  shortFormId : number;

  // modal 띄우기 위한 props
  setViewComment : Dispatch<SetStateAction<boolean>>;
  setViewTourInfo : Dispatch<SetStateAction<boolean>>;
  setIsHeart :  Dispatch<SetStateAction<boolean>>;
  isHeart : boolean;
  setIsBookMark :  Dispatch<SetStateAction<boolean>>;
  isBookMark : boolean;
  currentVideoIndex?: number;

  // 해당 숏폼의 comment 값을 설정하기 위한 setState
  setComment : Dispatch<SetStateAction<CommentType[]>>;

  user : IUserInfoInSF;
}

// nav props
export interface INavProps{
  top : boolean;
  vertical : boolean;
  bottom : boolean;
  color : string;
}


// TopBar Props
export interface ITopBar{
  // 왼쪽 뒤로가기 버튼
  beforeButton? : boolean;

  //  뒤로가기 버튼 옆에 왼쪽 텍스트
  leftText? : string;
  leftTextType? : "user" | "page" |null;

  // 가운데 텍스트
  centerText : string; // 안쓸경우 ""
  centerTextType : "user" | "page" | null | string; // centerText === "" 인 경우 null

  // 알람 아이콘
  alarm? : boolean;
  alarmOnClickEvent? : React.MouseEventHandler<HTMLDivElement>;

  // check icon button
  checkButton? : boolean;
  checkButtonOnClickEvent? : React.MouseEventHandler<HTMLDivElement>;

  // dropdown menu bar
  dropdown? : string;

  plusButton? : boolean;
  plusButtonOnClickEvent? : React.MouseEventHandler<HTMLDivElement>;
}

{/* FIXME: 위시리스트 섬네일 받아오게 수정되면 수정*/}
// 위시리스트 폼
export interface WishForm{
  id : number;
  type: "FORM"|"TOUR";
  targetId : number;
}

{/* FIXME: 위시리스트 섬네일 받아오게 수정되면 수정*/}
// 위시리스트 폴더
export interface WishFolder{
  id : number;
  name:string;
  wishlists : WishForm[];
}
