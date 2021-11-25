import axios from "axios";
import { delay } from '../helper/index';

const baseApi = "http://localhost:3001"

export const getUsersApi = async () => {
  await delay(1500);
  const response = await axios.get(`${baseApi}/users`);
  return response.data;
};
