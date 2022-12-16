import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import statsReducer from "../reducers/statsReducer";


export const store = configureStore({
	reducer: {
		user: userReducer,
		stats: statsReducer
	}
})