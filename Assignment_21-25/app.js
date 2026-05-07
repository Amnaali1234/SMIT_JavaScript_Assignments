// Problem 1
let firstName = prompt("Enter your first name?");
let lastName = prompt("Enter your last name?");
let fullName = firstName.concat(" ", lastName);
alert(`Hello, ${fullName}`);

// Problem 2
let mobileModel = prompt("Please enter your favourite mobile model.");
document.writeln(`My favourite mobile phone is ${mobileModel}<br>`);
document.writeln(`Length of string: ${mobileModel.length}`);

//Problem 3
let word = "Pakistani";
document.writeln(`String: ${word}<br>Index of 'n': 
                 ${word.indexOf("n")}`);

// Problem 4  
let word = "Hello World";
document.writeln(`String: ${word}<br>Last index of 'l': 
                 ${word.lastIndexOf("l")}`);      

// Problem 5
let word = "Pakistani";
document.writeln(`String: ${word}<br>Character at index 3: 
                 ${word[3]}`); 

// Problem 6
let firstName = prompt("Enter your first name.");
let lastName = prompt("Enter your last name.");
let fullName = firstName.concat(" ", lastName);
alert(`Hello, ${fullName}`);

// Problem 7
let city = 'Hyderabad';
document.writeln(`City: ${city}<br>
    After replacement: ${city.replace('Hyder','Islam')}`);

// Problem 8
let message = "Hoorain and Husnain are best friends. They play cricket and football together.";
document.writeln(message.replaceAll('and','&'));

// Problem 9
let str = "472";
let num = Number(str);
document.writeln(`Value ${str}<br>`);
document.writeln(`Type: ${typeof str}<br><br>`);
document.writeln(`Value: ${num}<br>`);
document.writeln(`Type: ${typeof num}<br><br>`);

// Problem 10
let userInput = prompt("Enter a astring to convert to upper case");
let upper = userInput.toUpperCase();
document.writeln(`User input: ${userInput}<br>`);
document.writeln(`Upper case: ${upper}<br><br>`);

// Problem 11
let user = prompt("Enter a string to convert to title case");
let titleCase =  user.charAt(0).toUpperCase() + user.slice(1);
document.writeln(`User input: ${user}<br>`);
document.writeln(`Title case: ${titleCase}<br><br>`);

// Problem 12
let num = 35.36;
let result = num.toString().replace(".", "");
document.writeln(`Number: ${num}<br>`);
document.writeln(`Result: ${result}<br><br>`);

// Problem 13
let username = prompt("Enter your username");
let isValid = true;
for (let i = 0; i < username.length; i++){
let code = username.charCodeAt(i);
if (code === 33 || code === 44 || code === 46 || code === 64){
    isValid = false;
    break;
}

}
if (isValid) {
    document.writeln(`Username is valid: ${username}`);
}  else {
    document.writeln("Please enter a valid username (no special symbols allowed).");
}

// Problem 14
let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let userInput = prompt("Enter item to search:");

let found = false;

for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput.toLowerCase()) {
        found = true;
        break;
    }
}

if (found) {
    document.writeln(userInput + " is available in the list.");
} else {
    document.writeln(userInput + " is not available in the list.");
}

// Problem 15
let password;

do {
    password = prompt("Enter your password");

    if (password === null) {
        alert("Cancelled");
        break;
    }

    let hasAlphabet = false;
    let hasNumber = false;

    if (password.length < 6) {
        alert("At least 6 characters required");
        continue;
    }

    if (password[0] >= '0' && password[0] <= '9') {
        alert("Should not start with number");
        continue;
    }

    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            hasAlphabet = true;
        } else if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }

    if (!hasAlphabet || !hasNumber) {
        alert("Must contain alphabets and numbers");
    } else {
        alert("Valid password ✅");
        break;
    }

} while (true);

// Problem 16
let university = "University of Karachi";
let chars = university.split("");
document.writeln(`${chars.join("<br>")}<br><br>`);


// Problem 17
let input = prompt("Enter a country name:");
let lastChar = input.charAt(input.length - 1);
document.writeln(`User input: ${input} <br> Last Character of input: ${lastChar}`);

// Problem 18
let str = "The quick brown fox jumps over the lazy dog";
let count = (str.match(/the/gi) || []).length;
document.writeln(`Text: ${str}<br>There are ${count} occurrence(s) of word 'the'.`);