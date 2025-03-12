document.write(typeof "World!"); // Output: number
document.write("<br>");
document.write(typeof 3); // Output: number
document.write("<br>");
document.write("10"+5); // Output: 105
document.write("<br>");
document.write(2E310); // Output: Infinity
document.write("<br>");
document.write(-3E310); // Output: -Infinity
document.write("<br>");
document.write(10>2); // Output: true
document.write("<br>");
document.write(10<2); // Output: false
document.write("<br>");
console.log(2+2); // Output: 4
document.write("<br>");
console.log(2>3); // Output: false
document.write("<br>");
document.write(10==10); // Output: true (equal value)
document.write("<br>");
document.write(3==11); // Output: false (not equal value)
document.write("<br>");
X = 10; // Assigns 10 to X
Y = 10; // Assigns 10 to Y
document.write(X===Y); // Output: true (equal value and equal type)
document.write("<br>");
A = 82; // Assigns 82 to A
B = "82"; // Assigns 82 to B
document.write(A===B); // Output: false (equal value but different type)
document.write("<br>");
A = "Magnus"; // Assigns Magnus to A
B = "Magnus"; // Assigns Magnus to B
document.write(A===B); // Output: true (equal and same type)
document.write("<br>");
document.write(5>2 && 10>4); // Output: true
document.write("<br>");
document.write(5>10 && 10>4); // Output: false
document.write("<br>");
document.write(5>10 || 10>4); // Output: true
document.write("<br>");
document.write(5>10 || 10>20); // Output: false
document.write("<br>");
function my_Function1() {  // Function to test coercion
    document.getElementById("Test1").innerHTML = 0/0; // Output: NaN
}
function my_Function2() { // Function to test coercion
    document.getElementById("Test2").innerHTML = isNaN('This is a string'); // Output: true
}
function my_Function3() { // Function to test coercion
    document.getElementById("Test3").innerHTML = isNaN('007'); // Output: false
}
function my_Function4() {  // Function to test infinity
    document.getElementById("Test4").innerHTML = 2E310; // Output: Infinity
}
function my_Function5() { // Function to test not operator
    document.getElementById("Test5").innerHTML = !(5>10); // Output: true
}
function my_Function6() { // Function to test not operator
    document.getElementById("Test6").innerHTML = !(20>10); // Output: false
}
