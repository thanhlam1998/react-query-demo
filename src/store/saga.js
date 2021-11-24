import { all } from "redux-saga/effects";
import UserSagas from "./sagas/user";

export default function* rootSaga() {
  yield all([UserSagas()]);
}
