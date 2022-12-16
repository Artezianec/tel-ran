import { accountReducer } from "../reducers/accountReducer"
import { createStore } from "../redux/createStore";

const initialState = {
    balance: 0
}
export const store1 = createStore(accountReducer, initialState);