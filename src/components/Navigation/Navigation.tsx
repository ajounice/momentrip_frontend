import React, { MouseEventHandler, useEffect, useState } from 'react';
import '../../styles/components/common/Navigation.css';
import { useNavigate } from 'react-router-dom';

import { RiNotification2Line, RiRegisteredFill } from 'react-icons/ri';
import { RiInboxArchiveLine, RiUser3Line, RiHomeHeartLine, RiVideoAddLine } from 'react-icons/ri';
import { TopBar } from '../common/Navigation';
import CustomModal from '../common/CustomModal';
import ModalPage from '../common/ModalPage';
import AlarmCard from '../Card/AlarmCard';

import Input from '../common/Input';
import Button from '../Button/Button';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import AlarmPage from "../../pages/AlarmPage";
const defaultCurrent = {
  home: true,
  search: false,
  following: false,
  alarmColor: 'white',
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const mockAlarmData = [
  {
    'type': '⭐️',
    'date': '12분 전',
    'content': '채옹님이 팔로우 하였습니다.',
  },
  {
    'type': '❤️',
    'date': '20분 전',
    'content': '채옹님이 게시물을 좋아합니다.',
  },
  {
    'type': '❤️',
    'date': '25분 전',
    'content': '치즈님이 게시물을 좋아합니다.',
  },
  {
    'type': '❤️',
    'date': '1시간 전',
    'content': '인주님이 게시물을 좋아합니다.',
  }
];

export default function TopNavigation({ color = 'white' }) {
  const [selected, setSelected] = useState({ text: '홈', color: 'white' });
  const [paramId, setParamId] = useState('');
  const {
    register,
    watch,
    setValue,
    formState: { errors, isSubmitted },
    getValues,
    handleSubmit,
  } = useForm({});
  const [path, setPath] = useState<string>('');
  const [accessToken, setAccessToken] = useState<string | null>();
  const [addFolderOpen, setAddFolderOpen] = useState(false);
  async function addFolderRequest() {
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/wishlists/new`,
        {
          name: watch('wishFolderName'),
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
    location.reload();
  }
  useEffect(() => {
    setAccessToken(window.localStorage.getItem('Token'));
  }, []);

  const navigation = useNavigate();
  useEffect(() => {
    // console.log(window.location.pathname);
    // console.log(TabNavList.indexOf(window.location.pathname));

    const path = window.location.pathname;
    path === '/'
      ? setSelected({ text: '', color: '' })
      : path === '/search'
      ? setSelected({ text: '검색', color: 'black' })
      : path === '/following'
      ? setSelected({ text: '팔로잉', color: 'black' })
      : path === '/home'
      ? setSelected({ text: '홈', color: 'white' })
      : path === '/wish'
      ? setSelected({ text: '위시리스트', color: 'black' })
      : path === '/mypage'
      ? setSelected({ text: '마이페이지', color: 'black' })
      : path === '/upload'
      ? setSelected({ text: '업로드', color: 'black' })
      : path === '/profile'
      ? setSelected({ text: '프로필', color: 'black' })
      : null;
    const params = new URLSearchParams(location.search).get('id');
    setParamId(params !== null ? params : '');
  }, [window.location.pathname]);

  const userInfo = {
    userName: '',
  };
  const TabNavList = ['/home', '/following', '/search'];
  const noLoginPageList = ['/login', '/'];

  // const [alarmModalOpen, setAlarmModalOpen] = useState(false);
  const [alarmOpen, setAlarmOpen] = useState(false);

  return (
    <>
      {TabNavList.indexOf(window.location.pathname) > -1 ? (
        <div className={selected.color === 'white' ? 'top-nav-container' : 'top-nav-container-bg'}>
          <>
            {/* 알림 아이콘 */}
            <RiNotification2Line fill={selected.color} className="top-icon" onClick={() => setAlarmOpen(true)} />
            <div className={'top-nav-text-container style-home'}>
              {/* 팔로잉 */}
              <button
                className={classNames(
                  selected.text === '팔로잉' ? 'border-gray-900 text-gray-900' : 'border-transparent',
                  selected.color === 'white' ? ' text-white' : 'text-gray-900',
                  'whitespace-nowrap border-b-2 text-md',
                )}
                onClick={() => navigation('/following')}
              >
                팔로잉
              </button>
              {/* 홈 */}
              <button
                className={classNames(
                  selected.text === '홈' ? ' border-white text-white' : 'border-transparent',
                  selected.color === 'white' ? ' text-white' : ' text-gray-900',
                  'whitespace-nowrap border-b-2 text-md',
                )}
                // onClick={(e: any) => setSelected({ text: e.currentTarget.textContent, color: 'white' })}
                onClick={() => navigation('/home')}
              >
                홈
              </button>
              {/* 검색 */}
              <button
                className={classNames(
                  selected.text === '검색' ? 'border-gray-900 text-gray-900' : 'border-transparent',
                  selected.color === 'white' ? 'text-white' : ' text-gray-900',
                  'whitespace-nowrap border-b-2 text-md',
                )}
                onClick={() => navigation('/search')}
              >
                검색
              </button>
            </div>
          </>
        </div>
      ) : window.location.pathname === '/wish' ? (
        window.location.search ? (
          <TopBar
            alarmOnClickEvent={() => setAlarmOpen(true)}
            centerText={''}
            centerTextType={'page'}
            dropdown={'wish'}
            beforeButton={true}
          />
        ) : (
          <TopBar
            alarmOnClickEvent={() => setAlarmOpen(true)}
            centerText={'위시리스트'}
            centerTextType={'page'}
            beforeButton={false}
            plusButton={true}
            plusButtonOnClickEvent={() => {
              setAddFolderOpen(true);
            }}
          />
        )
      ) : window.location.pathname === '/upload' ? (
        <TopBar
          alarmOnClickEvent={() => setAlarmOpen(true)}
          centerText={'업로드'}
          centerTextType={'page'}
          beforeButton={true}
          checkButton={true}
          checkButtonOnClickEvent={() => {
            alert('check');
          }}
        />
      ) : // : window.location.pathname === '/mypage' ? (
      // <TopBar
      //   alarmOnClickEvent={() => setAlarmOpen(true)}
      //   centerText={userInfo.userName}
      //   centerTextType={'user'}
      //   alarm={true}
      //   dropdown={'mypage'}
      //   // dropdownList={['프로필 편집', '개인정보 설정', '설정']}
      // />
      // )
      window.location.pathname === '/profile' ? (
        <TopBar
          alarmOnClickEvent={() => setAlarmOpen(true)}
          centerText={paramId}
          beforeButton={true}
          centerTextType={'user'}
        />
      ) : null}

      {noLoginPageList.indexOf(window.location.pathname) > -1 ? null : (
        <div className={selected.color === 'white' ? 'bottom-nav-container' : 'bottom-nav-container-bgwhite'}>
          {/* 위시 */}
          <RiInboxArchiveLine
            onClick={() => {
              navigation('/wish');
            }}
            fill={selected.color}
            className="icon"
          />
          {/* 홈 & 업로드 */}
          {window.location.pathname === '/home' ? (
            <div className={'upload-button'}>
              <label>
                <RiVideoAddLine
                  onClick={() => {
                    navigation('/upload');
                  }}
                  fill={selected.color}
                  className="icon"
                />
              </label>
              {/* <input accept="video/*" type={'file'} id="upload-file" /> */}
            </div>
          ) : (
            <div className={'upload-button'}>
              <label>
                <RiHomeHeartLine
                  onClick={() => {
                    navigation('/home');
                  }}
                  fill={selected.color}
                  className="icon"
                />
              </label>
            </div>
          )}
          {/* 마이페이지 */}
          <RiUser3Line
            onClick={() => {
              navigation('/mypage');
            }}
            fill={selected.color}
            className="icon"
          />
        </div>
      )}
      {/* 모달 영역 */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* 알림창 */}
        <ModalPage open={alarmOpen} setOpen={setAlarmOpen} size="full" title="알림">
          <>
            {mockAlarmData ? (
                <div className="my-8">
                  {
                    mockAlarmData.map( d => {
                      return <AlarmCard type={d.type} date={d.date} content={d.content} />
                    })
                  }
                </div>
            ) : (
              <div className="text-center mt-56">
                <p className="mt-4 text-gray-900">새로운 알림이 없습니다. 😢</p>
              </div>
            )}
          </>
        </ModalPage>
        {/* wish - add folder */}

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
      </div>
    </>
  );
}
