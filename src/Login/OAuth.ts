import { SERVER_API } from "../config";

const REST_API_KEY = '9c3b763915836894e84e16dd28fac929';
const REDIRECT_URI = `${SERVER_API}/auth/kakao/callback`;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const KAKAO_API_KEY= 'c070df5c303af0bac8cde1b0cfe1a5b3';

export { KAKAO_AUTH_URL , REST_API_KEY,KAKAO_API_KEY  };
