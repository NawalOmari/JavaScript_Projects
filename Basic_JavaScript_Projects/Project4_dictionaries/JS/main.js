function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    delete Animal.Sound; // Deletes the Sound key value pair
    document.getElementById("Dictionary").innerHTML = Animal.Sound; // Displays the value of the Sound key
}