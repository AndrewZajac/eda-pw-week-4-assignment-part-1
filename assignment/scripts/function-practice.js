console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {

  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  // return a string like 'Hello, Jo!', or 'Hello, Stacy!'
  // console.log(`Hello ${name}`);
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Andrew'));
// const greeting = helloName('Dave');
// console.log(greeting);

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  console.log('in addNumbers');
  let answer = firstNumber + secondNumber;
  return answer;
}

console.log('The answer is:', addNumbers(3, 10));


// 4. Function to multiply three numbers & return the result

function multiplyThree(num1, num2, num3){
  console.log('in multiplyThree');
  let answer = num1 * num2 * num3;
  return answer
}

console.log('The answer is ', multiplyThree(2, 3, 4));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  console.log('Is the number',number, 'positive:');
  if (number > 0) {
    result = true;
  }
  else{
    result = false;
  }
  return result;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

console.log(isPositive(-5));
console.log(isPositive(3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
const array = [];
function getLast(array) {
  return array[array.length -1];
}
console.log(getLast(array));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 


function find(value, array) {
  for ( let i = 0; i < array.length; i ++)
    if(array[i] === value){
      return true;
    } 
    return false;
}

console.log(find(15, array));

// let value = ['money'];

// function find(value, array) {
//   var result = false;
//   for ( let i = 0; i < value.length; i ++) {
//     if(value[i] === 'money'){
//       console.log('money found.');
//       result = true;
//       break;
//     } else if(Array.isArray(value[i])){
//       result = find(value[i]);
//       console.log('money was not found, must keep looking!');
//     }
//   }
//   return result;
// }

// console.log(find(value));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for ( let i = 0; i < string.length; i ++)
    if(string[i] === letter){
      console.log('I found the first ');
      return true;
    } 
    return false;
}
console.log(find('Bath', array));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
//   // TODO: loop to add items
  let sum = 0;
  for(let i = 0; i <array.length; i ++){
    sum += array[i];
  }

//   // TODO: return the sum
  return sumAll;
}
console.log('Sum of sumAll', sumAll[5, 7, 2, 1]);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {
  // console.log('in allPositive array');
  if (allPositive.array > 0) {
    result 
  }
  else{
    result 
  }
  return result;
}

console.log('The allPositive array contains:', result);


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}


// function handWashDishes (unsafeDishwasher){
//   if (unsafeDishwasher){
//     console.log('I need to hand wash the dishes that can not go into the dishwasher.');
//   } else{
//     console.log('I can load this dish into the dishwasher.');
//   }
// }
// console.log(handWashDishes());