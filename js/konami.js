// a key map of allowed keys
const allowedKeys = {
	13: 'enter',
	37: 'left',
	38: 'up',
	39: 'right',
	40: 'down',
	65: 'a',
	66: 'b'
};

// the 'official' Konami Code sequence
const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];

// a variable to remember the 'position' the user has reached so far.
let konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
	let key = allowedKeys[e.keyCode];
	let requiredKey = konamiCode[konamiCodePosition];

	// compare the key with the required key
	if (key === requiredKey) {
		// move to the next key in the konami code sequence
		konamiCodePosition++;

		// if the last key is reached, activate cheats
		if (konamiCodePosition === konamiCode.length) {
			activateCheats();
			konamiCodePosition = 0;
		}
	}
});

function activateCheats() {
	document.body.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9GciZE8VpHPeSt8Do4ZNL6ug8gDTh5NMJNQ&usqp=CAU")';
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundSize = "cover";

	const audio = new Audio('./sound/GTA San Andreas - Mission passed sound.mp3');
	audio.play();
}

