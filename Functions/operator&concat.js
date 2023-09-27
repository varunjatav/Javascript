// delete is a operator not a function
let num = [1,2,3,4,5,6,7,8,9];
console.log(num, num.length);
delete num[0]
console.log(num, num.length);


// concat
let num1 = [1,2,3,4,5,6,7,8,9];
let num2 = [11,12,13,14,15,16,17];
let num3 = [111,112,113,114,115,116,117];
let newArray = num1.concat(num2,num3);
console.log(newArray);