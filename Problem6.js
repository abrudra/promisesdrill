/*6. Write a funtion named `wait` that accepts `time` in ms and executes the function after the given time.? */

function wait(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}
wait().then(function (resove) {
  console.log("Executes the function after the given time..!");
});
