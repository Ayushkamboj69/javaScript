//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.

for (num = 1; num <= 10; num++ ){
    console.log(`Values from 1 to 10 ${num}`);
}

// Using `console.log` log all the evan values from 1 to 10.

for (num = 2; num <= 10; num=num+2){
    console.log(`Values from 1 to 10 ${num}`);
}

// Using `console.log` log all the od values from 1 to 10.

for (num = 1; num <= 10; num=num+2){
    console.log(`Values from 1 to 10 ${num}`);
}

// Calculate the sum of all numbers from 1 to 10.

let sum=0;
for (num = 1; num<=10 ; num++){
    sum = sum+num;
console.log(`Sum of 1 to 10 ${sum}`);
}

// Log all the values from 1 to 10 using while loop

let num=1
while(num<=10) {
    console.log(`${num}`);
    num++;
}

