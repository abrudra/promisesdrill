/*8. Use this data endpoint to get the data and console the each house names and handle the error as well.
  [ENDPOINT](https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json)

    - Use fetch to get data.
    - Handle if the user is not connected to internet.
    - Handle error that may occure while fetching data.
    */

const fetch = require("node-fetch");

function getData() {
  url =
    "https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json";

  fetch(url)
    .then(function (response) {
      if (response.status >= 1000) {
        throw new Error("Error occure while fetching data.");
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (reject) {
      console.log("User is not connected to internet");
    });
}
getData();
