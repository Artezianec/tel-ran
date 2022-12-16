import { CHANGE_NAME } from "../action/credentialsActions";

export const credentialsState = {
  firstName: "John",
  lastName: "Smith",
};

const credentialsReducer = (state = credentialsState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    default:
      return state;
  }
};

export default credentialsReducer;
