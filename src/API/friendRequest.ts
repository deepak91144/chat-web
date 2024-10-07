import axios from "axios";
import { baseUrl } from "../constants/serverConstants";
import { getAccessToken } from "../utils/localstorage-utils";
const token = getAccessToken();
export const sendFriendRequest = async (payload: any) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const result = await axios.post(
    `${baseUrl}/user/send-friend-request`,
    payload,
    config
  );
  return result.data;
};

export const fiendRequestIHaveSent = async (userId: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const result = await axios.get(
    `${baseUrl}/user/friend-request-iSent/${userId}`,

    config
  );
  return result.data;
};

export const fetchMyFriendRequest = async (receiver: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const result = await axios.get(
    `${baseUrl}/user/friend-request/${receiver}`,

    config
  );
  return result.data;
};

export const acceptFriendRequest = async (payload: any) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const result = await axios.post(
    `${baseUrl}/user/accept-friend-request`,
    payload,
    config
  );
  return result.data;
};

export const fetchAllMyFriends = async (userId: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const result = await axios.get(
    `${baseUrl}/user/my-friends/${userId}`,
    config
  );
  return result.data;
};
