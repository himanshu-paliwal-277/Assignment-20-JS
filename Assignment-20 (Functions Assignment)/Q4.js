// Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the function with various incomes.

function calculateTax() {
  function getTaxRate(income) {
    if (income <= 25000) {
      // 10% tax of income
      return 0.1;
    } 
    else if (income <= 50000) {
      // 15% tax of income
      return 0.15;
    } 
    else if (income <= 100000) {
      // 20% tax of income
      return 0.2;
    } 
    else {
      // 30% tax of income
      return 0.3;
    }
  }
  return function (income) {
    const taxRate = getTaxRate(income);
    return income * taxRate;
  };
}

// Create the tax calculator
const tax_Calculator = calculateTax();

// Test the function with various incomes
console.log("Tax for 20,000 Rs income: Rs " + tax_Calculator(20000));
console.log("Tax for 40,000 Rs income: Rs " + tax_Calculator(40000));
console.log("Tax for 75,000 Rs income: Rs " + tax_Calculator(75000));
console.log("Tax for 120,000 Rs income: Rs " + tax_Calculator(120000));
