// Array Methods.
let num = [1,2,3,4];
let b = num.toString(); // b is now a string;
console.log(typeof b, b);
// join Method;
let c = num.join("_");
console.log(c);

// pop the last element from the array & update the array;
console.log(num.pop());  // return the popped element of the array i.e last element;
console.log(num, "popped last element");
// push returns the new array length;
let push = num.push(4);
console.log(push);
console.log(num,"Pushed 4 to last index");


// Shift and Unshift;

let shift = num.shift();
console.log(shift, "shift first element");
console.log(num, "return modified array after shifting first element");

let Unshift = num.unshift(100);
console.log(Unshift, "adds new element to the first index of array");
console.log(num, "return modified array after shifting first element");