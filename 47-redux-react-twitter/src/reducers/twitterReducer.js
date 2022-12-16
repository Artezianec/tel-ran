// state = {
//     user: {
//         avatar: String,
//         name: String,
//     },
//     stats: {
//         followers: Number,
//         following: Number
//     }
// }
import { CHANGE_AVATAR, CHANGE_NAME } from "../actions/userActions";

export const twitterReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            {
                const user = { ...state.user }
                user.name = action.payload || user.name;
                return { ...state, user }
            }
        case CHANGE_AVATAR:
            {
                const user = { ...state.user }
                user.avatar = action.payload || user.avatar;
                return { ...state, user }
            }
        default:
            return state;
    }
}