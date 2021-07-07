// next imports
import router from "next/router";

// cookie
import {
  getAuthenticationToken,
  removeAuthenticationToken,
  setAuthenticationToken,
} from "@lib/cookie";

// get current user details
export const getCurrentUser = () => {
  let tokenDetails: any = getAuthenticationToken();
  if (tokenDetails) {
    tokenDetails = tokenDetails ? JSON.parse(tokenDetails) : null;
    if (tokenDetails && tokenDetails.user) return tokenDetails.user;
  }
  return;
};

export const updateOnboardCookie = (payload: any) => {
  let tokenDetails: any = getAuthenticationToken();
  if (tokenDetails) {
    tokenDetails = tokenDetails ? JSON.parse(tokenDetails) : null;
    if (tokenDetails && tokenDetails.user) {
      removeAuthenticationToken();
      tokenDetails.user.onboard = payload.onboard;
      tokenDetails.user.onboard_daa = payload.onboard_daa;
      setAuthenticationToken(tokenDetails);
      router.push("admin/dashboard");
    }
  }
};
