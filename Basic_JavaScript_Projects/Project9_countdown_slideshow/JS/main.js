function countdown(){
    var secounds = document.getElementById("seconds").value;
    function tick(){
        secounds = secounds - 1;
        timer.innerHTML = secounds;
        setTimeout(tick, 1000);
    if(secounds == -1){
        alert("Time's up!");
        clearInterval(time);
        timer.innerHTML = "";
        }
    }
    tick();
}