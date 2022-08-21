import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import FollowingPage from './pages/FollowingPage';
import SearchPage from './pages/SearchPage';
import MyPage from './pages/MyPage';
import WishPage from './pages/WishPage';
import UploadShortFormPage from './pages/UploadShortFormPage';
import LoginPage from './pages/LoginPage';
import { BottomNavigation, TopNavigation } from './components/common/Navigation';

const root = ReactDOM.createRoot(
  // eslint-disable-next-line no-undef
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <TopNavigation />
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
      </Routes>
    </BrowserRouter>
    <BottomNavigation />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
