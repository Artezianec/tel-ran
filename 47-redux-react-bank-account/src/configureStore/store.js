import { accountReducer } from "../reducers/accountReducer"
import { legacy_createStore } from "@reduxjs/toolkit";

const initialState = {
    balance: 0
}
export const store1 = legacy_createStore(accountReducer, initialState);