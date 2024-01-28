'use strict';




const diceImg = document.querySelector(".dice");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

const currentScore0 = document.getElementById("current--0");
const currentScore1 = document.getElementById("current--1");

const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

score0.textContent = 0;
score1.textContent = 0;

let currentScore, activePlayer, scores, playing;


const init = function() {
	currentScore = 0;
	activePlayer =0;
	scores = [0, 0];
	playing = true;

	score0.textContent =0;
	score1.textContent = 0;

	currentScore0.textContent = 0;
	currentScore1.textContent = 0;

	player0.classList.remove("player--winner");
	player1.classList.remove("player--winner");
	player0.classList.add("player--active");
	player1.classList.remove("player--active");


}

init();

diceImg.classList.add("hidden")

const switchPlayer = function(){
		document.getElementById(`current--${activePlayer}`).textContent = 0;
		currentScore = 0;
		activePlayer = activePlayer === 0 ? 1 : 0;
		player0.classList.toggle("player--active");
		player1.classList.toggle("player--active");
}


btnRollDice.addEventListener("click", function(){
	
	if(playing) {
	const dice = Math.trunc(Math.random()*6) + 1;
	diceImg.classList.remove("hidden");
	diceImg.src= `https://raw.githubusercontent.com/jonasschmedtmann/complete-javascript-course/master/07-Pig-Game/final/dice-${dice}.png`;

	if(dice !== 1){
		currentScore += dice;
		document.getElementById(`current--${activePlayer}`).textContent = currentScore
	
	} else {
		switchPlayer()
	}
	}
	
});
btnHold.addEventListener("click", function(){

	if(playing){
	scores[activePlayer] += currentScore;
	document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
	if(scores[activePlayer] >= 100){
		playing=false
		diceImg.classList.add("hidden");
		document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
		document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
	} else {
		switchPlayer()
	}
	}	
});

btnNew.addEventListener("click", init);
