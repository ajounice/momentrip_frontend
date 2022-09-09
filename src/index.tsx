import './input.css';
import React from 'react';
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
import LoginPage from './Login/page/LoginPage';
import { Auth } from './Login/Auth';
import TopNavigation from './components/Navigation/Navigation';
import { PrivateRoute } from './components/WithProtected.route';
import Profile from './pages/Profile';
import SettingPage from './pages/mypage/SettingPage';
import ProfileSettingPage from './pages/mypage/ProfileSettingPage';

const root = ReactDOM.createRoot(
  // eslint-disable-next-line no-undef
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TopNavigation />
      <Routes>
        <Route path="/" element={<App />}>
          Rendering Page
        </Route>
        <Route path="/auth/kakao/callback" element={<Auth />} />

        {/* required login */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />

          <Route path="/following" element={<FollowingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/profile-setting" element={<ProfileSettingPage />} />
          <Route path="/mypage/setting" element={<SettingPage />} />
          <Route path="/wish" element={<WishPage />} />
          <Route path="/upload" element={<UploadShortFormPage />} />
          <Route path="/alarm" element={<AlarmPage />} />
          <Route path="/profile" element={<Profile />} />

          {/* required admin */}
          <Route path="/com-avatar" element={<ComAvatar />} />
          <Route path="/com-innertab" element={<ComInnerTab />} />
          <Route path="/com-input" element={<ComInput />} />
          <Route path="/com-sf" element={<ComSF />} />
          <Route path="/com-modal" element={<ComModal />} />
          <Route path="/*" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/*<BottomNavigation color={'white'}/>*/}
  </React.StrictMode>,
);

// reportWebVitals();
