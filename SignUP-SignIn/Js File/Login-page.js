var loginButton = document.getElementById("loginButton");
var registerButton = document.getElementById("registerButton");

loginButton.onclick = function () {
    document.querySelector("#flipper").classList.toggle("flip");
};

registerButton.onclick = function () {
    document.querySelector("#flipper").classList.toggle("flip");
};

var CreateAcc = document.getElementById("CreateAcc");
var NextBtn = document.getElementById("NextBtn");
function gen(value) {
    if (value == 1) {
        CreateAcc.style.display = "block";
        NextBtn.style.display = "none";
    } else {
        NextBtn.style.display = "block";
        CreateAcc.style.display = "none";
    }
}
var FirstForm = document.getElementById("FirstF");
var SecondForm = document.getElementById("SecondF");
function otherd() {
    SecondForm.style.display = "block";
    FirstForm.style.display = "none";
}
function Noback(){
    alert("There is no Going Back")
}