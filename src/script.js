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
	let cupcake = hole.querySelector(".cupcake");

	cupcake.classList.add('up');
	cupcake.classList.remove('smash');
		
	setTimeout(function() {
		cupcake.classList.remove('up');
		cupcake.classList.add('down'); 
	
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
	let hole = cupcake.parentNode;

	if (!cupcake.classList.contains("smash")) {
		console.log('smashed!');
		score = score + 1;
		scoreBoard.textContent = score;
	}
	else {
		console.log('clicked on cupcake thats not up')
	}

	cupcake.classList.remove('up');
	cupcake.classList.add('smash');
}

function randomTime(min, max) {
    let time = Math.round(Math.random() * (max - min) + min);

    return time;
}
