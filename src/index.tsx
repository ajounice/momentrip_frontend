import './input.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter} from 'react-router-dom';
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
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>

);

// reportWebVitals();
