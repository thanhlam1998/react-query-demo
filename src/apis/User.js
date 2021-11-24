import axios from "axios";
import { delay } from '../helper/index';

export const getUsersApi = async () => {
  await delay(2000);
  const response = await axios.get("https://jsonplaceholder.typicode.com/users/");
  return response.data;
};
