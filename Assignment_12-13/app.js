// Problem 1
let input = prompt("Enter a character:");
let ascii = input.charCodeAt(0);
document.writeln("<h3>Problem 1</h3>");
if (ascii >= 48 && ascii <= 57) {
    document.write("It is a Number<br>");
}
else if (ascii >= 65 && ascii <= 90) {
    document.write("It is an Uppercase Letter<br>");
}
else if (ascii >= 97 && ascii <= 122) {
    document.write("It is a Lowercase Letter<br>");
}
else {
    document.write("Invalid input<br>");
}

// Problem 2
let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));
document.writeln("<h3>Problem 2</h3>");
if (num1 > num2) {
    document.write(`The larger integer is: ${num1}<br>`);
}
else if (num2 > num1) {
    document.write(`The larger integer is: ${num2}<br>`);
}
else {
    document.write(`Both integers are equal.<br>`);
}

// Problem 3
let num = Number(prompt("Enter a number:"));
document.writeln("<h3>Problem 3</h3>");
if (num > 0) {
    document.write("The number is Positive<br>");
} 
else if (num < 0) {
    document.write("The number is Negative<br>");
} 
else {
    document.write("The number is Zero<br>");
}

// Problem 4
let char = prompt("Enter a single character:").toLowerCase();
document.writeln("<h3>Problem 4</h3>");
if (char.length === 1) {
    let isVowel = (char === "a" || char === "e" || char === "i" || char === "o" || char === "u");
    document.write(`Is it a vowel? ${isVowel}<br>`);
} 
else {
    document.write("Please enter only one character<br>");
}

// Problem 5
// a
let correctPassword = "12345";

// b
let userPassword = prompt("Enter your password");

// c
document.writeln("<h3>Problem 5</h3>");
// i
if (userPassword === "" || userPassword === null) {
    document.write("Please enter your password<br>");
} 
// ii
else if (userPassword === correctPassword) {
    document.write("Correct! The password you entered matches the original password<br>");
} 
else {
    document.write("Incorrect password<br>");
}

// Problem 6
let greeting;
let hour = 13;

if (hour < 18) {
    greeting = "Good day";
} 
else {
    greeting = "Good evening";
}

document.write(`<h3>Problem 6</h3>`);
document.write(`${greeting}<br>`);

// Problem 7

let time = Number(prompt("Enter time in 24-hour format (e.g. 1900):"));

let hour24 = parseInt(time / 100);

document.write(`<h3>Problem 7</h3>`);

if (hour24 >= 0 && hour24 < 12) {
    document.write("Good Morning<br>");
}
else if (hour24 >= 12 && hour24 < 17) {
    document.write("Good Afternoon<br>");
}
else if (hour24 >= 17 && hour24 < 21) {
    document.write("Good Evening<br>");
}
else if (hour24 >= 21 && hour24 <= 23) {
    document.write("Good Night<br>");
}
else {
    document.write("Invalid time<br>");
}