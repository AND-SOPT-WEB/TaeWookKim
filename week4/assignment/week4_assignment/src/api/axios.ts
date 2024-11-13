import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

export const checkingInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

// user token을 추가하여 request한다
checkingInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('user');
    if (token) {
      config.headers['token'] = `${token}`; // 토큰이 있는 경우 요청 헤더에 추가
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
