export function getProduct(ean) {
  return new Promise((resolve, reject) => {
    fetch("https://kesko.azure-api.net/v1/search/products", {
      method: "POST",
      body: JSON.stringify({
        filters: {
          ean
        }
      }),
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": "42c4facc08ce47e598e6c566fb253258"
      },
      credentials: "same-origin"
    }).then(
      function(response) {
        response.json().then(data => {
          var result = data.results[0];
          result.key = result.ean;
          resolve(result);
        });
      },
      function(error) {
        reject(error);
      }
    );
  });
}

export function getProductSuggestions(products) {
  var objects = {};
  products.forEach(p => (objects[p.ean] = 1));
  var objectsString = JSON.stringify(objects);
  var bodyString =
    '{"username": "ivan", "grocery_list": ' +
    objectsString +
    ', "x_loc": 0, "y_loc": 0}';
  return new Promise((resolve, reject) => {
    fetch("http://35.231.240.45/get_suggestion", {
      method: "POST",
      body: bodyString,
      headers: {
        "Content-Type": "application/json"
        // "Ocp-Apim-Subscription-Key": "42c4facc08ce47e598e6c566fb253258"
      },
      credentials: "same-origin"
    }).then(
      function(response) {
        response.json().then(data => {
          resolve(data);
        });
      },
      function(error) {
        reject(error);
      }
    );
  });
}
