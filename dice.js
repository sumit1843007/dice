var score = [0, 0];
var active = 0;
var value = 0; //round

// when we click on roll button
document.getElementById("currentdice").addEventListener("click", () => {
  dice = Math.floor(Math.random() * 6) + 1;
  document.getElementById("img").src = "dice-" + dice + ".jfif";
  if (dice !== 1) {
    var a = document.getElementById("player_current-" + active);
    value += dice;
    a.innerHTML = value;
  } else {
    if (active == 0) {
      document.getElementById("p0_current").style.display = "none";
      document.getElementById("p1_current").style.display = "inline";
      document.getElementById("player_current-" + active).innerHTML = score[active];
      value = 0;
      active = 1;
    } else {
      document.getElementById("p1_current").style.display = "none";
      document.getElementById("p0_current").style.display = "inline";
      document.getElementById("player_current-" + active).innerHTML = score[active];
      round = 0;
      active = 0;
    }
  }
});

// when click on reset button
document.getElementById("resat").addEventListener("click", () => {
  document.getElementById("player_current-0").innerHTML = 0;
  document.getElementById("player_current-1").innerHTML = 0;
  document.getElementById("score-1").innerHTML = " saved score : " + 0;
  document.getElementById("score-0").innerHTML = " saved score : " + 0;
  document.getElementById("p0_current").style.display = "inline";
  document.getElementById("p1_current").style.display = "none";
  document.getElementById('save').disabled = false;
  document.getElementById("currentdice").disabled = false;
  score[0] = 0;
  score[1] = 0;
  value = 0;
  active = 0;
});

// when click on save & and pass
document.getElementById("save").addEventListener("click", () => {
  score[active] += value;
  document.getElementById("score-" + active).innerHTML =
    " saved score : " + score[active];
  document.getElementById("player_current-" + active).innerHTML = score[active];
  value = 0;
  checkWinner()

  if (active == 0) {
    document.getElementById("p0_current").style.display = "none";
    document.getElementById("p1_current").style.display = "inline";
    value = 0;
    active = 1;
  } else {
    document.getElementById("p1_current").style.display = "none";
    document.getElementById("p0_current").style.display = "inline";
    round = 0;
    active = 0;
  }
});

function checkWinner() {
  if (score[active] >= 100) {
    document.getElementById("score-" + active).innerHTML = "WINNER";
    document.getElementById('save').disabled = true;
    document.getElementById("currentdice").disabled = true;

  }
}