// state = {
//     balance: number
// }

import {depositAction, withdrawAction} from "../actions/accountActions";
import {createReducer} from "@reduxjs/toolkit/";

const initialState = {
	balance: 0
}

export const accountReducer = createReducer(initialState, {
	[depositAction]: (state, action) => {
		state.balance += action.payload
	},
	[withdrawAction]: (state, action) => {
		const res = state.balance - action.payload;
		state.balance = res < 0 ? state.balance : res;
	}
})