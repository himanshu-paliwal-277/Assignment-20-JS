// Q2. Create a JavaScript function called generateGreeting that takes a name as an argument and returns a personalized greeting message. Use this function to greet three different people.

function generateGreeting(name){
    let message = `Hello ${name}, Welcome to our team`;
    return message;
}

const person = "Himanshu";
const result = generateGreeting(person);
console.log(result);