// var randomNumber1 = Math.random() * 6;
// var round = Math.round(randomNumber1);
// console.log(round); 
// var newSource = "dice" + str(round) + ".png"
// document.getElementsByClassName("img1")
// imgSrcs = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
// randomNumber = Math.random() * 6;
// newSrc = "images/dice" + Math.round(randomNumber) + ".png";
// console.log(newSrc);
// var img1 = document.querySelectorAll("img")[0];

// img1.setAttribute("src", newSrc);

images = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
newSrc ="images/dice" + Math.floor(Math.random() * 6 + 1 ) + ".png";
var Img1 = document.querySelectorAll("img")[0];
Img1.setAttribute("src", newSrc);

newSrc2 ="images/dice" + Math.floor(Math.random() * 6 + 1 ) + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", newSrc2);

console.log(document.querySelectorAll("img"));


if (newSrc > newSrc2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (newSrc === newSrc2) {
    document.querySelector("h1").innerHTML = "Draw!";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}