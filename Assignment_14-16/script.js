// Problem #01
let studentNames = [];
console.log(studentNames);

// Problem #02
let studentNames2 = new Array();
console.log(studentNames2);

// Problem #03
let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);

// Problem #04
let numbers = [10, 20, 30, 40];
console.log(numbers);

// Problem #05
let personalInfo = [true, false, true];
console.log(personalInfo);


// Problem #06
let mixedArray = ["Ahmed", 18, true, null];


// Problem #07
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

document.write('<h1>Qualifications</h1>');
document.write(`1) ${qualifications[0]}<br>`);
document.write(`2) ${qualifications[1]}<br>`);
document.write(`3) ${qualifications[2]}<br>`);
document.write(`4) ${qualifications[3]}<br>`);
document.write(`5) ${qualifications[4]}<br>`);
document.write(`6) ${qualifications[5]}<br>`);
document.write(`7) ${qualifications[6]}<br>`);
document.write(`8) ${qualifications[7]}<br>`);

// Problem #08
let students = ["Micheal", "John", "Tony"];
let scores = [320, 230, 480];
let totalMarks = 500;

document.write(`Score of ${students[0]} is ${scores[0]}. Percentage: ${(scores[0] / totalMarks) * 100}% <br>`);
document.write(`Score of ${students[1]} is ${scores[1]}. Percentage: ${(scores[1] / totalMarks) * 100}% <br>`);
document.write(`Score of ${students[2]} is ${scores[2]}. Percentage: ${(scores[2] / totalMarks) * 100}% <br>`);

// Problem 09
let colors = ["Red", "Green", "Blue"];
document.write(`<b>Initial Colors:</b> ${colors} <br><br>`);

// a) Add color to beginning
let colorStart = prompt("Which color you want to add at beginning?");
colors.unshift(colorStart);
document.write(`<b>After adding at beginning:</b> ${colors} <br><br>`);

// b) Add color to end
let colorEnd = prompt("Which color you want to add at end?");
colors.push(colorEnd);
document.write(`<b>After adding at end:</b> ${colors} <br><br>`);

// c) Add two more colors to beginning
colors.unshift("purple", "Orange");
document.write(`<b>After adding two colors at beginning:</b> ${colors} <br><br>`);

// d) Delete first color
colors.shift();
document.write(`<b>After deleting first color:</b> ${colors} <br><br>`);

// e) Delete last color
colors.pop();
document.write(`<b>After deleting last color:</b> ${colors} <br><br>`);

// f) Add color at desired index
let indexAdd = prompt("At which index you want to add color?");
let colorAdd = prompt("Enter color name?");
colors.splice(indexAdd, 0, colorAdd);
document.write(`<b>After adding color at index:</b> ${colors} <br><br>`);

// g) Delete color from desired index
let indexDel = prompt("At which index you want to delete color?");
let countDel = prompt("How many colors you want to delete?");
colors.splice(indexDel, countDel);
document.write(`<b>After deleting colors:</b> ${colors} <br><br>`);

// Problem 10
let scoresArray = [320, 230, 480, 120];

document.write(`<b>Original Scores:</b> ${scoresArray} <br>`);

scoresArray.sort(function(a, b) {
    return a - b;
});

console.log(scoresArray);
document.write(`<b>Sorted Scores (Ascending):</b> ${scoresArray}`);

// Problem 11
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(0, 3);

document.write(`<b>Cities list:</b> ${cities} <br>`);
document.write(`<b>Selected cities:</b> ${selectedCities}`);

// Problem 12
let arr = ["This", "is", "my", "cat"];
let result = arr.join(" ");
document.write(result);

// Problem 13
let names = [];
names.push("Ali");
names.push("Ahmed");
names.push("Sara");

document.write(`<b>Names:</b> ${names} <br><br>`);

document.write(`Out: ${names.shift()} <br>`);
document.write(`Out: ${names.shift()} <br>`);
document.write(`Out: ${names.shift()} <br>`);

// Problem 14
let devices = [];
devices.push("Mouse");
devices.push("Keyboard");
devices.push("Monitor");
devices.push("Printer");

document.write(`Out: ${devices.pop()} <br>`);
document.write(`Out: ${devices.pop()} <br>`);
document.write(`Out: ${devices.pop()} <br>`);
document.write(`Out: ${devices.pop()} <br>`);

// Problem 15
let manufactures = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write(`<select>
    <option>${manufactures[0]}</option>
    <option>${manufactures[1]}</option>
    <option>${manufactures[2]}</option>
    <option>${manufactures[3]}</option>
    <option>${manufactures[4]}</option>
    <option>${manufactures[5]}</option>
</select>`);