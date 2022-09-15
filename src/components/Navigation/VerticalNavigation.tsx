import React, { useCallback, useEffect, useState } from 'react';
import {
  RiHeart3Line,
  RiQuestionAnswerLine,
  RiShareForwardLine,
  RiListUnordered,
  RiHeart3Fill,
  RiBookmarkLine,
  RiBookmarkFill,
  RiLinkM,
} from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { IVerticalNavigation } from '../../globalType';
import '../../styles/components/common/Navigation.css';
import axios from "axios";
import Button from '../Button/Button';
import BasicModal from '../common/BasicModal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CustomModal from '../common/CustomModal';

export default function VerticalNavigation({
  setViewTourInfo,
  setViewShare,
  setViewComment,
  setIsHeart,
  isHeart,
  isBookMark,
  setIsBookMark,
  setCommentData,
}: IVerticalNavigation) {
  // Props
  // 해당 숏폼을 좋아요 눌렀는지
  // 해당 숏폼에 대한 정보
  // 해당 숏폼에 달린 댓글 정보

  const onClickShare = () => {
    setViewShare((prev) => !prev);
    setShareModalOpen(true);
  };

  const onClickHeart = ()=>{
    axios.get(`{SERVER_URL}/forms/{form-id}/like`,
      {
        headers:{
          Authorization :'token'
        }
      })
      .then((res)=>{
        if(res.status === 200){
          setIsHeart((prev)=>!prev);
        }
      })
      .catch(()=>{
        alert("server error")
        })
  }

  const onClickComment =()=>{
    axios.get(`{SERVER_URL}/forms/{form_id}/comments`)
      .then((res)=>{
        if(res.status===200){
          setCommentData(res.data.data);
        }
      })
      .catch((err)=>{
        alert(err);
      })
    setViewComment((prev)=>!prev);
  }

  const onClickInfo = () => {
    setViewTourInfo((prev) => !prev);
  };

  const clickCopy = () => {
    setShareModalOpen(false);
    setOkCopyModalOpen(true);
  };

  const navigation = useNavigate();
  const getShareLink = () => {
    // TODO 링크 불러오도록 수정
    const ShortFormId = 1;
    return 'http://test.heroforyou.space/?shareId=' + ShortFormId;
  };

  const [isCopy, setIsCopy] = useState(false);
  const [okCopyModalOpen, setOkCopyModalOpen] = useState(false);

  useEffect(() => {
    console.log('isHeart : ', isHeart);
  }, [isHeart]);

  const [shareModalOpen, setShareModalOpen] = useState(false);
  return (
    <>
      <section className={'vertical-navigation-container'}>
        {isHeart ? (
          <RiHeart3Fill color={'white'} onClick={onClickHeart} className={'icon'} />
        ) : (
          <RiHeart3Line color={'white'} onClick={onClickHeart} className={'icon'} />
        )}
        {isBookMark ? (
          <RiBookmarkFill
            color={'white'}
            className={'icon'}
            onClick={() => {
              setIsBookMark(false);
            }}
          />
        ) : (
          <RiBookmarkLine
            color={'white'}
            className={'icon'}
            onClick={() => {
              setIsBookMark(true);
            }}
          />
        )}
        <RiQuestionAnswerLine color={'white'} onClick={onClickComment} className={'icon'} />
        <RiShareForwardLine color={'white'} onClick={onClickShare} className={'icon'} />
        <RiListUnordered color={'white'} onClick={onClickInfo} className={'icon'} />
      </section>
      {/* <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"> */}
      <CustomModal open={shareModalOpen} setOpen={setShareModalOpen} title="공유하기">
        <>
          <div className="m-8"> </div>
          <div className="flex gap-2">
            <Button title="닫기" handleClick={() => setShareModalOpen(false)} color="primaryB"></Button>
            <CopyToClipboard text={getShareLink()} onCopy={clickCopy}>
              <button
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 disabled:bg-gray-300`}
              >
                링크 복사하기
              </button>
            </CopyToClipboard>
          </div>
        </>
      </CustomModal>
      <BasicModal
        open={okCopyModalOpen}
        setOpen={() => setOkCopyModalOpen(false)}
        title="링크가 복사되었습니다"
        type="alert"
        ok="닫기"
      ></BasicModal>
      {/* </div> */}
    </>
  );
}
