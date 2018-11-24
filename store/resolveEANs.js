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
          resolve(data);
        });
      },
      function(error) {
        reject(error);
      }
    );
  });
}
