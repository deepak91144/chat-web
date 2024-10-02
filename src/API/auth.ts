import axios from "axios";
import { baseUrl } from "../constants/serverConstants";

export const addNewUser = async (user: any) => {
  const result = await axios.post(`${baseUrl}/user/addNewUser`, user);

  return result.data;
};

export const login = async (user: any) => {
  const result = await axios.post(`${baseUrl}/user/login`, user);

  return result.data;
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
