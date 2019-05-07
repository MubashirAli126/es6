
// JavaScript Hoisting
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to  the top of their scope before code execution.
// let and const, using undeclared variables will lead to a Reference Error because the variable remains uninitialised at execution.
//   
  

//   Var
// The JavaScript variables statement is used to declare a variable and, optionally, we can initialize the value of that variable.
// Variable declarations are processed before the execution of the code.
// Variable declared with var is its current execution context.JavaScript variable declared outside the function is global.
var greeter = "hey hi";
greeter = "say Hello instead";
console.log(greeter)
     

//   let
// The let statement declares a local variable in a block scope. It is similar to var, in that we can optionally initialize the variable.
// The let statement allows you to create a variable with the scope limited to the block on which it is used.
// It is similar to the variable we declare in other languages like Java, .NET, etc. 

let greeter2 = "hey hi";
greeter = "say Hello instead";
console.log(greeter2)
  
//  Const
// Const statement values can be assigned once and they cannot be reassigned. The scope of const statement works similar to let statements.

    const greeter4 = "hey hi";
    greeter = "say Hello instead";
    console.log(greeter4)
