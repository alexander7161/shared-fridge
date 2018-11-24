import {
  FETCHING_GROCERY_LIST,
  UPDATE_GROCERY_LIST,
  UPDATE_GROCERY_LIST_ERROR
} from "./actionTypes";

function groceryListReducer(
  state = { fetching: false, groceryList: [], error: undefined },
  action
) {
  switch (action.type) {
    case FETCHING_GROCERY_LIST:
      return Object.assign({}, state, {
        fetching: true
      });
    case UPDATE_GROCERY_LIST:
      return Object.assign({}, state, {
        fetching: false,
        groceryList: action.list
      });
    case UPDATE_GROCERY_LIST_ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: action.error.message
      });
    default:
      return state;
  }
}

export default groceryListReducer;
