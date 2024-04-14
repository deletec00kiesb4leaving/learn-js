function checkColor(){
    let white = "rgb(255, 255, 255)"

    document.body.style.backgroundColor = white;
    document.getElementById("color").innerHTML = white;
}

function randomGenerator(){
    let final = "";
    final = Math.floor(Math.random()*10);

    return final;
}

function color(){
    let finalColor = "";
    let audio = new Audio("./splash_tiny05.wav");

    for (let i=0; i < 6; i++){
      finalColor += randomGenerator();
    }

    document.body.style.backgroundColor = "#" + finalColor;
    document.getElementById("color").innerHTML = document.body.style.backgroundColor;
    audio.play();
}