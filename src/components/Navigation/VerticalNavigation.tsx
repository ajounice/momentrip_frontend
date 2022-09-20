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
import axios from 'axios';
import Button from '../Button/Button';
import BasicModal from '../common/BasicModal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CustomModal from '../common/CustomModal';
import SquareSF from '../ShortForm/SquareSF';
import ModalPage from '../common/ModalPage';
import Input from '../common/Input';
import { SERVER_API } from '../../config';
import { useForm } from 'react-hook-form';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
export default function VerticalNavigation({
  setViewTourInfo,
  setViewComment,
  setIsHeart,
  isHeart,
  setCurrentSfId,
  isBookMark,
  setIsBookMark,
  setCommentData,
  currentVideoIndex = 0,
  shortFormId = 0,
}: IVerticalNavigation) {
  // Props
  // 해당 숏폼을 좋아요 눌렀는지
  // 해당 숏폼에 대한 정보
  // 해당 숏폼에 달린 댓글 정보

  const [shareModalOpen, setShareModalOpen] = useState(false);
  const onClickShare = () => {
    setShareModalOpen(true);
  };
  const {
    register,
    watch,
    setValue,
    formState: { errors, isSubmitted },
    getValues,
    handleSubmit,
  } = useForm({});
  const [accessToken, setAccessToken] = useState<string | null>();
  const [addFolderOpen, setAddFolderOpen] = useState(false);
  const instance = axios.create({
    baseURL: 'http://test.heroforyou.space/api',
    timeout: 3000,
  });

  useEffect(() => {
    setCurrentSfId(shortFormId);
  }, []);

  useEffect(() => {
    console.log();
  }, [isHeart]);

  // TODO 수정 필요
  const onClickHeart = () => {
    // instance
    axios({
      method: 'post',
      url: `${SERVER_API}/forms/${shortFormId}/like`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        if (res.status === 201) {
          setIsHeart((prev) => !prev);
        }
      })
      .catch(() => {
        alert('server error');
      });
  };

  interface IWish {
    id: number;
    name: string;
    wishlists: [];
  }
  const [wishlist, setWishlist] = useState<IWish[]>();
  // const [wishlist, setWishlist] = useState(['호텔', '바다', '부산여행', '아무거나']);
  // eslint-disable-next-line @typescript-eslint/no-var-requires


  // TODO wish api
  // useEffect(() => {
  //   async function getWishs() {
  //     try {
  //       const response = await instance.get('/wishlists', {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });
  //
  //       if (response.status === 200) {
  //         setWishlist(response.data);
  //       }
  //       return null;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getWishs();
  // }, [accessToken]);

  const onClickComment = () => {
    // instance
    //   .get(`{SERVER_URL}/forms/{form_id}/comments`)
    //   .then((res) => {
    //     if (res.status === 200) {
    //       setCommentData(res.data.data);
    //     }
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });
    setViewComment((prev) => !prev);
  };

  const onClickInfo = () => {
    setViewTourInfo((prev) => !prev);
  };

  const clickCopy = () => {
    setShareModalOpen(false);
    setOkModalOpen(true);
    setOkModalMessage('복사가 완료되었습니다');
  };

  async function clickWish(folderId: number, formId: number) {
    setBookmarkModalOpen(false);
    await instance
      .post(
        `${SERVER_API}/wishlists/${folderId}`,
        {
          type: 'FORM',
          targetId: formId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      .then(() => {
        console.log();
      })
      .catch((err) => {
        console.log(err);
      });

    // location.reload();
  }
  const navigation = useNavigate();
  const getShareLink = () => {
    // TODO 링크 불러오도록 수정
    const ShortFormId = 1;
    return 'http://test.heroforyou.space/?shareId=' + ShortFormId;
  };

  function firstWishRequest() {
    const name = document.getElementById('folderName');
    // TODO 서버에 폴더 추가 요청 후 새로고침
    // TODO 해당 폴더에 위시 추가


    setAddFolderOpen(false);
  }

  const [isCopy, setIsCopy] = useState(false);
  const [okModalOpen, setOkModalOpen] = useState(false);
  const [okModalMessage, setOkModalMessage] = useState('완료되었습니다');
  const [bookmarkModalOpen, setBookmarkModalOpen] = useState(false);

  useEffect(() => {
    console.log();
  }, [isHeart]);

  const colorItems = [
    'bg-stone-600',
    'bg-red-600',
    'bg-orange-600',
    'bg-amber-600',
    'bg-yellow-600',
    'bg-lime-600',
    'bg-green-600',
    'bg-emerald-600',
    'bg-teal-600',
    'bg-cyan-600',
    'bg-sky-600',
    'bg-blue-600',
    'bg-indigo-600',
    'bg-violet-600',
    'bg-purple-600',
    'bg-fuchsia-600',
    'bg-pink-600',
    'bg-fuchsia-600',
    'bg-pink-600',
    'bg-rose-600',
  ];
  function randomColor() {
    return colorItems[Math.floor(Math.random() * colorItems.length)];
  }

  async function addFolderRequest() {
    await instance
      .post(
        `${SERVER_API}/wishlists/new`,
        {
          name: watch('wishFolderName'),
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      .then((res) => {
        console.log();
      })
      .catch((err) => {
        console.log(err);
      });
    location.reload();
  }
  useEffect(() => {
    setAccessToken(window.localStorage.getItem('Token'));
  }, []);

  return (
    <>
      <section className={'vertical-navigation-container'}>
        {isHeart ? (
          <RiHeart3Fill color={'white'} onClick={onClickHeart} className={'icon'} />
        ) : (
          <RiHeart3Line color={'white'} onClick={onClickHeart} className={'icon'} />
        )}
        {/* {isBookMark ? (
          <RiBookmarkFill
            color={'white'}
            className={'icon'}
            onClick={() => {
              // setIsBookMark(false);
            }}
          />
        ) : (
          <RiBookmarkLine
            color={'white'}
            className={'icon'}
            onClick={() => {
              // setIsBookMark(true);
              setBookmarkModalOpen(true);
            }}
          />
        )} */}
        <RiBookmarkLine
          color={'white'}
          className={'icon'}
          onClick={() => {
            // setIsBookMark(true);
            wishlist !== undefined ? setBookmarkModalOpen(true) : setAddFolderOpen(true);
          }}
        />
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
        open={okModalOpen}
        setOpen={() => setOkModalOpen(false)}
        title={okModalMessage}
        type="alert"
        ok="닫기"
      ></BasicModal>
      <CustomModal open={bookmarkModalOpen} setOpen={setBookmarkModalOpen} title="위시리스트 저장">
        <>
          <ul role="list" className="mt-3 grid grid-cols-2 gap-5">
            {wishlist?.map((data, i) => (
              <li key={i} className="col-span-1 flex rounded-md shadow-md">
                <div
                  className={classNames(
                    randomColor(),
                    'flex-shrink-0 flex items-center justify-center w-10 text-white text-sm font-medium rounded-l-md',
                  )}
                >
                  {data.name[0]}
                </div>
                <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-300 bg-white">
                  <div className="flex-1 truncate px-2 py-2 text-sm">
                    <button
                      className="font-medium text-gray-900 hover:text-gray-600"
                      onClick={() => clickWish(data.id, shortFormId)}
                    >
                      {data.name}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      </CustomModal>
      <ModalPage open={addFolderOpen} setOpen={setAddFolderOpen} size="mini" title="폴더 추가">
        <div className="my-8">
          <Input
            label="폴더 이름"
            type="text"
            id="folderName"
            disabled={false}
            placeholder="폴더 이름을 입력하세요"
            register={register('wishFolderName')}
          ></Input>
          <div className="my-2">
            <Button title="확인" handleClick={addFolderRequest}></Button>
          </div>
        </div>
      </ModalPage>
      {/* </div> */}
    </>
  );
}
