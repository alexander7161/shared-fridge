var request = require("request");

export function getProduct(ean) {
  return new Promise((resolve, reject) => {
    request.post(
      "https://kesko.azure-api.net/v1/search/products",
      {
        headers: {
          "Ocp-Apim-Subscription-Key": "42c4facc08ce47e598e6c566fb253258"
        },
        json: {
          filters: {
            ean
          }
        }
      },
      function(error, response, body) {
        if (!error && response.statusCode == 200) {
          resolve(body);
        } else {
          reject(response);
        }
      }
    );
  });
}

// getProduct("6410405111340").then(v => console.log(v));
