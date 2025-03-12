function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
function Vehicle(Make, Model, Year, Color) { // Constructor function
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // Creates a new object using the Vehicle constructor
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); // Creates a new object using the Vehicle constructor
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); // Creates a new object using the Vehicle constructor
function my_Function1() {
    document.getElementById("New_and_This1").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
function my_Function2() {
    document.getElementById("New_and_This2").innerHTML = "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model + " manufactured in " + Emily.Vehicle_Year;
}
function my_Function3() {
    document.getElementById("New_and_This3").innerHTML = "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model + " manufactured in " + Jack.Vehicle_Year;
}
function count_Function() {// Nested function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
