import axios from "axios";
// api routes
import { AUTH_LOGIN, AUTH_SIGNUP } from "@constants/routes";

export const LogIn = async (data: any) => {
  try {
    const response = await axios.post(AUTH_LOGIN, data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const SignUp = async (data: any) => {
  try {
    const response = await axios.post(AUTH_SIGNUP, data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
