// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :
- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/

let userAge = +prompt(`Enter your age`);

if (userAge >= 12 && userAge <= 55) {
     alert("You can participate in the marathon");
} else if(userAge >= 4 && userAge <= 11) {
     alert(" You are too young to participate in the marathon");
} else if(userAge <4) {
     alert(`Hey Kiddo! Can You Walk?`);
} else if (userAge >55) {
     alert(" You are too old to participate in the marthon");
}


// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.
Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]

let count = +prompt(`Enter the number of e!`)

const start = "h";
const end = "llo";

let middle = "";

for (let i = 0;i < count; i++){
     middle += "e";
}
alert(start + middle + end);


/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/

let n = +prompt(`Enter a number till which you want the sum`);
let sum = 0;

for(let i = 1; i <= n; i++){
     sum = sum +i;
}
alert(`sum is ${sum}`);


/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.
*/
// [Your code goes here]

let number = +prompt(`Enter a number`);

switch(true){
     case number === 1:
          alert(`[ ] ONE`);
          break;
     case number === 2:
          alert(`[ ] TWO`);
          break;
     case number === 3:
          alert(`[ ] THREE`);
          break;
     case number === 4:
          alert(`[ ] FOUR`);
          break;
     case number === 5:
          alert(`[ ] FIVE`);
          break;
     case number === 6:
          alert(`[ ] SIX`);
          break;
     case number === 7:
          alert(`[ ] SEVEN`);
          break;
     case number === 8:
          alert(`[ ] EIGHT`);
          break;
     case number === 9:
          alert(`[ ] NINE`);
          break;
     default:
          alert(`[ ] PLEASE TRY AGAIN`); 
          break;                                            
}


/*
🎖Using switch statement do the following
Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]

let marks = +prompt(`Enter your marks`);

switch(true){
    case marks>90:
        alert(`Your Grade is AA`);
        break
    case marks>80 && marks<=90:
        alert(`Your Grade is AB`);
        brake
    case marks>70 && marks<=80:
        alert(`Your Grade is BB`);
        brake
    case marks>60 && marks<=70:
        alert(`Your Grade is BC`);
        brake
    case marks>50 && marks<=60:
        alert(`Your Grade is CC`);
        brake
    case marks>40 && marks<=50:
        alert(`Your Grade is CD`);
        brake
    case marks>30 && marks<=40:
        alert(`Your Grade is DD`);    
        brake 
    case marks<=30:
        alert(`your Grade is FF`)   
        brake
    default:
        alert(`Enter valid input`);
}


/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]

let Number1 = +prompt(`Enter your first number`);
let Number2 = +prompt(`Enter your second number`);

if(firstNumber>secondNumber){
    alert(`${Number1} is greater as compared to ${Number2}`)
} else {
    alert(`${Number2} is greater as compared to ${Number1}`)   
}


/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]

let num1 = +prompt(`Enter a number`);
let num2 = +prompt(`Enter a number`);
let num3 = +prompt(`Enter a number`);

let product = num1 * num2 * num3;

if(product > 0){
  alert("sign is positive");
}else{
  alert(`Sign is negative`);
}
// sign of 0 ignored here



/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]

let firstNumber = +prompt(`Enter first number`);
let secondNumber = +prompt(`Enter second number`);
let operation = prompt(`Add , Sub, Mul , Div`);

if(operation == `Add`){
  sum = firstNumber + secondNumber;
  alert(`Sum = ${sum}`);
}else if(operation == `Sub`){
  sub = firstNumber - secondNumber;
  alert(`Sub = ${sub}`);
}else if(operation == `Mul`){
    mul = firstNumber * secondNumber;
    alert(`Mul = ${mul}`);
}else if(operation == `Div`){
    Div = firstNumber / secondNumber;
    alert(`Div = ${Div}`);
}

/*
🎖 Write a program to calculate the total price of your phone purchase. With these conditions
 * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [ ] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
 * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted like ($334.76).
 * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
*/

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
// your code goes here

// ⛑ Answer of the above will `$334.76`.

while(amount < bank_balance){
    amount = amount + PHONE_PRICE;
    if(amount < SPENDING_THRESHOLD){
        amount = amount + ACCESSORY_PRICE;
    }
}

let tax =amount * TAX_RATE;

amount = amount +tax;
console.log(`Total amount of this purchase is ${amount}`);

if(amount < bank_balance){
    console.log(`You can afford it`);
}else{
    console.log(`You can't afford it`);
}

