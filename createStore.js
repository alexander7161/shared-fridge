import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import groceryListReducer from "./store/reducer.js";

const store = createStore(groceryListReducer, applyMiddleware(thunk));

export { store };
