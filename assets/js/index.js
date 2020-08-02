// "use strict";
// // Именование переменных A-Za-z, 0-9, _, $
// // Нельзя использовать числа в начале и ключевые слова
// // Однострочный комментарий
// /* Многострочный 
// комментарий*/

// const colorRed = "#f00";
// console.log(colorRed);
// console.log("colorRed");

// let string = `text
// and more text
// and more text`;
// console.log(string);

// string = `My favorite color is ${colorRed}`;
// console.log(string);

// let firstName = "Ilmira";
// console.log(`My name is ${firstName}`);

// // let userName = prompt('Enter your name');
// // console.log(`User's name is ${userName}`);

// let sum = `Sum is ${1 + 3}`;
// console.log(sum);

// let check = false; //boolean
// let undefinedVariable; //undefined
// console.log(typeof check);
// console.log(typeof(undefinedVariable));

// let nullValue = null;
// console.log(typeof nullValue); //JS bug - object

let input = prompt('Enter a number');
let time = Number(input);

if (time > 0 && time <= 15) {
    console.log('First quater of hour');
} else if (time > 15 && time <=30) {
    console.log('Second quater of hour');
} else if (time > 30 && time <=45) {
    console.log('Third quater of hour');
} else if (time > 45 && time <= 60) {
    console.log('Fourth quater of hour');
} else if (time > 60 || time < 1) {
    console.log('Enter number from 1 to 60!');
}else {
    console.log('Enter number from 1 to 60!');
}