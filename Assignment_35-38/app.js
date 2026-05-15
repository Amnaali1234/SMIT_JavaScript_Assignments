// Problem 1
function displayDateTime() {
    let currentDate = new Date();
    document.writeln(`Current Date and Time: ${currentDate}<br>`);
}
displayDateTime();


// Problem 2
function greetUser() {
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");

    if (!firstName || !lastName) {
        document.writeln("Invalid name input.<br>");
        return;
    }

    document.writeln(`Hello, ${firstName} ${lastName}!<br>`);
}
greetUser();


// Problem 3
function addNumbers() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        document.writeln("Invalid number input.<br>");
        return;
    }

    let sum = num1 + num2;
    document.writeln(`The sum of ${num1} and ${num2} is ${sum}.<br>`);
}
addNumbers();


// Problem 4
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Enter the operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        document.writeln("Invalid number input.<br>");
        return;
    }

    let result;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                document.writeln("Cannot divide by zero.<br>");
                return;
            }
            result = num1 / num2;
            break;

        default:
            document.writeln("Invalid operation.<br>");
            return;
    }

    document.writeln(`The result of ${num1} ${operation} ${num2} is ${result}.<br>`);
}
calculator();


// Problem 5
function squareNumber() {
    let num = parseFloat(prompt("Enter a number:"));

    if (isNaN(num)) {
        document.writeln("Invalid number input.<br>");
        return;
    }

    let square = num * num;
    document.writeln(`The square of ${num} is ${square}.<br>`);
}
squareNumber();


// Problem 6
function factorial() {
    let num = parseInt(prompt("Enter a number:"));

    if (isNaN(num) || num < 0) {
        document.writeln("Enter a valid non-negative number.<br>");
        return;
    }

    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    document.writeln(`The factorial of ${num} is ${result}.<br>`);
}
factorial();


// Problem 7
function countNumber(start, end) {
    for (let i = start; i <= end; i++) {
        document.writeln(`${i}<br>`);
    }
}
countNumber(1, 10);


// Problem 8
function calculateHypotenuse(base, perpendicular) {

    function calculateSquare(num) {
        return num * num;
    }

    let hypotenuse = Math.sqrt(
        calculateSquare(base) + calculateSquare(perpendicular)
    );

    return hypotenuse;
}

let hypotenuseResult = calculateHypotenuse(3, 4);
document.writeln(`Hypotenuse is: ${hypotenuseResult}<br>`);


// Problem 9
function calculateArea(width, height) {
    return width * height;
}

let area1 = calculateArea(5, 10);
document.writeln(`Area using values: ${area1}<br>`);

let width = 7;
let height = 4;

let area2 = calculateArea(width, height);
document.writeln(`Area using variables: ${area2}<br>`);


// Problem 10
function checkPalindrome(str) {
    let reverseStr = str.split("").reverse().join("");

    if (str === reverseStr) {
        return `${str} is a palindrome`;
    } else {
        return `${str} is not a palindrome`;
    }
}

let palindromeResult = checkPalindrome("madam");
document.writeln(`${palindromeResult}<br>`);


// Problem 11
function capitalizeWords(str) {
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i]) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }

    return words.join(" ");
}

let capitalizeResult = capitalizeWords("the quick brown fox");
document.writeln(`${capitalizeResult}<br>`);


// Problem 12
function findLongestWord(str) {
    let words = str.split(" ");
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

let longestWordResult = findLongestWord("Web Development Tutorial");
document.writeln(`Longest word is: ${longestWordResult}<br>`);


// Problem 13
function countLetter(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }

    return count;
}

let occurrenceResult = countLetter("JSResourceS.com", "o");
document.writeln(`Occurrences of letter: ${occurrenceResult}<br>`);


// Problem 14
function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    document.writeln(`The circumference is ${circumference}<br>`);
}

function calcArea(radius) {
    let area = Math.PI * radius * radius;
    document.writeln(`The area is ${area}<br>`);
}

calcCircumference(5);
calcArea(5);