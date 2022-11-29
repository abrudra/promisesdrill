/*4. What will be the output of the code below.

```js

console.log('A');
// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log('B'), 0);

// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log('C'));

console.log('D');
*/

console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
Promise.resolve().then(() => console.log('C'));

/*Output :- 
A
D
C
B
*/
