import axios from "axios";
import { baseUrl } from "../constants/serverConstants";
import { getAccessToken } from "../utils/localstorage-utils";
const token = getAccessToken();

export const postComment = async (comment: any) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const result = await axios.post(
    `${baseUrl}/api/v1/comment/new`,
    comment,
    config
  );
  return result.data;
};
