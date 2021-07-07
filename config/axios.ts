import axios from "axios";
// cookie
import cookie from "js-cookie";
// constants
import { BASE_STAGING, BASE_LOCAL, BASE_PROD } from "@constants/routes";

// if (process.env.APP_ENV === "production") {
//   axios.defaults.baseURL = BASE_PROD;
// } else if (process.env.APP_ENV === "staging") {
//   axios.defaults.baseURL = BASE_STAGING;
// } else {
//   axios.defaults.baseURL = BASE_LOCAL;
// }

axios.defaults.baseURL = BASE_PROD;

export function setAxiosHeader(token: string) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Token " + token;
  } else {
    axios.defaults.headers.common["Authorization"] = "";
  }
}

(function () {
  const tokenDetails: any = cookie.get("token_details");
  if (tokenDetails) {
    const token = JSON.parse(tokenDetails);
    if (token) {
      axios.defaults.headers.common.Authorization = `JWT ${token.access_token}`;
    } else {
      axios.defaults.headers.common.Authorization = "";
    }
  }
})();
