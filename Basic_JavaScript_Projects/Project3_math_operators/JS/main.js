function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math1").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math2").innerHTML = "6 x 8 = " + simple_Math;
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math3").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {  // Function that uses multiple operators
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math4").innerHTML = "(1 + 2) * 10 / 2 - 5 =" + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math5").innerHTML = "25 % 6 =" + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math6").innerHTML = -x;
}

var X = 5;
X++;
document.write(X);

var Y = 5.25;
Y--;
document.write(Y);

window.alert(Math.random() * 100);