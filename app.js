/* Toglogchiin eeljiig hadgalah huvisang */
/* 1-r toglogchiig 0, 2-r toglogchiig 1 */
var activePlayer = 0;

/* Toglogchiin tsugluulsan hadgalah huvisagch */
var scores = [0, 0];

/* Toglogchiin eeljiig tsugluulj baigaa onoog hadgalah huvisagch */
var roundScore = 0;

/* Shoonii ali talaaraa buusniig hadgalah huvisagch heregtei, 1-6 gsn utgiig ene huvisagch sanagsargui uulgej ogno */

/*     <div class="player-score" id="score-1">43</div>
document.querySelector("#score-1").textContent = dice;
document.querySelector("#score-1").innerHTML = "<em>Yes!<em>"; */

// Programm ehlehed beltgey
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Shoog shidej eventlistener
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 dotorh sanamsargui neg too gargaj avna
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Shoonii zurgiin web deer gargaj irne.
  diceDom.style.display = "block";

  // Buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne.
  diceDom.src = "dice-" + diceNumber + ".png";

  // Buusan too ni 1 ees yalgaatai bol idevhtei toglogchiin eeljiin onoog nemegduulne
  if (diceNumber !== 1) {
    // 1-ees yalgaatai too buulaa.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 buusan tul toglogchiin eeljiin ene hesegt solij ogno

    // Ene toglogchiin eeljindee tsugluulsan onoog 0 bolgon
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // Toglogchiin eeljiig nuguu toglogchruu shiljuulne
    // Herev udevhtei toglogch ni 0 baival udevhtei toglogchiig 1 bolgo.
    // Ugui bol udevhtei toglogchiig 0 bolgo\

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // var obj = {
    //   name: "amraa",
    //   job: "programmer",
    //   address: {
    //     city: "ub",
    //     country: "mn",
    //   },
    // };

    // obt.address.city;

    // Ulaan tsegiig shiljuuleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Shoog tur alga bolgoh
    diceDom.style.display = "none";

    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }
  }
});
