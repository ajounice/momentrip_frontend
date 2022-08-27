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
        <Route path="/" element={<App />}>Rendering Page</Route>
        <Route path="/home" element={<HomePage />}>Home</Route>
        <Route path="/following" element={<FollowingPage />}>Following</Route>
        <Route path="/search" element={<SearchPage />}>Search</Route>
        <Route path="/mypage" element={<MyPage />}>MyPage</Route>
        <Route path="/wish" element={<WishPage />}>WishPage</Route>
        <Route path="/upload" element={<UploadShortFormPage />}>UploadShortFormPage</Route>
        <Route path="/login" element={<LoginPage />}>LoginPage</Route>
        <Route path="/auth/kakao/callback" element={<Auth />}>Auth</Route>
      </Routes>
    </BrowserRouter>
    <BottomNavigation />
  </React.StrictMode>,
);

// reportWebVitals();
