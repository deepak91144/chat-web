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
