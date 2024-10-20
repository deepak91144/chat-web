import axios from "axios";
import { baseUrl } from "../constants/serverConstants";
import { getAccessToken } from "../utils/localstorage-utils";
const token = getAccessToken();

export const createNewPost = async (post: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const result = await axios.post(`${baseUrl}/api/v1/post/new`, post, config);
  return result.data;
};

export const fetchAllPosts = async () => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const result = await axios.get(`${baseUrl}/api/v1/post`, config);
  return result.data;
};

export const fetchPostDetails = async (postId: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const result = await axios.get(`${baseUrl}/api/v1/post/${postId}`, config);
  return result.data;
};
