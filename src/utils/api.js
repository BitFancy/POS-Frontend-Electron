import axios from 'axios';

// Create an instance of axios

export const api = axios.create({
  baseURL: 'https://restaurant-pos-service.onrender.com/api',
  // baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
    // 'x-auth-token': localStorage.getItem('token'),
  },
});

export const setAuthToken = (token) => {
  if (token) {
    // console.log(token, 'thisis setauthtoken');
    api.defaults.headers.common['x-auth-token'] = token;
    localStorage.setItem('token', token);
    // } else {9
    //   delete api.defaults.headers.common['x-auth-token'];
    //   localStorage.removeItem('token');
  }
};
/*
  NOTE: intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
*/

// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err.response.status === 401) {
//       window.localStorage.clear();
//     }
//     return Promise.reject(err);
//   }
// );
