// Q3. Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and immediately displays the result.

(function(number){
    const square = number * number;
    console.log(square);
})(6);