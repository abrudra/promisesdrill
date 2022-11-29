/*1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms,
 using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`*/

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("promise Resolved!");
  }, 1000);
});

promise.then(function (resolve) {
  console.log(resolve);
});
