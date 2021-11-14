var isNewGame;

// Togloomiin buh gazart ashiglagdah global huvisangchdiig end zarlay
var activePlayer;
// 2 toglogchiin tsugluulsan onoonuud
var scores;
// Idevhtei toglogchiin tsugluulj baigaa eeljiin onoo
var roundScore;

// Shoonii zuriig uzuuleh element DOM-oos haij olood end hadgaliy
var diceDom = document.querySelector(".dice");

// Togloomiig ehluulne
initGame();

// Togloomiig shineer ehlehed beltgene.
function initGame() {
  //Togloom ehellee gedeg tuluvt oruulna
  isNewGame = true;
  /* Toglogchiin eeljiig hadgalah huvisang */
  /* 1-r toglogchiig 0, 2-r toglogchiig 1 */
  activePlayer = 0;

  /* Toglogchiin tsugluulsan hadgalah huvisagch */
  scores = [0, 0];

  /* Toglogchiin eeljiig tsugluulj baigaa onoog hadgalah huvisagch */
  roundScore = 0;

  /* Shoonii ali talaaraa buusniig hadgalah huvisagch heregtei, 1-6 gsn utgiig ene huvisagch sanagsargui uulgej ogno */

  /*     <div class="player-score" id="score-1">43</div>
document.querySelector("#score-1").textContent = dice;
document.querySelector("#score-1").innerHTML = "<em>Yes!<em>"; */

  // Programm ehlehed beltgey
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Toglogchidin neriig butsaaj gargah
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

// Shoog shidej eventlistener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame === true) {
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
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // 1 buusan tul toglogchiin eeljiin ene hesegt solij ogno
      // Ene toglogchiin eeljindee tsugluulsan onoog 0 bolgon
      switchToNextPlayer();

      // var obj = {
      //   name: "amraa",
      //   job: "programmer",
      //   address: {
      //     city: "ub",
      //     country: "mn",
      //   },
      // };

      // obt.address.city;

      // if (activePlayer === 0) {
      //   activePlayer = 1;
      // } else {
      //   activePlayer = 0;
      // }
    }
  } else {
    alert("Togloom duussan bna. NEW GAME tovchiig darj shineer ehlene uu");
  }
});

// HOLD tovchnii eventlistener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame === true) {
    // Ug toglogchiin tsugluulsan eeljiin onoog global onoon deer ni nemj ogno.
    // var scores = [0, 0];

    // if (activePlayer === 0) {
    //   scores[0] = scores[0] + roundScore[0];
    // } else {
    //   scores[1] = scores[1] + roundScore[1];
    // } xiamian de yiyand

    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Delgets deer onoog ni oorchilno
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    // Ug toglogch hojson esehiig (onoog ni 100-s ih eseh) shalgah
    if (scores[activePlayer] >= 20) {
      // Togloomiig duussan tuluvt oruulna
      isNewGame = false;

      document.getElementById("name-" + activePlayer).textContent = "Winner!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      // Toglogchiin eeljiig colino
      switchToNextPlayer();
    }
  } else {
    alert("Togloom duussan bna. NEW GAME tovchiig darj shineer ehlene uu");
  }
});

// Ene function ni togloh eeljiig daraachinn toglogch ruu shiljuuldeg
// REMEMBER: DRY =  Dont repeat yourself
function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Toglogchiin eeljiig nuguu toglogchruu shiljuulne
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Ulaan tsegiig shiljuuleh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Shoog tur alga bolgoh
  diceDom.style.display = "none";
}

// New Game : : Shine togloom ehluuuleh tovchnii eventlistener
document.querySelector(".btn-new").addEventListener("click", initGame);
