let timeUp = false;
let holes = document.querySelectorAll('.hole');
let scoreBoard = document.querySelector('.score');
let score = 0;

// This function resets the conditions to match the start of the game and calls the function that makes the cupcakes pop up randomly
function startGame() {
    timeUp = false;
		score = 0;
   	scoreBoard.textContent = score;

    popUp();

    setTimeout(endGame, 10000);
}

// This function is called after 10 seconds, when the game finishes.
function endGame() {
    timeUp = true;
}

// This function makes the cupcakes move to the right position at the right time
function popUp() {	
	let hole = randomHole(holes);
	let time = randomTime(200, 1000);
	let cupcake = hole.querySelector(".cupcake");
	
	// When the cupcake comes up, the "smash" class needs to be removed so player can click on the cupcake
	cupcake.classList.add('up');
	cupcake.classList.remove('smash');
	
	// When nothing happens (player doesn't click on cupcake), cupcake moves down and out of sight
	setTimeout(function() {
		cupcake.classList.remove('up');
		cupcake.classList.add('down'); 
		
		// The popUp() function is only called while playtime is not up
		if (timeUp == false) {
			popUp();
		}

	}, time)
}

// This function choses randomly which hole the next cupcake is going to popup from
function randomHole(holes) {
    let holeNumber = Math.floor(Math.random() * holes.length);
    let hole = holes[holeNumber];

    return hole;
}

// This function ensures that player gets a score of 1 when clicking on a popped up cupcake
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
	// Shows a speech bubble with the text "Smash" when player clicks on a cupcake
	cupcake.classList.remove('up');
	cupcake.classList.add('smash');
}

// This function sets a random time for each cupcake to show
function randomTime(min, max) {
    let time = Math.round(Math.random() * (max - min) + min);

    return time;
}
