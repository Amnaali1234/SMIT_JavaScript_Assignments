// Problem 1
let city = prompt("Enter your city:").toLowerCase();
if (city === "karachi") {
    document.writeln("Welcome to the city of lights<br><br>");
}else if (city === "lahore"){
    document.writeln("Welcome to the city of gardens<br><br>");
}else if (city === "islamabad"){
    document.writeln("Welcome to the city of flowers<br><br>");
}else if (city === "quetta"){
    document.writeln("Welcome to the city of fruits<br><br>");
}else if (city === "peshawar"){
     document.writeln("Welcome to the city of hospitality<br><br>");

}else if (city === "multan"){
    document.writeln("Welcome to the city of saints<br><br>");

}else{
    document.writeln(`Welcome to ${city}<br><br>`)
}

//Problem 2
let gender = prompt("Enter your gender:").toLowerCase();
if (gender === "male"){
    document.writeln("Good Morning Sir!<br><br>");
}else if (gender === "female"){
    document.writeln("Good Morning Ma'am!<br><br>");
}else{
    document.writeln("Good Morning!<br><br>");
}

// Problem 3
let color = prompt("Enter the color of traffic signal:").toLowerCase();
if  (color === "red") {
    document.writeln("Must Stop<br><br>");
} else if (color === "yellow") {
    document.writeln("Ready to move<br><br>");
}else if (color === "green") {
    document.writeln("Move now<br><br>");
}else {
    document.writeln("Invalid color<br><br>");
}


// Problem 4
let fuel = Number(prompt("Enter remaining fuel in car (in litres:)"));
if (fuel < 0.25) {
    document.writeln("Please refill the fuel in your car<br><br>");
}else {
    document.writeln("You have enough fuel in your car<br><br>");
}

// Problem 5
// a
let a = 4;
if (++a === 5) {
    alert("Given condition for variable a is true");
} else {
    alert("Given condition a is false");
} 
// b
let b = 82;
if (b++ === 83) {
    alert("Given condition for variable b is true");
} else {
    alert("Given condition b is false");
}
// c
let c = 12;
if (c++ === 13) {
    alert("Condition 1 is true");
} else {
    alert("Condition 1 is false");
}
if (c === 13) {
    alert("Condition 2 is true");
}else {
    alert("Condition 2 is false");
} 
if (++c < 14) {
    alert("Condition 3 is true");
} else {
    alert("Condition 3 is false");
}
if (c === 14) {
    alert("Condition 4 is true");
} else {
    alert("Condition 4 is false");
}
// d
let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
} 
// e
if (true) {
    alert("True");
} 
if (false) {
    alert("False");
} 
// f
if("car" < "cat"){ 
alert("car is smaller than cat"); 
}

// Problem 6
let subject1 = Number(prompt("Enter marks for subject 1:"));
let subject2 = Number(prompt("Enter marks for subject 2:"));
let subject3 = Number(prompt("Enter marks for subject 3:"));
let totalMarks = 300;
let obtainedMarks = subject1 + subject2 + subject3;
let percentage = (obtainedMarks / totalMarks) * 100;
let grade;
let remarks;
if (percentage >= 80){
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}
document.write(`<h2>Mark Sheet</h2><br> Total Marks: ${totalMarks}<br> Marks Obtained: ${obtainedMarks} <br> Percentage: ${percentage} % <br> Grade: ${grade} <br> Remarks: ${remarks} <br><br>`);

// Problem 7
let secretNumber = 5;
let userGuess = Number(prompt("Guess the secret number (between 1 to 10):"));
if (userGuess === secretNumber) {
    document.writeln("Bingo! Correct answer<br><br>");
} else if (userGuess + 1 === secretNumber) {
    document.writeln("Close enough to the correct answer<br><br>");
} else{
    document.writeln("Wrong guess<br><br>");
}

// Problem 8
let number = Number(prompt("Enter a number:"));
if (number % 3 === 0) {
    document.writeln(`${number} is divisible by 3<br><br>`);
} else {
    document.writeln(`${number} is not divisible by 3<br><br>`);
}

// Problem 9 
let num = Number(prompt("Enter a number:"));
if (num % 2 === 0) {
    document.writeln(`${num} is an even number<br><br>`);
} else {
    document.writeln(`${num} is an odd number<br><br>`);
}

// Problem 10
let temperature = Number(prompt("Enter the temperature:"));
if (temperature > 40) {
    document.writeln("It is too hot outside<br><br>");
} else if (temperature > 30) {
    document.writeln("The weather today is normal<br><br>");
} else if (temperature > 20) {
    document.writeln("Today's weather is cool<br><br>");
} else if (temperature > 10) {
    document.writeln("OMG! Today's weather is so cool<br><br>");
} else {
    document.writeln("It's freezing outside<br><br>");
}

// Problem 11
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operation = prompt("Enter operation (+, -, *, /, %):");
let result;
if (operation === "+") {
    result = num1 + num2;
    document.writeln(`Result: ${num1} + ${num2} = ${result}<br><br>`);
} else if (operation === "-") {
    result = num1 - num2;
    document.writeln(`Result: ${num1} - ${num2} = ${result}<br><br>`);
} else if (operation === "*") {
    result = num1 * num2;
    document.writeln(`Result: ${num1} * ${num2} = ${result}<br><br>`);
} else if (operation === "/") {
    result = num1 / num2;
    document.writeln(`Result: ${num1} / ${num2} = ${result}<br><br>`);
} else if (operation === "%") {
    result = num1 % num2;
    document.writeln(`Result: ${num1} % ${num2} = ${result}<br><br>`);
} else {
    document.writeln("Invalid operation<br><br>");
}
