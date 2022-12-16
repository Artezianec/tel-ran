import {changeAvatarAction, changeNameAction} from "../actions/userActions";
import {createReducer} from "@reduxjs/toolkit/";

export const userState = {
	avatar: "https://www.gravatar.com/avatar/0?d=monsterid",
	name: "Monster"
}

const userReducer = createReducer(userState, {
	[changeAvatarAction]: (state, action) => {
		state.avatar = action.payload;
	},
	[changeNameAction]: (state, action) => {
		state.name = action.payload;
	}
})
export default userReducer;