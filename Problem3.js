/*3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`.
 Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.
 finally` to log messgae `Promise Settled!`.*/

let promise = new Promise(function (resolve, reject) {
  reject("Rejected Promise!");
});

promise.catch(function (error) {
  console.log(error);
});

promise.finally(function () {
  console.log("Promise Settled!");
});
