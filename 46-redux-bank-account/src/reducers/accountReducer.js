// state = {
//     balance: Number
// }

import { DEPOSIT, WITHDRAW } from "../actions/accountActions";

export const accountReducer = (state, action) => {
    switch (action.type) {
        case DEPOSIT:
            return { ...state, balance: state.balance + action.payload }
        case WITHDRAW:
            const res = (state.balance - action.payload);
            if (res < 0) {
                return state.balance
            }
            return res
        default:
            return state;
    }
}