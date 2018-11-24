import { UPDATE_CURRENT_USER } from "./actionTypes";

function userReducer(state = { currentUser: undefined }, action) {
  switch (action.type) {
    case UPDATE_CURRENT_USER:
      return Object.assign({}, state, {
        currentUser: action.user
      });
    default:
      return state;
  }
}

export default userReducer;
