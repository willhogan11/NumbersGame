// Random Number Generator
function reset(){
    compGuess = Math.ceil(Math.random() * 20);
    tries = 5;
    userGuess = document.getElementById("num").value = "";
    window.alert("New Game Started");
} // End of reset() function

// Function to Check if Input is Valid
function validateFunc(){
	var x;
	x = document.getElementById("num").value;
	if( isNaN(x) || x < 1 || x > 20 ){
		window.alert("Input is Not Valid");
		document.getElementById("num").value = "";
	}
} // End of validateFunc()

// Function to Calculate Guesses
function guesses(){	
	var userGuess = document.getElementById("num").value;
	validateFunc();
	if ( userGuess > compGuess ){ 
		window.alert("The Number is Lower...");
		tries--;
	}
	else if ( userGuess < compGuess ){
		window.alert("The Number is Higher...");
		tries--;
	}
	document.getElementById("num").value = "";
	if ( userGuess == compGuess ){
		window.alert("You Won!");
		reset();
	}
	if ( tries == 0 ){
		window.alert("Game Over!");
		reset();
	}
} //  End guesses() function
