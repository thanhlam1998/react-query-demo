import USER_TYPE from "../types/user";

export const getUsers = () => {
  return { type: USER_TYPE.GET_USERS_LOADING };
};
