//Problem 1
let num = 3.45214;
document.writeln(`number: ${num} <br>`);
document.writeln(`round of value: ${Math.round(num)}<br>`);
document.writeln(`floor value: ${Math.floor(num)}<br>`);
document.writeln(`ceil value: ${Math.ceil(num)}<br><br>`);

// Problem 2
let floatNum = -2.673;
document.writeln(`number: ${floatNum} <br>`);
document.writeln(`round of value: ${Math.round(floatNum)}<br>`);
document.writeln(`floor value: ${Math.floor(floatNum)}<br>`);
document.writeln(`ceil value: ${Math.ceil(floatNum)}<br><br>`);

// Problem 3
let absNum = -4;
document.writeln(`absolute value of ${absNum} is ${Math.abs(absNum)}<br><br>`);

// Problem 4
let diceRoll = Math.floor(Math.random() * 6) + 1;
document.writeln(`random dice value: ${diceRoll}<br><br>`);

// Problem 5
let coinFlip = Math.random() < 0.5 ? 'Heads' : 'Tails';
document.writeln(`random coin value: ${coinFlip}<br><br>`);

// Problem 6
let randomNum = Math.floor(Math.random() * 100) + 1;
document.writeln(`random number between 1 and 100: ${randomNum}<br><br>`);

// Problem 7
let userWeight = parseFloat(prompt("Enter your weight in kilograms:"));
document.writeln(`The weight of the user is: ${userWeight} kilograms<br><br>`);

// Problem 8
let secretNum = Math.floor(Math.random() * 10) + 1;
let userGuess = parseInt(prompt("Guess the secret number between 1 and 10:"));
if (userGuess === secretNum) {
    document.writeln("Congratulations! You guessed the secret number<br><br>");

} else {
    document.writeln(`Sorry, the secret number was ${secretNum} Try again!<br><br>`);
}