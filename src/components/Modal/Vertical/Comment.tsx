import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import '../../../styles/components/Modal/Vertical/Comment.css';
import { RiCloseFill } from 'react-icons/ri';
import { CommentType } from '../../../globalType';
import { IUserInfoInSF } from '../../common/ProfileInSF';
import axios from 'axios';
import { userInfo } from 'os';

interface ICommentItem {
  currentUser: number;
  name: string;
  comment: string;
  // date : string;
  userId: number;
  imagePath: string;
  commentId: number;
  token: string | null;
  setRefresh: Dispatch<SetStateAction<boolean>>;
}

// 댓글 아이템
function CommentItem({ setRefresh, token, currentUser, commentId, name, comment, userId, imagePath }: ICommentItem) {
  const [mount, setMount] = useState(0);
  const [me, setME] = useState({
    id: 0,
    email: '',
    nickname: '',
    password: null,
    name: '',
    intro: '',
    type: false,
    image: '',
  });

  const onClickDelete = (e: any) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/forms/comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setRefresh((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={'comment-item-outer-container'}>
      <div className={'comment-item-inner-container'}>
        <div className={'comment-item-left'}>
          <div
            onClick={() => {
              if (me.nickname === name) {
                window.location.assign(`/mypage`);
              } else {
                window.location.assign(`/profile/${name}`);
              }
            }}
            className={'comment-item-img-container'}
          >
            <img
              className={'comment-item-img'}
              src={imagePath === null ? '/img/profile_default.png' : imagePath}
              alt={'user profile'}
            />
          </div>
          <div className={'comment-item-text-container'}>
            <div className={'comment-item-name-n-date-container'}>
              <span>{name}</span>
              {/*<span>{date}</span>*/}
            </div>
            <div className={'comment-item-comment-container'}>
              <span>{comment}</span>
            </div>
          </div>
        </div>

        {currentUser === userId ? (
          <div className={'comment-item-my-comment'}>
            {/*<span className={'comment-item-modify'}>수정</span>*/}
            <span onClick={onClickDelete} className={'comment-item-delete'}>
              삭제
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

interface IComment {
  setViewComment: Dispatch<SetStateAction<boolean>>;
  commentList: CommentType[][];
  user: IUserInfoInSF;
  shortFormId: number;
}

interface ICommentItemList {
  id: number;
  content: string;
  user: IUserInfoInSF;
  form: {
    id: number;
    content: string;
    title: null | string;
    thumbnail: string;
    video: string;
    viewCount: number;
  };
}

export interface IUserInfoInCM {
  email: string;
  id: number;
  image: string;
  intro: string;
  name: string;
  nickname: string;
  password: string;
  type: boolean;
  badgeList: any[]; // users/my response에 맞춰서 추가 하기 위해 수정
  forms: any[]; // users/my response에 맞춰서 추가 하기 위해 수정
}

function Comment({ setViewComment, commentList, user, shortFormId }: IComment) {
  const [comment, setComment] = useState<string>('');
  const [refresh, setRefresh] = useState(false);

  const [comList, setComList] = useState<CommentType[] | null>([
    {
      id : 1,
      content : "감사합니당 !😊",
      user : {
        email: "string",
        id: 1,
        image: "/img/profile.png",
        intro: "string",
        name: "수연",
        nickname: "수연",
        password: "string",
        type: true
      }
    },
    {
      id : 2,
      content : "송도 케이블카 뷰가 짱 👍",
      user : {
        email: "string",
        id: 1,
        image: "/img/profile2.png",
        intro: "string",
        name: "바다냥이",
        nickname: "바다냥이",
        password: "string",
        type: true
      }
    },
    {
      id : 0,
      content : "바다가 반짝거려요 🐬",
      user : {
        email: "string",
        id: 1,
        image: "/img/profile3.png",
        intro: "string",
        name: "햄츄",
        nickname: "햄츄",
        password: "string",
        type: true
      }
    },
  ]);

  const inputRef = useRef(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<IUserInfoInCM>({
    email: '',
    id: 0,
    image: '',
    intro: '',
    name: '',
    nickname: '',
    password: '',
    type: false,
    badgeList: [],
    forms: [],
  });

  useEffect(() => {
    setAccessToken(window.localStorage.getItem('Token'));
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/my`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        setCurrentUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [accessToken]);

  // useEffect(() => {
  //   axios({
  //     method: 'get',
  //     url: `${process.env.REACT_APP_API_URL}/forms/${shortFormId}/comments`,
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   })
  //     .then((res) => {
  //       if (res.status === 200) {
  //         setComList(res.data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [accessToken, refresh]);

  const addCommentEvent = (e: React.KeyboardEvent) => {
    // 최신순 정렬로 보여줄 것

    if (e.key === 'Enter') {
      // 나중에 사용할 예정

      //   axios({
      //     method: 'post',
      //     url: `${process.env.REACT_APP_API_URL}/forms/${shortFormId}/comments`,
      //     headers: {
      //       Authorization: `Bearer ${accessToken}`,
      //     },
      //     data: {
      //       content: comment,
      //     },
      //   })
      //     .then(() => {
      //       // setComList(res.data);
      //       setRefresh((prev) => !prev);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      //
      //   if (inputRef !== null) {
      //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //     // @ts-ignore
      //     document.getElementById('commentInput').value = '';
      //   }
      // }
    }


  return (
    <div className={'comment-modal-container'}>
      <div className={'comment-modal-top-nav'}>
        <span className={'comment-modal-top-nav-text'}>댓글</span>
        <span className={'comment-modal-top-nav-text'}>{comList === null ? 0 : comList.length}</span>

        <div
          className={'comment-modal-close-icon-container'}
          onClick={() => {
            setViewComment(false);
          }}
        >
          <RiCloseFill className={'close-icon'} size={30} />
        </div>
      </div>
      <div className={'comment-item-list-outer-container'}>
        <div className={'comment-item-list-inner-container'}>
          <div className={'comment-item-register-comment-container'}>
            <div className={'comment-item-img-container'}>
              {/* user default img 변경 */}
              <img
                className={'comment-item-img'}
                src={
                  currentUser && currentUser.image !== null ? currentUser.image : '/img/profile_default.png'
                }
                alt={'user profile'}
              />
            </div>
            <div className={'comment-item-text-container'}>
              <div className={'comment-item-comment-container'}>
                <input
                  id={'commentInput'}
                  ref={inputRef}
                  onKeyPress={addCommentEvent}
                  onChange={(e) => {
                    setComment(e.currentTarget.value);
                  }}
                  className={'comment-modal-input'}
                  placeholder={'댓글 추가...'}
                />
              </div>
            </div>
          </div>
          <div>
            {comList !== null
              ? comList.map((item) => {
                // commentList.map((item)=>{
                return (
                  <CommentItem
                    setRefresh={setRefresh}
                    token={accessToken}
                    commentId={item.id}
                    currentUser={currentUser.id}
                    name={item.user.nickname}
                    comment={item.content}
                    userId={item.user.id}
                    imagePath={item.user.image}
                  />
                );
              })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
