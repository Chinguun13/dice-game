/* Toglogchiin eeljiig hadgalah huvisang */
/* 1-r toglogchiig 0, 2-r toglogchiig 1 */
var activePlayer = 1;

/* Toglogchiin tsugluulsan hadgalah huvisagch */
var scores = [0, 0];

/* Toglogchiin eeljiig tsugluulj baigaa onoog hadgalah huvisagch */
var roundScore = 0;

/* Shoonii ali talaaraa buusniig hadgalah huvisagch heregtei, 1-6 gsn utgiig ene huvisagch sanagsargui uulgej ogno */
var dice = Math.floor(Math.random() * 6) + 1;

//         <div class="player-score" id="score-0">43</div>
// document.querySelector("#score-0").textContent = dice;

//         <div class="player-score" id="score-1">43</div>
// document.querySelector("#score-1").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";

// Programm ehlehed beltgey
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";

console.log("Shoo ni: " + dice);
