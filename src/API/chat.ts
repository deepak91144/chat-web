import axios from "axios";
import { baseUrl } from "../constants/serverConstants";
import { getAccessToken, getUserId } from "../utils/localstorage-utils";
const token = getAccessToken();

export const addChat = async (user: string, token: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const result = await axios.post(
    `${baseUrl}/api/v1/chat/new`,
    { member: user },
    config
  );

  return result.data;
};

export const fetchAllChats = async () => {
  const userId = getUserId();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const result = await axios.get(`${baseUrl}/api/v1/chat/${userId}`, config);

  return result.data;
};
export const createAGroup = async (payload: any) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const result = await axios.post(
    `${baseUrl}/api/v1/chat/group/new`,
    payload,
    config
  );

  return result.data;
};

export const getMyGroups = async () => {
  const userId = getUserId();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const result = await axios.get(
    `${baseUrl}/api/v1/chat/my-groups/${userId}`,
    config
  );

  return result.data;
};

export const renameGroup = async (payload: any) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const result = await axios.put(
    `${baseUrl}/api/v1/chat/rename-group`,
    payload,
    config
  );

  return result.data;
};

export const deleteGroup = async (chatId: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const result = await axios.delete(
    `${baseUrl}/api/v1/chat/group/delete/${chatId}`,
    config
  );

  return result.data;
};

export const addMembersToAGroup = async (payload: any) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const result = await axios.put(
    `${baseUrl}/api/v1/chat/add-members`,
    payload,
    config
  );

  return result.data;
};

export const removeMembersFromAGroup = async (payload: any) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const result = await axios.put(
    `${baseUrl}/api/v1/chat/remove-member`,
    payload,
    config
  );

  return result.data;
};

export const getGroupDetails = async (chatId: any) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const result = await axios.get(
    `${baseUrl}/api/v1/chat/group/${chatId}`,

    config
  );

  return result.data;
};

export const putLatestChatOnTopOfList = async (chatId: any) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const result = await axios.put(
    `${baseUrl}/api/v1/chat/re-arrange/${chatId}`,

    config
  );

  return result.data;
};
