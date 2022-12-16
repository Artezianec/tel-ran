import { legacy_createStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
export const store = legacy_createStore(rootReducer, {});