import { combineReducers } from "redux";
import {statsReducer} from "./statsReducer";
import {userReduser} from "./userReduser";

export default combineReducers({
	user: userReduser,
	stats: statsReducer
})