import {addStatsAction} from "../actions/statsActions";
import {createReducer} from "@reduxjs/toolkit/";

export const statsState = {
	followers: 0,
	following: 0
}
const statsReducer = createReducer(statsState, {
	[addStatsAction]: (state, action) => {
		const res = state[action.payload.value] + action.payload.count;
		state[action.payload.value] = res < 0 ? 0 : res;
	}
})
export default statsReducer;