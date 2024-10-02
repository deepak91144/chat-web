import axios from "axios";
import { baseUrl } from "../constants/serverConstants";

export const uploadFile = async (file: any) => {
  const result = await axios.post(`${baseUrl}/user/file-upload`, file);
  return result.data;
};
