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
  whitelist: ["auth", "cartroot", "Products"],
};
const persistedReducer = persistReducer(persistConfig, Rootreducer);

const sagaMiddleware = createSagaMiddleware();

const Middlewares = [sagaMiddleware, thunk];
export const configstore = () => {
  let store = createStore(persistedReducer, applyMiddleware(...Middlewares));
  let persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};
