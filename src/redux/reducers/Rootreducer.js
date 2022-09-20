import { combineReducers } from "redux";
import { alertreducer } from "./alert.reducer";
import { authreducer } from "./auth.reducer";

export const Rootreducer = combineReducers({
    auth: authreducer,
    alert: alertreducer
})