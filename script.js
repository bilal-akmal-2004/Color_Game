var mainBdy = document.getElementsByClassName("body")[0];
var colors = ["red", "green", "yellow", "orange"];
var score = 0;
var life = 5;
var lifeHead = document.getElementsByClassName("life")[0];
var matchDiv = document.getElementsByClassName("match")[0];
var scoreHead = document.getElementsByClassName("score")[0];
var gameOver = document.getElementsByClassName("gameOver")[0];
var scoreGameOver = document.getElementsByClassName("scoreGameOver")[0];
function closeGame() {
  gameOver.style.display = "none";
  score = 0;
  life = 5;
  toUpdate();
}
function toUpdate() {
  matchDiv.style.backgroundColor = colors[Math.floor(Math.random() * 4)];
  scoreHead.innerHTML = `Score: ${score}`;
  if (life === 0) {
    lifeHead.innerHTML = `Life: ${life} --- Last Chance💀💀💀💀`;
  } else {
    lifeHead.innerHTML = `Life: ${life}`;
  }
  for (var i = 0; i < mainBdy.childNodes.length; i++) {
    mainBdy.childNodes[i].style.backgroundColor =
      colors[Math.floor(Math.random() * 4)];
  }
}
toUpdate();

function toMatch(e) {
  if (e.target.style.backgroundColor === matchDiv.style.backgroundColor) {
    score++;
    toUpdate();
    return;
  } else if (life >= 1) {
    life--;
    toUpdate();
    return;
  }
  gameOver.style.display = "flex";
  scoreGameOver.innerHTML = `Your score is : ${score}`;
  console.log("Game over");
}

for (var i = 0; i < 52; i++) {
  var divElm = document.createElement("div");
  divElm.setAttribute("class", "box");
  divElm.setAttribute("onClick", "toMatch(event)");
  divElm.style.backgroundColor = colors[Math.floor(Math.random() * 4)];
  mainBdy.appendChild(divElm);
}
