import { CHANGE_COLOR } from "../action/groupActions";

export const groupState = {
  group: "Java 48",
  color: "#000",
}

const groupReducer = (state = groupState, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export default groupReducer;
