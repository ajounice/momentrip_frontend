import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import '../../../styles/components/Modal/Vertical/Comment.css';
import { RiCloseFill } from "react-icons/ri";
import { CommentType } from "../../../globalType";

// dummy data
const dummyCommentData = [
  {
    name : "연지애옹",
    comment : "와 진짜 너무 예쁘다 바다.",
    date : "2022-08-10",
    userId : 1,
    imagePath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIbS6Zi73YIIERf4lT4417820eaxJUHniE-w&usqp=CAU'
  },
  {
    name : "수진애옹",
    comment : "나도 가고싶음 ㅠ",
    date : "2022-08-11",
    userId : 2,
    imagePath : 'data:image/jpeg;base64,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'
  },
  {
    name : "채원애옹",
    comment : "와 진짜 너무 예쁘다 바다.",
    date : "2022-08-16",
    userId : 3,
    imagePath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKP2WSRrcm-8iYv8jZveqa1r6e43dmC8PGug&usqp=CAU'
  },
  {
    name : "수인애옹",
    comment : "와우",
    date : "2022-08-15",
    userId : 4,
    imagePath : 'data:image/jpeg;base64,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'
  },
  {
    name : "영웅애옹",
    comment : "!_!",
    date : "2022-08-13",
    userId : 5,
    imagePath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJBDfVCJkkuNvGaImJSLHGfEuFg3v979UsA&usqp=CAU'
  },
  {
    name : "영웅애옹",
    comment : "!_!",
    date : "2022-08-13",
    userId : 5,
    imagePath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJBDfVCJkkuNvGaImJSLHGfEuFg3v979UsA&usqp=CAU'
  },
  {
    name : "영웅애옹",
    comment : "!_!",
    date : "2022-08-13",
    userId : 5,
    imagePath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJBDfVCJkkuNvGaImJSLHGfEuFg3v979UsA&usqp=CAU'
  },
  {
    name : "영웅애옹",
    comment : "!_!",
    date : "2022-08-13",
    userId : 5,
    imagePath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJBDfVCJkkuNvGaImJSLHGfEuFg3v979UsA&usqp=CAU'
  },
  {
    name : "영웅애옹",
    comment : "!_!",
    date : "2022-08-13",
    userId : 5,
    imagePath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJBDfVCJkkuNvGaImJSLHGfEuFg3v979UsA&usqp=CAU'
  },
  {
    name : "영웅애옹",
    comment : "!_!",
    date : "2022-08-13",
    userId : 5,
    imagePath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJBDfVCJkkuNvGaImJSLHGfEuFg3v979UsA&usqp=CAU'
  },

];

interface ICommentItem{
  name : string;
  comment : string;
  date : string;
  userId : number;
  imagePath : string;
}

// 댓글 아이템
function CommentItem({name,comment,date,userId,imagePath}:ICommentItem){
  return(
    <div className={'comment-item-outer-container'}>
      <div className={'comment-item-inner-container'}>
        <div className={'comment-item-img-container'}>
          <img className={'comment-item-img'} src={imagePath} alt={"user profile"} />
        </div>
        <div className={'comment-item-text-container'}>
          <div className={'comment-item-name-n-date-container'}>
            <span>{name}</span>
            <span>{date}</span>
          </div>
          <div className={'comment-item-comment-container'}>
            <span>{comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface IComment{
  setViewComment : Dispatch<SetStateAction<boolean>>;
  commentList : CommentType[];
}


function Comment({setViewComment,commentList}:IComment){

  const [ comment, setComment ] = useState<string>('');
  const [ dummyComment, setDummyComment ] = useState(dummyCommentData);

  const inputRef = useRef(null);

  useEffect(()=>{
    console.log("setDummyComment : ",dummyComment);
  },[dummyComment]);

  const addCommentEvent = ( e : React.KeyboardEvent) =>{
    // 최신순 정렬로 보여줄 것
    console.log(e.key);
    if(e.key === 'Enter'){
      console.log("e.key === 'Enter");
      // 나중에 사용할 예정
     const date = new Date();
     const tmp = dummyComment;
      tmp.push({
        name : "연지애옹",
        comment : comment,
        date : "2022-09-12",
        userId : 1,
        imagePath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIbS6Zi73YIIERf4lT4417820eaxJUHniE-w&usqp=CAU'
      });
      console.log("dummyComment : ",dummyComment);
      if(inputRef !== null){
        console.log("inputRef!==null) : ",inputRef!==null);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        inputRef.current.reset();
        console.log("inputRef : ",inputRef);
        setDummyComment(tmp);
        console.log("inputRef!==null) : ",inputRef!==null);
      }
    }
  }

  return(
    <div className={'comment-modal-container'}>
      <div className={'comment-modal-top-nav'}>
        <span className={'comment-modal-top-nav-text'}>댓글</span>
        <span className={'comment-modal-top-nav-text'}>{dummyComment.length}</span>

        <div className={'comment-modal-close-icon-container'} onClick={()=>{setViewComment(false)}}>
          <RiCloseFill className={'close-icon'} size={30} />
        </div>
      </div>
      <div className={'comment-item-list-outer-container'}>
        <div className={'comment-item-list-inner-container'}>
          <div className={'comment-item-register-comment-container'}>
              <div className={'comment-item-img-container'}>
                <img className={'comment-item-img'} src={dummyCommentData[0].imagePath} alt={'user profile'} />
              </div>
            <div className={'comment-item-text-container'}>

              <div className={'comment-item-comment-container'}>
                <input ref={inputRef} onKeyPress={addCommentEvent} onChange={(e)=>{setComment(e.currentTarget.value)}} className={'comment-modal-input'} placeholder={"댓글 추가..."} />
              </div>
            </div>
          </div>
          <div>
            {
              dummyComment.map((item)=>{
              // commentList.map((item)=>{
                return(
                  <CommentItem name={item.name} comment={item.comment} date={item.date} userId={item.userId} imagePath={item.imagePath} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
