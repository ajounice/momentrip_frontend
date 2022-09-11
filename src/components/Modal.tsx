import React from 'react';
import '../styles/components/Modal.css';
import {RiCloseFill} from 'react-icons/ri';
import { IComment } from "../globalType";

interface IModalContainer{
  title : string|null;
  subTitle : string|null;
}

function ModalContainer({title, subTitle}:IModalContainer){
  return(
    <div className={"modal-container"}>
      <div className={'icon-container'}>
        { (title !== null || subTitle !== null )?
          <div>
            {title !== null ? <h1>{title}</h1> : null}
            {subTitle !== null ? <h3>{subTitle}</h3> : null}
          </div>
          : null
        }

        <RiCloseFill color={'black'} className={'icon icon-position-right'}/>
      </div>
    </div>
  );
}

function CommentComponent({writerID,writerNickName,writerProfileImage,commentID,writtenDate,comment} :IComment){
  // writerID
  // writerNickName
  // writerProfileImage
  // commentID
  // writtenDate
  // comment

  return(
    <div className={'comment-container'}>
      <img src={writerProfileImage}/>
      <div>
        <div className={'comment-info-container'}>
          <span className={'comment-info'}>{writerNickName} • </span>

          <span className={'comment-info'}>{writtenDate}</span>
        </div>
        <span className={'comment'}>{comment}</span>
      </div>
    </div>
  );
}

function Modal(){
  return(
    <div className={'container'}>
        <ModalContainer title={"댓글"} subTitle={"502"}/>
        <CommentComponent writerID={"id"} writerNickName={"고양이"} writerProfileImage={'https://picsum.photos/200'} commentID={123} writtenDate={125135215} comment={"comment"} />
        <CommentComponent writerID={"id"} writerNickName={"고양이"} writerProfileImage={'https://picsum.photos/200'} commentID={123} writtenDate={125135215} comment={"comment"} />
        <CommentComponent writerID={"id"} writerNickName={"고양이"} writerProfileImage={'https://picsum.photos/200'} commentID={123} writtenDate={125135215} comment={"comment"} />
        <CommentComponent writerID={"id"} writerNickName={"고양이"} writerProfileImage={'https://picsum.photos/200'} commentID={123} writtenDate={125135215} comment={"comment"} />
    </div>
  );
}

function CommentModal(){
  return(
    <div>

    </div>
  )
}

export {Modal, CommentModal} ;
