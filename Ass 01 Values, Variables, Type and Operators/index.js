/* 1. Do the following
1. Declare a variable `user` and take the name using `prompt`. Display the value stored in `user` using `alert`.
2. Now copy the value of `user` into a new variable named `userName`. Log the value of both `user` and `userName` using `console.log`.
3. Declare variable `age` and `isLearning` with value `22` and `true` in the same line. hint: declaring multiplemvariable in one line.
4. Now change the value of `user` to `John` and log the value of both `user` and `userName`.
*/

// let user = prompt(`Enter your Name`);
// alert(`Your name is ${user}`);
// userName = user;
// console.log(`UserName = ${userName} and user= ${user}`);
// let age = 22, isLearning = true;
// user = "john";
// console.log(`UserName = ${userName} and user= ${user}`);

/* 2.
Use `prompt` to take two numbers from user and store it in variable `numA` and `numB`. Create a third variable called `sum`, using `+` operator add numA and numB , store it in varible `sum` and using alert display `sum` in browser.
*/

// let numA = Number(prompt(`Enter your first number`)), numB = Number(prompt(`Enter your second number`));
// let sum = numA + numB;
// alert(`${sum}`);


// Loops

// 3. Complete the following code to make the output be 0 2 4 6 8 10?

// for (let Number = 0; Number <= 10; Number = Number + 2) {
//     console.log(Number);
// }

// 4. Print the odd numbers from 9 to 1 (both inclusive) using a for loop.

// for(let x = 9; x > 0; x = x - 2) {
//     console.log(x);
// }

// 5. Concat all the numbers from 5 to 0 (both inclusive) in descending order using a while loop. (543210)

// let finalString = "";
// let initialValue = 5;

// while (initialValue >= 0) {
//     finalString += initialValue;
//     initialValue--;
// }
// console.log(finalString);

// 6. Concat all the even numbers from 10 to 0 (both inclusive) in descending order using a while loop. (1086420)

// let finalEvenString = "";
// let initialEvenValue = 10;

// while (initialEvenValue >= 0) {
//     if(initialEvenValue % 2 === 0){
//     finalEvenString += initialEvenValue;
//     }
//     initialEvenValue--;
// }
// console.log(finalEvenString);


// Comparisoin


/* 7. Take two value using prompt and store them in variables `num1` and `num2`. Check whether they are equal or not.
- `alert` true or false base on the entered value.
- if the input value is anything like `true`, `null` or `undefined` alert saying `Enter a valid value`.
Example:
21, 21; // true
"hello", -21; // false
*/

num1 = +prompt(`Enter your first number`);
num2 = +prompt(`Enter your second number`);

if(isNaN(num1) || isNaN(num2)) {
    alert(`Enter a valid input!`);
} else {
    alert(num1 === num2);
}


