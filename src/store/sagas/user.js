import USER_TYPE from "../types/user";
import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getUsersApi } from "../../apis/User";

export function* getUsers() {
  try {
    const result = yield call(getUsersApi);
    yield put({ type: USER_TYPE.GET_USERS_SUCCESS, result });
  } catch (error) {}
}

export default function* watchAll() {
  yield takeLatest(USER_TYPE.GET_USERS_LOADING, getUsers);
}
