// Problem 1
let a = 10;
document.writeln(`Result:<br>`);
document.writeln(`The value of a is: ${a}<br>`);
document.writeln(`............................................<br><br>`)
let a1 = ++a;
document.writeln(`The value of ++a is: ${a1}<br>`);
document.writeln(`Now the value of a is: ${a1}<br><br>`);
let a2 = a++;
document.writeln(`The value of a++ is: ${a2}<br>`);
document.writeln(`Now the value of a is: ${a}<br><br>`);
let a3 = --a;
document.writeln(`The value of --a is: ${a3}<br>`);
document.writeln(`Now the value of a is: ${a}<br><br>`);
let a4 = a--;
document.writeln(`The value of a-- is: ${a4}<br>`);
document.writeln(`Now the value of a is: ${a}<br><br>`);

// Problem 2
let a5 = 2;
let b = 1;
let result = --a5 - --b + ++b + b--;
document.writeln(`The Value of a is: ${a5}<br>`);
document.writeln(`The Value of b is: ${b}<br>`);
document.writeln(`The Result is: ${result}<br><br>`);

// Problem 3
let name = prompt("Enter your name:");
alert(`Hello, ${name} Welcome to our website`);

// Problem 4
let num =  Number(prompt("Enter a number to show its multiplication table:"));
if (!num) {
    num = 5;
    }
    document.writeln(`<h2>Table of ${num}:</h2>`);
    document.writeln(`${num} x 1 = ${num *1}<br>`);
    document.writeln(`${num} x 2 = ${num *2}<br>`);
    document.writeln(`${num} x 3 = ${num *3}<br>`);
    document.writeln(`${num} x 4 = ${num *4}<br>`);
    document.writeln(`${num} x 5 = ${num *5}<br>`);
    document.writeln(`${num} x 6 = ${num *6}<br>`);
    document.writeln(`${num} x 7 = ${num *7}<br>`);
    document.writeln(`${num} x 8 = ${num *8}<br>`);
    document.writeln(`${num} x 9 = ${num *9}<br>`);
    document.writeln(`${num} x 10 = ${num *10}<br>`);


     // Problem 5
    let subject1 = prompt("Enter name of subject 1:");
let subject2 = prompt("Enter name of subject 2:");
let subject3 = prompt("Enter name of subject 3:");

let totalMarks = 100;

let mark1 = Number(prompt(`Enter marks obtained in ${subject1}:`));
let mark2 = Number(prompt(`Enter marks obtained in ${subject2}:`));
let mark3 = Number(prompt(`Enter marks obtained in ${subject3}:`));

let totalobtainedMarks = totalMarks * 3;
let obtainedMarks = mark1 + mark2 + mark3;

let percentage = (obtainedMarks / totalobtainedMarks) * 100;

let per1 = (mark1 / totalMarks) * 100;
let per2 = (mark2 / totalMarks) * 100;
let per3 = (mark3 / totalMarks) * 100;

document.writeln(`<h2>Marksheet</h2>`);
document.writeln("<table border='1'>");

document.writeln("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

document.writeln(`<tr><td>${subject1}</td><td>${totalMarks}</td><td>${mark1}</td><td>${per1.toFixed(2)}%</td></tr>`);

document.writeln(`<tr><td>${subject2}</td><td>${totalMarks}</td><td>${mark2}</td><td>${per2.toFixed(2)}%</td></tr>`);

document.writeln(`<tr><td>${subject3}</td><td>${totalMarks}</td><td>${mark3}</td><td>${per3.toFixed(2)}%</td></tr>`);


document.writeln("</table>");

document.writeln(`<h3>Total Marks: ${totalobtainedMarks}</h3>`);
document.writeln(`<h3>Obtained Marks: ${obtainedMarks}</h3>`);
document.writeln(`<h3>Overall Percentage: ${percentage.toFixed(2)}%</h3>`);
