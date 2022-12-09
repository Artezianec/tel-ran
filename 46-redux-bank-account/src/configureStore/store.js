import Store from "../redux/Store";
import { accountReducer } from "../reducers/accountReducer"

const initialState = {
    balance: 0
}
export const store1 = new Store(accountReducer, initialState);