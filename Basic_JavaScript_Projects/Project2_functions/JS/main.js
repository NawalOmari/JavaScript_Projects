// main.js

function updateText() { // Assign two variables
    let name = "Nawal";
    let age = 41;

    // Get the element by ID and update its content
    document.getElementById("info").innerHTML = `Name: ${name}, Age: ${age}`;
}

function myFunsction () { // Function that use += operator
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence; // Update the element with the concatenated string
}