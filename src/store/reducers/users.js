import USER_TYPE from "../types/user";

const initState = {
  usersList: [],
  isLoading: false,
};

const usersReducer = (state = initState, { type, result }) => {
  switch (type) {
    case USER_TYPE.GET_USERS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_TYPE.GET_USERS_SUCCESS:
      return {
        ...state,
        usersList: result,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default usersReducer;