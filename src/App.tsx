import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import './styles/pages/HomePage.css';

import HomePage from './pages/HomePage';
import FollowingPage from './pages/FollowingPage';
import SearchPage from './pages/SearchPage';
import MyPage from './pages/mypage/MyPage';
import WishPage from './pages/WishPage';
import UploadShortFormPage from './pages/UploadShortFormPage';
import LoginPage from './Login/page/LoginPage';
import { Auth } from './Login/Auth';
import RenderingPage from './pages/RenderingPage';
import { INavProps } from './globalType';
import ProfileSettingPage from './pages/mypage/ProfileSettingPage';
import SignUpPage from "./pages/SignUpPage";
// import UserProfileSetting from './User/UserProfileSetting';
// import { Modal, CommentModal } from "./components/Modal";

declare global {
  interface Window {
    Kakao: any;
  }
}

const defaultINavProps: INavProps = {
  top: true,
  vertical: true,
  bottom: true,
  color: 'black',
};

function App() {
  const [navProps, setNavProps] = useState<INavProps>(defaultINavProps);

  return (
    <>
      <Routes>
        <Route path="/" element={<RenderingPage />}>
          Rendering Page
        </Route>
        <Route path="/signup" element={<SignUpPage />}>
          SignUp Page
        </Route>
        <Route path="/home" element={<HomePage />}>
          Home
        </Route>
        <Route path="/following" element={<FollowingPage />}>
          Following
        </Route>
        <Route path="/search" element={<SearchPage />}>
          Search
        </Route>
        <Route path="/mypage" element={<MyPage />}>
          MyPage
        </Route>
        <Route path="/wish" element={<WishPage />}>
          WishPage
        </Route>
        <Route path="/upload" element={<UploadShortFormPage />}>
          UploadShortFormPage
        </Route>
        <Route path="/login" element={<LoginPage />}>
          LoginPage
        </Route>
        <Route path="/auth/kakao/callback" element={<Auth />}>
          Auth
        </Route>
        {/* // TODO test ??? */}
        {/* <Route path={'/test'} element={<Modal />}>
          test
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
