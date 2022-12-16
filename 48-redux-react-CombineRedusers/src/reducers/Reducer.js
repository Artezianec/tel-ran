import {statsReducer} from "./statsReducer";
import {userReduser} from "./userReduser";

export const Reducer = (state, action) => {
	return ({
			user: userReduser(state.user, action),
			stats: statsReducer(state.stats, action)
		}
	)
}