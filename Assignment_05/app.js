// Problem 1 & 2
let a = 3;
let b = 5;
document.writeln(`<h1>Arithmetic Operations in JavaScript</h1>`)
document.writeln(`Sum of ${a} and ${b} is ${a + b}<br>`);
document.writeln(`Difference of ${a} and ${b} is ${a - b}<br>`);
document.writeln(`Product of ${a} and ${b} is ${a * b}<br>`);
document.writeln(`Division of ${a} and ${b} is ${a / b}<br>`);
document.writeln(`Modulus of ${a} and ${b} is ${a % b}<br><br>`);

// Problem 3
let number;
document.writeln(`Value after variable declaration is ${number}<br>`);
number = 5;
document.writeln(`Initial value: ${number}<br>`);
number ++;
document.writeln(`Value after increment is: ${number}<br>`);
number +=7;
document.writeln(`Value after addition is: ${number}<br>`);
number --;
document.writeln(`Value after decrement is: ${number}<br>`);
number %=3;
document.writeln(`The remainder is: ${number}<br><br>`);

// Problem 4
let TicketPrice = 600;
let noOfTickets = 5;
document.writeln(`<h1>Movie Ticket</h1>`)
document.writeln(`Total cost to buy ${noOfTickets} tickets to a movie is ${TicketPrice * noOfTickets}PKR<br><br>`);

// Problem 5
let table = 4;
document.writeln(`<h1>Table of ${table}</h1>`);
document.writeln(`${table} x 1 = ${table*1}<br>`);
document.writeln(`${table} x 2 = ${table*2}<br>`);
document.writeln(`${table} x 3 = ${table*3}<br>`);
document.writeln(`${table} x 4 = ${table*4}<br>`);
document.writeln(`${table} x 5 = ${table*5}<br>`);
document.writeln(`${table} x 6 = ${table*6}<br>`);
document.writeln(`${table} x 7 = ${table*7}<br>`);
document.writeln(`${table} x 8 = ${table*8}<br>`);
document.writeln(`${table} x 9 = ${table*9}<br>`);
document.writeln(`${table} x 10 = ${table*10}<br><br>`);

// // Problem 6
let Celsius = 25;
let Farenheit = (Celsius * 9/ 5) + 32;
document.writeln(`<h1>Temperature Converter</h1>`)
document.writeln(`${Celsius}°C is ${Farenheit}°F<br>`);
let FarenheitTemp = 70;
let CelsiusTemp = (FarenheitTemp -32) * 5/ 9;
document.writeln(`${FarenheitTemp}°F is ${CelsiusTemp}°C<br><br>`);

//Problem 7
let item1Price = 650;
let item2Price = 100;
let item1Quantity = 3;
let item2Quantity = 7;
let shippingCharges = 100;
let totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
document.writeln(`<h1>Shopping Cart</h1>`);
document.writeln(`Price of item 1 is ${item1Price}<br>`);
document.writeln(`Quantity of item 1 is ${item1Quantity}<br>`);
document.writeln(`Price of item 2 is ${item2Price}<br>`);
document.writeln(`Quantity of item 2 is ${item2Quantity}<br>`);
document.writeln(`Shipping Charges ${shippingCharges}<br><br>`);
document.writeln(`Total cost of your order is ${totalCost}<br><br>`);

// Problem 8
let totalMarks = 980;
let marksObtained = 804;
let percentage = (marksObtained / totalMarks) * 100;
document.writeln(`<h1>Mark Sheet</h1>`);
document.writeln(`Total Marks: ${totalMarks}<br>`);
document.writeln(`Marks Obtained: ${marksObtained}<br>`);
document.writeln(`Percentage: ${percentage}%<br><br>`);

//Problem 9
let usDollars = 10;
let saudiRiyals = 25;
document.writeln(`<h1>Currency in PKR</h1>`);
document.writeln(`Total Curreny in PKR: ${( usDollars * 104.80) + (saudiRiyals * 28)}<br><br>`);

// Problem 10
let num = 10;
document.writeln(`<h1>Arithmetic Sequence</h1>`)
document.writeln(`Result: ${(num + 5 ) * 10 /2}`);

//Problem 11
let currentYear = 2016;
let birthYear = 1992;
document.writeln(`<h1>Age Calculator</h1>`);
document.writeln(`Current Year: ${currentYear}<br>`);
document.writeln(`Birth Year: ${birthYear}<br>`);
document.writeln(`Your Age is: ${currentYear - birthYear} or ${currentYear - birthYear - 1} years old`);

// Problem 12
let radius = 20;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius * radius;
document.writeln(`<h1>The Geometrizer</h1>`);
document.writeln(`Radius of a circle: ${radius}<br>`);
document.writeln(`The circumference is: ${circumference}<br>`);
document.writeln(`The area is: ${area}<br><br>`);

// Problem 13
let favouriteSnack = "Chocolate Chip";
let currentAge = 15;
let maxAge = 65;
let amountPerDay = 3;
document.writeln(`<h1>The Lifetime Supply Calculator</h1>`);
document.writeln(`Favourite Snack: ${favouriteSnack}<br>`);
document.writeln(`Current Age: ${currentAge}<br>`);
document.writeln(`Maximum Age: ${maxAge}<br>`);
document.writeln(`Amount per day: ${amountPerDay}<br>`);
document.writeln(`You will need ${(maxAge - currentAge) * amountPerDay} ${favouriteSnack} to last you until the ripe old age of ${maxAge}`);