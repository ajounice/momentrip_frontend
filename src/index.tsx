import './input.css';
import React, { useEffect } from "react";
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
import AdditionalInfo from "./pages/mypage/AdditionalInfo";
import FollowPage from "./pages/mypage/FollowPage";

const root = ReactDOM.createRoot(
  // eslint-disable-next-line no-undef
  document.getElementById('root') as HTMLElement,
);

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
        <Route path="/" element={<App />}>
          Rendering Page
        </Route>
        <Route path="/auth/kakao/callback" element={<Auth />} />
        <Route path="/add/data" element={<AdditionalInfo/>} />

        {/* required login */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />

          <Route path="/following" element={<FollowingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/profile-setting" element={<ProfileSettingPage />} />
          <Route path="/mypage/setting" element={<SettingPage />} />
          <Route path="/mypage/follow" element={<FollowPage />} />
          <Route path="/wish" element={<WishPage />} />
          <Route path="/upload" element={<UploadShortFormPage />} />
          <Route path="/alarm" element={<AlarmPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tourinfo" element={<TourInfoPage />} />

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
