/* 2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. 
Print the contents of the promise after it has been rejected by passing console.log to `.catch`*/

let promise = new Promise(function (resolve, reject) {
  reject("Rejected Promise!");
});

promise.catch(function (reject) {
  console.log(reject);
});
