function full_Sentence() {//Concatenate method
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence.";
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
function slice_Method() {//Slice method
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
function uppercase_Method() {//Uppercase method
    var str = "Hello World!";
    var res = str.toUpperCase();
    document.getElementById("uppercase").innerHTML = res;
}
function search_Method() {//Search method
    var str = "Visit W3Schools!";
    var n = str.search("W3Schools");
    document.getElementById("search").innerHTML = n;
}
function string_Method() {//String method
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
function precision_Method() {//Precision method
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
function fixed_Method() {//Fixed method
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("Fixed").innerHTML = n;
}
function valueOf_Method() {//Value of method
    var str = "Hello World!";
    var res = str.valueOf();
    document.getElementById("Value_of").innerHTML = res;
}