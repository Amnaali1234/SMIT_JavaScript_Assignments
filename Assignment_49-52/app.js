// SIGNUP
let signupForm = document.getElementById("signupForm");
let output = document.getElementById("output");

signupForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    let name = document.getElementById("signupName").value;
    let email = document.getElementById("email").value;

    output.innerHTML = `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
    `;

    signupForm.reset();
});

// READ MORE
function readMore(){
    let dots = document.getElementById("dots");
    let more = document.getElementById("moreText");
    let btn = document.getElementById("readBtn");

    if(more.style.display === "inline"){
        more.style.display = "none";
        btn.innerText = "Read More";
    }else{
        more.style.display = "inline";
        btn.innerText = "Read Less";
    }
}

// STUDENT SYSTEM
let studentForm = document.getElementById("studentForm");
let tableBody = document.getElementById("tableBody");
let currentRow = null;

studentForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    let name = document.getElementById("studentName").value;
    let age = document.getElementById("studentAge").value;
    let course = document.getElementById("studentCourse").value;

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>
            <button class="edit-btn" onclick="editRow(this)">Edit</button>
            <button class="delete-btn" onclick="deleteRow(this)">Delete</button>
        </td>
    `;

    tableBody.appendChild(row);
    studentForm.reset();
});

// DELETE
function deleteRow(btn){
    btn.parentElement.parentElement.remove();
}

// EDIT
function editRow(btn){
    currentRow = btn.parentElement.parentElement;

    document.getElementById("editBox").style.display = "block";

    document.getElementById("editName").value = currentRow.children[0].innerText;
    document.getElementById("editAge").value = currentRow.children[1].innerText;
    document.getElementById("editCourse").value = currentRow.children[2].innerText;
}

// UPDATE
function updateRow(){
    currentRow.children[0].innerText = document.getElementById("editName").value;
    currentRow.children[1].innerText = document.getElementById("editAge").value;
    currentRow.children[2].innerText = document.getElementById("editCourse").value;

    document.getElementById("editBox").style.display = "none";
}