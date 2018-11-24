import { UPDATE_CURRENT_USER } from "./actionTypes";

export function setCurrentUser(user) {
  return {
    type: UPDATE_CURRENT_USER,
    user
  };
}

export function resetCurrentUser() {
  return {
    type: UPDATE_CURRENT_USER,
    user: undefined
  };
}
