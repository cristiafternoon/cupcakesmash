let timeUp = false;
let holes = document.querySelectorAll('.hole');
let scoreBoard = document.querySelector('.score');
let score = 0;

function startGame() {
    timeUp = false;
		score = 0;
   	scoreBoard.textContent = score;

    popUp();

    setTimeout(endGame, 10000);
}

function endGame() {
    timeUp = true;
}

function popUp() {
		let hole = randomHole(holes);
		let time = randomTime(200, 1000);

    hole.classList.add('up');
		
		setTimeout(function() {
				hole.classList.remove('up'); 
		
				if (timeUp == false) {
						popUp();
				}

		}, time)
}

function randomHole(holes) {
    let holeNumber = Math.floor(Math.random() * holes.length);
    let hole = holes[holeNumber];

    return hole;
}

function smash(cupcake) {
    console.log('smashed!');

		cupcake.parentNode.classList.remove('up');
		score = score + 1;
		scoreBoard.textContent = score;
}

function randomTime(min, max) {
    let time = Math.round(Math.random() * (max - min) + min);

    return time;
}


