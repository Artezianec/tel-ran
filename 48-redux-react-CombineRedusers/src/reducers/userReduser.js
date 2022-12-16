import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userActions";

const initialState = {
	avatar: "https://www.gravatar.com/avatar/0?d=monsterid",
	name: "Monster"
}
export const userReduser = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_AVATAR:
			return {...state, avatar: action.payload || state.avatar};
		case CHANGE_NAME:
			return {...state, name: action.payload || state.name};
		default: {
			return state;
		}
	}
}