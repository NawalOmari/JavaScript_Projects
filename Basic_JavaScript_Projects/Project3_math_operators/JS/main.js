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

