var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "Images/" + randomDiceImage1;
var image1 = document.querySelectorAll(".img1")[0];
image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "Images/" + randomDiceImage2;
var image2 = document.querySelectorAll(".img2")[0];
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}
