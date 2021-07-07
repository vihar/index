// Base URLS
export const BASE_PROD = "https://indexapiserver.herokuapp.com";
export const BASE_STAGING = "https://indexapiserver.herokuapp.com";
export const BASE_LOCAL = "http://127.0.0.1:8000/";

// authentication routes
export const AUTH_LOGIN = `/api/signin/`;
export const AUTH_SIGNUP = `/api/signup/`;

// onboard routes
export const ONBOARD = `/api/users/`;
export const ONBOARD_WITH_ID = (user_id: any) => `/api/users/${user_id}/`;
