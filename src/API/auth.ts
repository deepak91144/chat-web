import axios from "axios";
import { baseUrl } from "../constants/serverConstants";
import { getAccessToken } from "../utils/localstorage-utils";

export const addNewUser = async (user: any) => {
  const result = await axios.post(`${baseUrl}/user/addNewUser`, user);

  return result.data;
};

export const login = async (user: any) => {
  try {
    const result = await axios.post(`${baseUrl}/user/login`, user);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};
export const getProfileDetails = async (token: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const result = await axios.get(`${baseUrl}/user/profile`, config);

  return result.data;
};

export const getAllUsers = async (token: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const result = await axios.get(`${baseUrl}/user/all`, config);

  return result.data;
};
export const updateUserDetails = async (payload: any) => {
  const config = {
    headers: { Authorization: `Bearer ${getAccessToken()}` },
  };
  const result = await axios.put(`${baseUrl}/user/update`, payload, config);

  return result.data;
};
