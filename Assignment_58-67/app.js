// Problem 1
// i. 
let mainContent = document.getElementById("main-content");

console.log("Main Content:");
console.log(mainContent);

// ii. 
console.log("Child Elements:");

for (let i = 0; i < mainContent.children.length; i++) {
    console.log(mainContent.children[i]);
}

// iii. 
let renderElements = document.getElementsByClassName("render");
let output = document.createElement("div");
output.innerHTML = "<h2>Elements of Class 'render'</h2>";

for (let i = 0; i < renderElements.length; i++) {
    output.innerHTML += renderElements[i].innerHTML + "<br>";
}

document.body.appendChild(output);

// iv. 
document.getElementById("first-name").value = "Alex";

// v.
document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";

// Problem 2
// i. 
let formContent = document.getElementById("form-content");

console.log("Node Type of form-content:");
console.log(formContent.nodeType);

// ii. 
let lastName = document.getElementById("lastName");

console.log("Node Type of lastName:");
console.log(lastName.nodeType);

console.log("Child Node Type of lastName:");
console.log(lastName.firstChild.nodeType);

// iii. 
lastName.firstChild.nodeValue = "Last Name : Ali";

// iv. 
console.log("First Child:");
console.log(mainContent.firstElementChild);

console.log("Last Child:");
console.log(mainContent.lastElementChild);

// v. 
console.log("Previous Sibling:");
console.log(lastName.previousElementSibling);

console.log("Next Sibling:");
console.log(lastName.nextElementSibling);

// vi. 
let email = document.getElementById("email");

console.log("Parent Node of Email:");
console.log(email.parentNode);

console.log("Parent Node Type:");
console.log(email.parentNode.nodeType);