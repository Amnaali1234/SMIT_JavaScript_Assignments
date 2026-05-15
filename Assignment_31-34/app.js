let currentDate = new Date();


// Problem 1
document.writeln(`Current Date and Time: ${currentDate}<br>`);


// Problem 2
let currentMonth = currentDate.toLocaleString('default', { month: 'long' });
alert(`Current Month: ${currentMonth}`);


// Problem 3
let currentDay = currentDate.toLocaleString('default', { weekday: 'short' });
alert(`Today is ${currentDay}`);


// Problem 4
let day = currentDate.getDay();
if (day === 0 || day === 6) {
    alert("It's Fun day");
} else {
    alert("It's a weekday");
}


// Problem 5
let date = currentDate.getDate();
if (date < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}


// Problem 6
let now = new Date();
let currentTime = now.getTime();
let minutes = currentTime / (1000 * 60);

document.writeln(`Current Date and Time: ${now}<br>`);
alert(`Elapsed milliseconds since January 1, 1970: ${currentTime}`);
alert(`Elapsed minutes since January 1, 1970: ${minutes}`);


// Problem 7
let hours = currentDate.getHours();
if (hours < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}


// Problem 8
let laterDate = new Date(2020, 11, 31);
document.writeln(`Later Date: ${laterDate}<br>`);


// Problem 9
let ramadanDate = new Date("June 18, 2015");
let timeDiff = currentDate.getTime() - ramadanDate.getTime();
let daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
alert(`${daysPassed} days have passed since June 18, 2015`);


// Problem 10
let referenceDate = new Date("January 1, 2015");
let secondsDiff = Math.floor((currentDate.getTime() - referenceDate.getTime()) / 1000);
alert(`Elapsed seconds since January 1, 2015: ${secondsDiff}`);


// Problem 11 
let currentHour = currentDate.getHours();
let oneHourBack = new Date(currentDate);
oneHourBack.setHours(currentHour - 1);
document.writeln(`Updated Date (1 hour back): ${oneHourBack}<br>`);


// Problem 12 
let hundredYearsBack = new Date(currentDate);
hundredYearsBack.setFullYear(currentDate.getFullYear() - 100);
document.writeln(`Date 100 years back: ${hundredYearsBack}<br>`);


// Problem 13 
let userAge = Number(prompt("Enter your age:"));
let birthYear = currentDate.getFullYear() - userAge;
alert(`Your birth year is: ${birthYear}`);


// Problem 14 (Bill Generator)
let customerName = "ABC Customer";
let currentMonthName = currentDate.toLocaleString('default', { month: 'long' });

let numberOfUnits = 100;
let chargesPerUnit = 10;

let netAmountPayable = numberOfUnits * chargesPerUnit;
let latePaymentSurcharge = 50;
let grossAmountPayable = netAmountPayable + latePaymentSurcharge;

document.writeln(`<h2>K-Electric Bill</h2>`);
document.writeln(`<p>Customer Name: ${customerName}</p>`);
document.writeln(`<p>Month: ${currentMonthName}</p>`);
document.writeln(`<p>Number of Units: ${numberOfUnits}</p>`);
document.writeln(`<p>Charges per Unit: ${chargesPerUnit}</p>`);
document.writeln(`<p>Net Amount Payable (within due date): ${netAmountPayable.toFixed(2)}</p>`);
document.writeln(`<p>Late Payment Surcharge: ${latePaymentSurcharge.toFixed(2)}</p>`);
document.writeln(`<p>Gross Amount Payable (after due date): ${grossAmountPayable.toFixed(2)}</p>`);