greet();

function greet(){
    console.log("Good morning");
}

// output Good morning;

// declaration of a function , variables and clss definitions will come at the top in javascript;

console.log(a);
var a;

// output a is undefined variable;


console.log(b); // output b is also undefined variable;
var b = 9;
console.log("b: "+ b); // output b is 9;

// declaration is hoisted to the top but not initialization;

// let and const hav different behaviour from var in hoisting;


// console.log(c); // cannot access c before initialization in let;
let c = 9;
console.log("c: "+ c);



// console.log(d); // cannot access c before initialization in const ;
const d = 9;
console.log("d: "+ d);


// greet2();

// const greet2 = () =>{
//     console.log("Good morning");
// }

// output cannot access greet2 before initialization because it is declared with const;


// greet3();

// var greet3 = () =>{
//     console.log("Good morning");
// }

// output greet3 is not a function because function expression are not hoisted;
// greet4();
// let greet4 = function(){
//     console.log("Good morning");
// }

// output Cannot access 'greet4' before initialization because function expressions cannot be hoisted;

greet5();
var greet5 = function(){
    console.log("Good morning");
}

// output greet5 is not a function because function expressions cannot be hoisted;