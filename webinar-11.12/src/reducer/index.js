import { combineReducers } from "redux";
import credentialsReducer from "./credentialsReducer";
import groupReducer from "./groupReducer";

export default combineReducers({
    credentials: credentialsReducer,
    groups: groupReducer 
})