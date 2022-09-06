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
import MyPage from './pages/MyPage';
import WishPage from './pages/WishPage';
import ComAvatar from './pages/components/ComAvatar';
import ComInnerTab from './pages/components/ComInnerTab';
import ComSF from './pages/components/ComSF';
import ComInput from './pages/components/ComInput';
import UploadShortFormPage from './pages/UploadShortFormPage';
import LoginPage from './Login/page/LoginPage';
import { BottomNavigation } from './components/common/Navigation';
import { Auth } from './Login/Auth';

const root = ReactDOM.createRoot(
  // eslint-disable-next-line no-undef
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          Rendering Page
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
          callback
        </Route>
        <Route path="/com-avatar" element={<ComAvatar />}>
          avatar
        </Route>
        <Route path="/com-innertab" element={<ComInnerTab />}>
          innertab
        </Route>
        <Route path="/com-input" element={<ComInput />}>
          input
        </Route>
        <Route path="/com-sf" element={<ComSF />}>
          input
        </Route>
      </Routes>
    </BrowserRouter>
    {/*<BottomNavigation color={'white'}/>*/}
  </React.StrictMode>,
);

// reportWebVitals();
