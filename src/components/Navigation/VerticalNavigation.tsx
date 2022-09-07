import React, { useCallback } from 'react';
import { RiHeart3Line, RiQuestionAnswerLine, RiShareForwardLine, RiListUnordered, RiHeart3Fill } from 'react-icons/ri';
import { IVerticalNavigation } from '../../globalType';

export default function VerticalNavigation({
  isSelectedInfo,
  setIsSelectedInfo,
  isSelectedHeart,
  setIsSelectedHeart,
  isSelectComment,
  setIsSelectComment,
  isClickedShare,
  setIsClickedShare,
}: IVerticalNavigation) {
  // Props
  // 해당 숏폼을 좋아요 눌렀는지
  // 해당 숏폼에 대한 정보
  // 해당 숏폼에 달린 댓글 정보

  const onClickShare = useCallback(() => {
    setIsClickedShare(!isClickedShare);
  }, [isClickedShare]);

  const onClickHeart = useCallback(() => {
    setIsSelectedHeart(!isSelectedHeart);
  }, [isSelectedHeart]);

  const onClickComment = useCallback(() => {
    setIsSelectComment(true);
  }, [isSelectComment]);

  const onClickInfo = useCallback(() => {
    setIsSelectedInfo(!isSelectedInfo);
  }, [isSelectedInfo]);

  return (
    <section className={'vertical-navigation-container'}>
      {isSelectedHeart ? (
        <RiHeart3Fill onClick={onClickHeart} className={'icon'} />
      ) : (
        <RiHeart3Line onClick={onClickHeart} className={'icon'} />
      )}
      <RiQuestionAnswerLine onClick={onClickComment} className={'icon'} />
      <RiShareForwardLine onClick={onClickShare} className={'icon'} />
      <RiListUnordered onClick={onClickInfo} className={'icon'} />
    </section>
  );

  //
  // const [like, setLike] = useState(false);
  // const color ='white';
  //
  // return (
  //   <div className="vertical-navigation-container">
  //     {like ? (
  //       <RiHeart3Fill
  //         fill={color}
  //         onClick={() => {
  //           setLike(false);
  //         }}
  //         className="icon"
  //       />
  //     ) : (
  //       <RiHeart3Line
  //         fill={color}
  //         onClick={() => {
  //           setLike(true);
  //         }}
  //         className="icon"
  //       />
  //     )}
  //     <RiQuestionAnswerLine fill={color} className="icon" />
  //     <RiShareForwardFill fill={color} className="icon" />
  //     <RiListUnordered fill={color} className="icon" />
  //   </div>
  // );
}
