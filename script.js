var input1 = document.getElementsByClassName("color")[0];
var input2 = document.getElementsByClassName("color")[1];
var output = document.querySelector("h3");
var body = document.querySelector("body");


function colorChanger() {
	body.style.background = "linear-gradient(to right, "+input1.value+", "+input2.value+")";
	output.innerHTML = "linear-gradient(to right, "+input1.value+", "+input2.value+");";
}


input1.addEventListener("input",colorChanger);
input2.addEventListener("input",colorChanger);