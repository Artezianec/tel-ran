import {accountReducer} from "../reducers/accountReducer";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		account: accountReducer,
	}
});