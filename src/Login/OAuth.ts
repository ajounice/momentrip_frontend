const REST_API_KEY = '';
const REDIRECT_URI = 'http://localhost:3000/auth/kakao/callback';
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const KAKAO_API_KEY= '';

export { KAKAO_AUTH_URL , REST_API_KEY,KAKAO_API_KEY  };
