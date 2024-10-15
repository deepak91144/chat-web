import axios from "axios";
import { baseUrl } from "../constants/serverConstants";
import { getAccessToken } from "../utils/localstorage-utils";
const token = getAccessToken();

export const fetchMessages = async (chatId: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const result = await axios.get(`${baseUrl}/api/v1/message/${chatId}`, config);

  return result.data;
};
