import axios from "axios";
// api routes
import { ONBOARD_WITH_ID } from "@constants/routes";

export const UpdateUser = async (data: any) => {
  try {
    const response = await axios.put(ONBOARD_WITH_ID(data.id), data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
