function Call_Loop(){
    var Digit = "";
    var x = 1;
    while (x < 11){
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
function Instrument_Function(){
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var y;
    for (y = 0; y < Instruments.length; y++){
        Content += Instruments[y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}