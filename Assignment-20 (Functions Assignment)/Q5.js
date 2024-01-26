// Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using recursion. Test the function with different inputs.

function factorial(num) {
  // Base case:
  if (num == 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log("Factorial:");
console.log(`5! = ${factorial(5)}`);
console.log(`3! = ${factorial(3)}`);
console.log(`4! = ${factorial(4)}`);
