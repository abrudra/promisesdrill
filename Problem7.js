/*7. Write a basic implementation of `Promise.all` that accepts an array of promises and return another
 array with the data coming from all the promises. Make sure if any of the Promise gets rejected throw error.
  Only when all the promises are fulfilled resolve the promise.*/

let promise1 = new Promise(function (resolve, reject) {
  resolve("Hi im promise 1");
});

let promise2 = new Promise(function (resolve, reject) {
  //resolve('Hi im promise 2');
  reject(new Error("I am rejected"));
});

let promise3 = new Promise(function (resolve, reject) {
  resolve("Hi im promise 3");
});
let promise_all = Promise.all([promise1, promise2, promise3]);

promise_all.then(function (value) {
  console.log(value);
});
