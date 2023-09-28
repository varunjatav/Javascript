// function x() {
//     var a = 7
//     function y() {
//       console.log(a)
//     }
//     return y
//   }
  
//   var z = x()
//   console.log(z) // [Function: y]
//   z()


// //   curring
// let add = function (x) {
//     return function (y) {
//       console.log(x + y)
//     }
//   }
  
//   let addByTwo = add(2)
//   addByTwo(3);
//   console.log(addByTwo);




  let init = () => {
       let name = "Mozilla";

       let printName = () => {
        console.log(name);
       }

       printName();
}
init();