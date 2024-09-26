// import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// // Define token types
// type Tokens = {
//   accessToken: string;
//   refreshToken: string;
// };

// // Base Axios instance
// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_URL, // Replace with your API's base URL
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Helper to get tokens from localStorage
// const getAccessToken = (): string | null => localStorage.getItem('accessToken');
// const getRefreshToken = (): string | null => localStorage.getItem('refreshToken');

// // Helper to set tokens in localStorage
// const setAccessToken = (token: string): void => localStorage.setItem('accessToken', token);
// const setRefreshToken = (token: string): void => localStorage.setItem('refreshToken', token);

// // Request Interceptor: Attach access token to request headers
// axiosInstance.interceptors.request.use(
//   (config: AxiosRequestConfig) => {
//     const token = getAccessToken();
//     if (token) {
//       config.headers = {
//         ...config.headers,
//         Authorization: `Bearer ${token}`,
//       };
//     }
//     return config;
//   },
//   (error: AxiosError) => {
//     return Promise.reject(error);
//   }
// );

// // Response Interceptor: Handle expired token and retry with refreshed token
// axiosInstance.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response; // Just return the response if everything is OK
//   },
//   async (error: AxiosError) => {
//     const originalRequest = error.config;

//     // If the error response is 401 (Unauthorized), handle token refresh
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       const refreshToken = getRefreshToken();
//       if (!refreshToken) {
//         // Optionally: Handle logout or redirect to login
//         return Promise.reject(error);
//       }

//       try {
//         // Make a request to refresh the access token
//         const response = await axios.post<Tokens>('https://your-api.com/api/auth/refresh', {
//           refreshToken: refreshToken,
//         });

//         const { accessToken, refreshToken: newRefreshToken } = response.data;

//         // Update tokens in localStorage
//         setAccessToken(accessToken);
//         setRefreshToken(newRefreshToken);

//         // Update the Authorization header in the original request with the new token
//         if (originalRequest.headers) {
//           originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
//         }

//         // Retry the original request with the new access token
//         return axiosInstance(originalRequest);
//       } catch (err) {
//         // Optionally: Handle logout or redirect to login
//         return Promise.reject(err);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
