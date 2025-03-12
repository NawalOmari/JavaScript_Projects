var X=10;
function Add_numbers_1() {
    document.write(20+X+"<br>");
}
function Add_numbers_2() {
    document.write(X+100);
}
Add_numbers_1();
Add_numbers_2();
document.write("<br>");
function Add_numbers_3() {
    var Y=10;
    document.write(20+Y+"<br>");
}
//function Add_numbers_4() { 
  //  document.write(Y+100);
//}
Add_numbers_3();
//Add_numbers_4();
document.write("<br>");
function Add_numbers_5() {
    var Z=10;
    console.log(20+Z);
}
//function Add_numbers_6() {
  //  console.log(Z+100);
//}
Add_numbers_5();
//Add_numbers_6();
document.write("<br>");
if (1<2) {
    document.write("The left number is smaller than the number on the right.");
}
document.write("<br>");
function get_Date() {
    if (new Date().getHours()<18) {
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
}
function Age_Function() {
    Age=document.getElementById("Age").value;
    if (Age>=18) {
        Vote="You are old enough to vote!";
    }
    else {
        Vote="You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML=Vote;
}

