
// modify to sort the array

let num = [551, 22, 3, 14, 5, 6, 7 , 8, 229];
num.sort((a,b) => a-b);
num.reverse();
console.log(num);

// sorts the array on the basis of array's element's first part;


// Splice & slice;

let numArray = [11, 222, 304, 454, 533, 62, 74];
let deletedValues = numArray.splice(2, 3, 1024, 1023, 1025, 1025);
console.log(typeof deletedValues, deletedValues); // return array of deleted values
console.log(numArray);

let numSlice = [1,2,3,4];
let a = numSlice.slice(1);
console.log(a ,numSlice);

// slice doesn't modifies array it makes a new array;