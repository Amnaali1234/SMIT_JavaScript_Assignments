function showMsg(mobileName) {
    alert(`Thank you for purchasing a ${mobileName} from us!`);
}

function deleteRow(button) {
    button.parentNode.parentNode.remove();
}

function changeImage() {
    document.getElementById("myImage").src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSsB39MX1FhzBZZ-KQUTDzamR2MAZxzosRnA&s";
}

function resetImage() {
    document.getElementById("myImage").src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ii3Pp1iA8W1Dxatlf_CGTBlnwSO5QBAFzQ&s";
}

let count = 0;

function increase() {
    count++;
    document.getElementById("count").innerHTML = count;
}

function decrease() {
    count--;
    document.getElementById("count").innerHTML = count;
}