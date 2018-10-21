//variables for game
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = []; 
var computerChoice;



//to initiate the game

theGame();


	function theGame() {
		//letter randomizer
		var alphabet = "abcdefghijklmnopqrstuvwxyz";
		var computerChoice = alphabet[Math.floor(Math.random() * 26)];
		//test
		//console.log(computerChoice); 
			
		userChoice();
		 //Steps for the user selections and compare to computer 
		function userChoice() {

			document.onkeyup = function(event) {
				//turns user's unicode into corresponding alphanumeric key,
				//.toLowerCase changes to lowercase string if user selects upper case.
				var userChoice = String.fromCharCode(event.keyCode).toLowerCase();


				//if statement to prevent user from choosing a key that's not part of
				//the alphabet. a = unicode 65, z = unicode 90.
				if (event.keyCode < 65 || event.keyCode > 90) {
					alert("Invalid Entry");

				//else/if statement to stop user from guess a letter they already guessed
				//and to stop the guesses counter from being deducted for a previous guess
				} else if (yourGuess.indexOf(userChoice) >=0) {
					alert("You already guessed that!");

				//if the user guesses correctly
				} else if (userChoice === computerChoice) {
					alert("You win."); //test
					wins = wins + 1;
					document.getElementById("your-wins").innerHTML = wins;
					resetGame();


				//if the user guesses wrong...
				} else {
					guessesLeft = guessesLeft - 1;
					
					document.getElementById("guesses-left").innerHTML = guessesLeft; 
					yourGuess.push(userChoice); //append user's choice to array yourGuess
					//console.log("Your guesses so far: " + yourGuess); //test

					document.getElementById("your-guesses").innerHTML = yourGuess;
					//console.log("Guesses Left: " + guessesLeft); //test
					noGuessesLeft();
				}
			}
		}

		function resetGame() {
			guessesLeft = 9; //reset variable
			yourGuess = [];  //reset array so it's empty
			document.getElementById("guesses-left").innerHTML = guessesLeft;  //reset display on screen
			document.getElementById("your-guesses").innerHTML = yourGuess;    //reset display on screen
			theGame(); //restart the game with new computerChoice.

		}

		function noGuessesLeft() {
			if (guessesLeft === 0) {
				//test
				//console.log("YOU LOSE."); 
				alert("YOU LOSE!");
				losses = losses + 1
				document.getElementById("your-losses").innerHTML = losses;
				resetGame();

			} else {
				//test
				//console.log("Incorrect. Try again"); 
				userChoice();
			}

		}

	}



