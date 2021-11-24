import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export default store;
