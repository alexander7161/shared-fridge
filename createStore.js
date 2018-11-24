import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import groceryListReducer from "./store/reducer.js";
import userReducer from "./store/user/reducer";
import { toastReducer as toast } from "react-native-redux-toast";

const reducers = combineReducers({
  toast,
  groceryList: groceryListReducer,
  user: userReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export { store };
