import React, { useEffect, useState } from 'react';
import '../../styles/pages/mypage/ProfileSetting.css';
import { TopBar } from '../../components/common/Navigation';
import Avatar from '../../components/common/Avatar';
import Input from '../../components/common/Input';
import axios from 'axios';
import { MyInfo } from './MyPage';
import BasicModal from '../../components/common/BasicModal';

interface profileInfo {
  name: string;
  nickname: string;
  intro: string;
}

const ProfileSettingPage = () => {
  const [profileImgSrc, setProfileImgSrc] = useState('');
  const [profileImgData, setProfileImgData] = useState('');
  const [modiInfo, setModiInfo] = useState<profileInfo>({
    nickname: '',
    name: '',
    intro: '',
  });
  const [okModalMessage, setOkModalMessage] = useState("준비중인 기능입니다.");
  const [okModalOpen, setOkModalOpen] = useState(false);

  const [mount, setMount] = useState(0);
  const [accessToken, setAccessToken] = useState<string | null>();
  const [myInfo, setMyIfo] = useState<MyInfo>({
    myBadgeList: [],
    id: 0,
    email: '',
    nickname: '',
    password: null,
    name: '',
    intro: '',
    type: false,
    image: '',
  });

  useEffect(() => {
    if (mount === 0) {
      setAccessToken(window.localStorage.getItem('Token'));
      setMount(1);
    } else {
      console.log(mount);
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/my`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setMyIfo(res.data);
            setModiInfo({
              name: res.data.name,
              nickname: res.data.nickname,
              intro: res.data.intro,
            });
            setProfileImgSrc(res.data.image);
          }
        });
    }
  }, [mount]);

  const onClickProfileSetting = () => {
    const data = {};

    if (myInfo.name !== modiInfo.name) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      data.name = modiInfo.name;
    }

    if (myInfo.nickname !== modiInfo.nickname) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      data.nickname = modiInfo.nickname;
    }

    if (myInfo.intro !== modiInfo.intro) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      data.intro = modiInfo.intro;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (data.length !== 0 && profileImgData === '') {
      axios
        .patch(`${process.env.REACT_APP_API_URL}/users/my/edit/update`, data, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          alert('프로필 수정 성공');
          window.location.assign('/mypage');
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (profileImgData !== '' && Object.keys(data).length === 0) {
      const form_data = new FormData();
      form_data.append('profile_image', profileImgData);
      axios
        .patch(`${process.env.REACT_APP_API_URL}/users/my/edit/image`, form_data, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          alert('프로필 사진 변경 성공');
          window.location.assign('/mypage');
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const form_data = new FormData();
      form_data.append('profile_image', profileImgData);
      axios
        .patch(`${process.env.REACT_APP_API_URL}/users/my/edit/image`, form_data, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(() => {
          axios
            .patch(`${process.env.REACT_APP_API_URL}/users/my/edit/update`, data, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            })
            .then(() => {
              alert('프로필 수정 성공');
              window.location.assign('/mypage');
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // 프로필 사진 이미지 변경
  const onChangeProfile = (e: any) => {
    if (e.target.files.length > 0) {
      const objectUrl = URL.createObjectURL(e.target.files[0]);
      setProfileImgSrc(objectUrl);
      setProfileImgData(e.target.files[0]);

      return () => URL.revokeObjectURL(objectUrl);
    }
    setProfileImgSrc('/images/defaultImg.png');

    setProfileImgData(e.target.files[0]);
  };


  return (
    <div className={'profile-setting-page-container'}>
      <div className={'profile-setting-page-top-bar-container'}>
        <TopBar
          beforeButton={true}
          centerText={''}
          centerTextType={'page'}
          checkButton={true}
          checkButtonOnClickEvent={onClickProfileSetting}
        />
      </div>

      <div className={'profile-setting-page-inner-container'}>
        <div className={'profile-setting-image-container'}>
          <div className={'profile-setting-img'}>
            <label htmlFor={'file-upload'}>
              <Avatar size={'lg'} src={profileImgSrc === '' ? '/img/profile_default.png' : profileImgSrc} />
              <input id="file-upload" style={{ display: 'none' }} type="file" onChange={onChangeProfile} />
              프로필 사진 변경
            </label>
          </div>
        </div>

        <div className={'profile-setting-user-ingo-container'}>
          {/*
              TODO :: register 적용해야함
              https://react-hook-form.com/api/useform/register
            */}
          {/* 아이디 10자 이하 첫글자 무조건 알파벳, 특수문자 포함 가*/}
          <Input
            onChangeEventHandler={(e) => {
              setModiInfo({
                ...modiInfo,
                nickname: e.currentTarget.value,
              });
            }}
            defaultValue={myInfo.nickname}
            label={'아이디'}
            type={'text'}
            id={'id'}
            disabled={false}
            placeholder={'텍스트를 입력해주세요.'}
          />
          {/* 특수문자 사용가능 */}
          <Input
            onChangeEventHandler={(e) => {
              setModiInfo({
                ...modiInfo,
                name: e.currentTarget.value,
              });
            }}
            defaultValue={myInfo.name}
            label={'이름'}
            type={'text'}
            id={'name'}
            disabled={false}
            placeholder={'텍스트를 입력해주세요.'}
          />
          {/**/}
          <Input
            onChangeEventHandler={(e) => {
              setModiInfo({
                ...modiInfo,
                intro: e.currentTarget.value,
              });
            }}
            defaultValue={myInfo.intro}
            label={'소개'}
            type={'text'}
            id={'introduction'}
            disabled={false}
            placeholder={'텍스트를 입력해주세요.'}
          />
          <button className={'business-account-change'} onClick={()=>{setOkModalMessage("준비중인 기능입니다."); setOkModalOpen(true);}}>비즈니스 계정으로 전환</button>
        </div>
      </div>
      <BasicModal
        open={okModalOpen}
        setOpen={() => setOkModalOpen(false)}
        title={okModalMessage}
        type="alert"
        ok="닫기"
      ></BasicModal>
    </div>
  );
};

export default ProfileSettingPage;
