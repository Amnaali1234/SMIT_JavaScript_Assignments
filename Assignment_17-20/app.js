// Problem 1 & 2
let arr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
document.writeln("<h3>Problem 1 & 2</h3>");
document.writeln("<h3>Multidimensional Array<br></h3>");
for (let i = 0; i < arr. length; i ++){
    document.writeln(`${arr[i]}<br>`);
}


// Problem 3
let count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.writeln("<h3>Problem 3</h3>");
document.writeln("<h3>Counting<br></h3>");
for (let i = 0; i < count.length; i ++){
    document.writeln(`${count[i]}<br>` );
}

// Problem 4
let num = Number(prompt("Enter a number to show its multiplication table:"));
let length = Number(prompt("Enter length of multiplication table:"));

document.writeln("<h3>Problem 4</h3>");
document.writeln("<h3>Multiplication Table<br></h3>");
document.writeln(`Multiplication table of ${num}<br>`);
document.writeln(`Length ${length}<br>`);
for (let i = 1; i <= length; i ++) {
    document.writeln(`${num} x ${i} = ${num * i}<br>`);
}

// Problem 5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.writeln("<h3>Problem 5</h3>");
document.writeln("<h3>Fruits List</h3>");
for (let i = 0; i < fruits.length; i ++) {
  document.writeln(`${fruits[i]}<br>`);
}
 document.writeln("<h3>Index with fruits</h3>")
for (let i = 0; i < fruits.length; i ++) {
 document.writeln(`Element at index ${i} is ${fruits[i]}<br>`);
} 

  // Problem 6
document.writeln("<h3>Problem 6</h3>");
document.writeln("<h3>Counting</h3>");
for (let i = 1; i <= 15; i ++) {
    document.writeln(`${i}`);
}
document.writeln("<h3>Reverse Counting</h3>");
for (let i = 10; i >= 1; i --) {
    document.writeln(`${i}`);
}
document.writeln("<h3>Even Numbers</h3>");
for (let i = 0; i <= 20; i += 2) {
    document.writeln(`${i}`);
}
document.writeln("<h3>Odd Numbers</h3>");
for (let i = 1; i <= 20; i += 2) {
    document.writeln(`${i}`);
}
document.writeln("<h3>Series</h3>");
for (let i = 2; i <= 20; i += 2) {
    document.writeln(`${i}k`);
}

// Problem 7
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
document.writeln("<h3>Problem 7</h3>");
document.writeln("<h3>Bakery Items</h3>");
let found = false;
for (let i = 0; i <A.length; i ++) {
    if (A[i].toLowerCase() === search.toLowerCase()) {
        found = true;
        break;
    } else {
        found = false;
    } 
} 
if (found) {
    document.writeln(`${search} is available at index ${A.indexOf(search)} in our bakery`);

} else {
    document.writeln(`We are sorry. ${search} is not available in our bakery`);
}

// Problem 8
let arr1 = [24, 53, 78, 91, 12];
document.writeln("<h3>Problem 8</h3>");
document.writeln("<h3>Largest Number</h3>");
let Largest = arr1[0];
for (let i = 1; i < arr1.length; i ++) {
    if (arr1[i] > Largest) {
        Largest = arr1[i];
    } 
} 
document.writeln(`Array items: ${arr1}<br>`);
document.writeln(`The Largest number is ${Largest}`);

// Problem 9
let arr2 = [24, 53, 78, 91, 12];

document.writeln("<h3>Problem 9</h3>");
document.writeln("<h3>Smallest Number</h3>");

let Smallest = arr2[0];

for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] < Smallest) {
        Smallest = arr2[i];
    }
}

document.writeln(`Array items: ${arr2}<br>`);
document.writeln(`The Smallest number is ${Smallest}`);

// Problem 10
let numArr = [];
document.writeln("<h3>Problem 10</h3>");
document.writeln("<h3>Multiples of 5</h3>");
for (let i = 1; i <= 100; i ++) {
    if (i % 5 === 0) {
        numArr.push(i);

    } else {
        continue;
    }
} 
document.writeln(`Array items: ${numArr}<br>`);