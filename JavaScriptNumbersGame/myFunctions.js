// Function to Check if Input is Valid
function myFunction()
{
	var	x, text;
	
	x = document.getElementById("num").value;
	
	if( isNaN(x) || x < 1 || x > 10 )
	{
		window.alert("Input is Not Valid");
	    
	} // End if isNaN 
	else
	{
		text = "You Entered " + x;
	}
	document.getElementById("demo").innerHTML = text;
	
} // End of myFunction()



// Random Number Generator
var compGuess = Math.ceil( Math.random() * 20 ); 	
var tries = 3;

// Function to Calculate Guesses
function guesses()
{
	var userGuess = document.getElementById("num").value;
		
	
	if ( userGuess > compGuess )
	{ 
		window.alert("The Number is Lower...");
		tries--;
	}
	else if ( userGuess < compGuess )
	{
		window.alert("The Number is Higher...");
		tries--;
	}
	document.getElementById("num").value = "";
	
	if ( userGuess == compGuess )
	{
		window.alert("You Won!");
		reset();
	}
	
	
	if ( tries == 0 )
	{
		window.alert("Game Over!");
		reset();
	}
	

} //  End guesses() function


function reset() 
{
    compGuess = Math.ceil(Math.random() * 20);
    tries = 3;
	userGuess = document.getElementById("num").value = "";
	window.alert("New Game Started");
	
} // End of reset() function





