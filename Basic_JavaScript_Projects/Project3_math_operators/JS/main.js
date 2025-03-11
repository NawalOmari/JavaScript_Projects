function addition_Function() { // Function that uses addition operators
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() { // Function that uses subtraction operators
    var Subtraction = 5 - 2;
    document.getElementById("Math1").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() { // Function that uses multiplication operators
    var simple_Math = 6 * 8;
    document.getElementById("Math2").innerHTML = "6 x 8 = " + simple_Math;
}

function division() { // Function that uses division operators
    var simple_Math = 48 / 6;
    document.getElementById("Math3").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {  // Function that uses multiple operators
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math4").innerHTML = "(1 + 2) * 10 / 2 - 5 =" + simple_Math;
}

function modulus_Operator() { // Function that uses modulus operators
    var simple_Math = 25 % 6;
    document.getElementById("Math5").innerHTML = "25 % 6 =" + simple_Math;
}

function negation_Operator() { // Function that uses negation operators
    var x = 10;
    document.getElementById("Math6").innerHTML = -x;
}

function increment() { // Function that uses increment operators
    var value = document.getElementById("IncrementText").innerHTML;
    value++;
    document.getElementById("IncrementText").innerHTML = value;
}

function decrement() { // Function that uses decrement operators
    var value = document.getElementById("DecrementText").innerHTML;
    value--;
    document.getElementById("DecrementText").innerHTML = value;
}


window.alert(Math.random() * 100);