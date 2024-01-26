// Q6. Write a JavaScript function called curry that takes a function as an argument and returns a curried version of that function. The curried function should accept arguments one at a time and return a new function until all arguments are provided. Then, it should execute the original function with all arguments. Test the curry function with a function that adds two numbers.

function curry(fn) {
  return function curried(a) {
    return function curried(b) {
      return a + b;
    };
  };
}

function add(a, b) {
  return a + b;
}

const curriedAdd = curry(add);
const result1 = curriedAdd(3)(5);
console.log(result1);

const result2 = curriedAdd(12)(27);
console.log(result2);
