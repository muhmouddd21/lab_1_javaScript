// console.log(value1);// because value1 is local value 
console.log(printVariables()); // works correctly due to hoisting functions are fully hoisted name and body
console.log(printVariables(1,2,3));  //[1,2,3]
console.log(printVariables(1,2));    // [1,2,undefined]
console.log(printVariables(1,2));    // [1,2,3] by adding a default value to the function
console.log(printVariables(1,2,3,4,5,6,7,8,9,10)); // [1,2,3]
console.log(printVariables(1,2,3,4,5,6,7,8,9,10));

//  function expression

console.log(funexp(10,11,12)); //error due to arguments object 
console.log(funexp(10)); // [10,undefined, 3]  3 is a default value
console.log(funexp(10,11,12,13,14,15,16)); // [10,11,12]

