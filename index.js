var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;

// console.log(random);

var dice1 = document.querySelector(".img1");
dice1.setAttribute("src", "images/dice" + random1 + ".png");

var dice2 = document.querySelector(".img2");
dice2.setAttribute("src", "images/dice" + random2 + ".png");

var head = document.querySelector("h1");
if (random1 > random2) {
    head.innerHTML = "🚩 Player 1 Wins";
}

else if (random1 < random2) {
    head.innerHTML = "Player 2 Wins 🚩";
}
else {
    head.innerHTML = "Draw!";
}
