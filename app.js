let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage1 = `image/dice${randomNumber1}.png`;
let image1 = document.getElementsByClassName("img1");
image1.setAttribute("src", randomDiceImage1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = `image/dice${randomNumber2}.png`;
let image2 = document.getElementsByClassName("img2");
image2.setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
