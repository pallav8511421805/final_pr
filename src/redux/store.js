import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { Rootreducer } from "./reducers/Rootreducer";
import rootSaga from "./saga/Rootsaga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};
const persistedReducer = persistReducer(persistConfig, Rootreducer);

const sagaMiddleware = createSagaMiddleware();

const Middlewares = [sagaMiddleware, thunk];
export const store = () => {
  let persistor = persistStore(store);
  let store = createStore(persistedReducer, applyMiddleware(...Middlewares));
  return { store, persistor };
};
sagaMiddleware.run(rootSaga);
