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
	hole.classList.remove('smashed');
		
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
	let hole = cupcake.parentNode;

	if (!hole.classList.contains("smashed")) {
		console.log('smashed!');
		score = score + 1;
		scoreBoard.textContent = score;
	}
	else {
		console.log('clicked on cupcake thats not up')
	}

	hole.classList.add('smashed');
	hole.classList.remove('up');
}

function randomTime(min, max) {
    let time = Math.round(Math.random() * (max - min) + min);

    return time;
}
