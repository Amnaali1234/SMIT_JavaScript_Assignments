// Problem 1
function power(a, b) {
    let result = 1;

    for (let i = 0; i < b; i++) {
        result = result * a;
    }

    return result;
}

console.log(power(2, 3));

// Problem 2
function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Leap Year");
    } else {
        console.log("Not a Leap Year");
    }
}

leapYear(2020);

// Problem 3
function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function calculateArea(a, b, c) {
    let S = calculateS(a, b, c);
    let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));

    return area;
}

console.log(calculateArea(3, 4, 5));

// Problem 4
function averageMarks(mark1, mark2, mark3) {
    return (mark1 + mark2 + mark3) / 3;
}

function percentage(mark1, mark2, mark3) {
    let totalMarks = 300;
    let obtainedMarks = mark1 + mark2 + mark3;

    return (obtainedMarks / totalMarks) * 100;
}

function mainFunction() {
    let mark1 = 85;
    let mark2 = 60;
    let mark3 = 90;

    let avg = averageMarks(mark1, mark2, mark3);
    let percent = percentage(mark1, mark2, mark3);

    console.log("Average:", avg.toFixed(2));
    console.log("Percentage:", percent.toFixed(2) + "%");
}

mainFunction();

// Problem 5
function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }

    return -1;
}

console.log(customIndexOf("Hello", "e"));

// Problem 6
function deleteVowels(sentence) {
    let result = "";

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i].toLowerCase();

        if (
            char !== "a" &&
            char !== "e" &&
            char !== "i" &&
            char !== "o" &&
            char !== "u"
        ) {
            result += sentence[i];
        }
    }

    return result;
}

console.log(deleteVowels("Hello World"));

// Problem 7
function countVowelPairs(text) {
    let count = 0;

    for (let i = 0; i < text.length - 1; i++) {
        let pair = text[i].toLowerCase() + text[i + 1].toLowerCase();

        switch (pair) {
            case "aa":
            case "ae":
            case "ai":
            case "ao":
            case "au":
            case "ea":
            case "ee":
            case "ei":
            case "eo":
            case "eu":
            case "ia":
            case "ie":
            case "ii":
            case "io":
            case "iu":
            case "oa":
            case "oe":
            case "oi":
            case "oo":
            case "ou":
            case "ua":
            case "ue":
            case "ui":
            case "uo":
            case "uu":
                count++;
                break;
        }
    }

    return count;
}

console.log(countVowelPairs("Please read"));

// Problem 8
function toMeters(km) {
    return km * 1000;
}

function toFeet(km) {
    return km * 3280.84;
}

function toInches(km) {
    return km * 39370.1;
}

function toCentimeters(km) {
    return km * 100000;
}

let distance = Number(prompt("Enter distance in KM:"));

console.log("Meters:", toMeters(distance));
console.log("Feet:", toFeet(distance));
console.log("Inches:", toInches(distance));
console.log("Centimeters:", toCentimeters(distance));

// Problem 9
function calculateOvertime(hours) {
    if (hours > 40) {
        return (hours - 40) * 12;
    }

    return 0;
}

let hoursWorked = Number(prompt("Enter total working hours:"));

console.log("Overtime Pay: Rs. " + calculateOvertime(hoursWorked));

// Problem 10
function currencyNotes(amount) {
    let hundred = Math.floor(amount / 100);
    amount %= 100;

    let fifty = Math.floor(amount / 50);
    amount %= 50;

    let ten = Math.floor(amount / 10);

    console.log("100 Notes:", hundred);
    console.log("50 Notes:", fifty);
    console.log("10 Notes:", ten);
}

let amount = Number(prompt("Enter amount:"));

currencyNotes(amount);