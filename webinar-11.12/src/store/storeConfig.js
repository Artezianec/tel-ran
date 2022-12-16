import { legacy_createStore as createStore } from "redux";
import groupReducer, {groupState} from '../reducer/groupReducer'
import credentialsReducer, {credentialsState} from '../reducer/credentialsReducer'
import rootReducer from '../reducer'
import { composeWithDevTools } from "redux-devtools-extension";

/* export const initState = {
  groups: groupState,
  credentials: credentialsState
};
 */
export const store = createStore(rootReducer, {}, composeWithDevTools());
