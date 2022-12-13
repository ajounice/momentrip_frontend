import './input.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import FollowingPage from './pages/FollowingPage';
import SearchPage from './pages/SearchPage';
import MyPage from './pages/mypage/MyPage';
import WishPage from './pages/WishPage';
import AlarmPage from './pages/AlarmPage';
import ComAvatar from './pages/components/ComAvatar';
import ComInnerTab from './pages/components/ComInnerTab';
import ComSF from './pages/components/ComSF';
import ComInput from './pages/components/ComInput';
import ComModal from './pages/components/ComModal';
import UploadShortFormPage from './pages/UploadShortFormPage';
import { Auth } from './Login/Auth';
import TopNavigation from './components/Navigation/Navigation';
import { PrivateRoute } from './components/WithProtected.route';
import Profile from './pages/Profile';
import SettingPage from './pages/mypage/SettingPage';
import ProfileSettingPage from './pages/mypage/ProfileSettingPage';
import TourInfoPage from './pages/TourInfoInfo';
import AdditionalInfo from './pages/mypage/AdditionalInfo';
import FollowPage from './pages/mypage/FollowPage';
import WishForm from './pages/wish/WishForm';
import WishTour from './pages/wish/WishTour';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './Login/page/LoginPage';
import RenderingPage from './pages/RenderingPage';
import ChangePasswordPage from './pages/mypage/ChangePasswordPage';

const root = ReactDOM.createRoot(
  // eslint-disable-next-line no-undef
  document.getElementById('root') as HTMLElement,
);

// const [accessToken, setAccessToken] = useState<string | null>();
// useEffect(() => {

// }, []);

declare global {
  interface Window {
    kakao: any;
  }
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TopNavigation />
      <Routes>
        <Route path="/" element={<RenderingPage />}></Route>
        <Route path="/auth/kakao/callback" element={<Auth />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />}></Route>
        {/* required login */}
        <Route path="/" element={<PrivateRoute isAuth={window.localStorage.getItem('Token') ? true : false} />}>
          <Route path="/home" element={<HomePage />} />

          <Route path="/following" element={<FollowingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/profile-setting" element={<ProfileSettingPage />} />
          <Route path="/mypage/setting" element={<SettingPage />} />
          <Route path="/mypage/setting/password" element={<ChangePasswordPage />} />
          <Route path="/mypage/follow" element={<FollowPage />} />
          <Route path="/wish" element={<WishPage />} />
          <Route path="/upload" element={<UploadShortFormPage />} />
          <Route path="/add/data" element={<AdditionalInfo />} />
          <Route path="/alarm" element={<AlarmPage />} />
          <Route path="/profile/:nickname" element={<Profile />} />
          <Route path="/tourinfo" element={<TourInfoPage />} />
          <Route path={'/wishlist/:folderId/form/:formId'} element={<WishForm />} />
          <Route path={'/wishlist/:folderId/tour/:formId'} element={<WishTour />} />

          {/* required admin */}
          <Route path="/com-avatar" element={<ComAvatar />} />
          <Route path="/com-innertab" element={<ComInnerTab />} />
          <Route path="/com-input" element={<ComInput />} />
          <Route path="/com-sf" element={<ComSF />} />
          <Route path="/com-modal" element={<ComModal />} />
          {/* <Route path="/*" element={<App />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    {/*<BottomNavigation color={'white'}/>*/}
  </React.StrictMode>,
);

// reportWebVitals();
