import {
  UPDATE_GROCERY_LIST,
  UPDATE_GROCERY_LIST_ERROR,
  FETCHING_GROCERY_LIST
} from "./actionTypes";
import { getProduct } from "./resolveEANs";
import { ToastActionsCreators } from "react-native-redux-toast";

export function updateGroceryListFromServer() {
  return dispatch => {
    console.log("Gettiing grocery list");
    dispatch(fetchingGroceryList());
    fetch("http://35.231.240.45/get-wish-list?username=ivan", {
      method: "GET"
      //   credentials: "same-origin"
    }).then(
      response => {
        response.json().then(data => {
          // console.log("API Success", data);
          var promiselist = data.wishlist.map(ean => getProduct(ean));
          Promise.all(promiselist)
            .then(result => {
              dispatch(ToastActionsCreators.displayInfo("List Updated!"));
              dispatch(updateGroceryList(result));
            })
            .catch(err => {
              dispatch(ToastActionsCreators.displayError(err.message));
              console.log(err);
              dispatch(updateGroceryListError(err));
            });
        });
        // response.status     //=> number 100–599
        // response.statusText //=> String
        // response.headers    //=> Headers
        // response.url        //=> String

        // return response.text()
      },
      function(error) {
        dispatch(ToastActionsCreators.displayError(error.message));
        console.log(error);
        dispatch(updateGroceryListError(error));
        //   error.message; //=> String
      }
    );
  };
}

function fetchingGroceryList() {
  return {
    type: FETCHING_GROCERY_LIST
  };
}

function updateGroceryList(list) {
  return {
    type: UPDATE_GROCERY_LIST,
    list
  };
}

function updateGroceryListError(error) {
  return {
    type: UPDATE_GROCERY_LIST_ERROR,
    error
  };
}
