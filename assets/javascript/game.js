// creates an array with all letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(letters);

// creates wins and losses variables
var wins = 0;
console.log(wins);
var losses = 0;
console.log(losses);
var guessCount = 9;
console.log(guessCount);
var userGuess = "";


// creates java script variables that link to the html
var winsText = document.getElementById("wins-text");
console.log(winsText);
var lossesText = document.getElementById("losses-text");
var remainingText = document.getElementById("remaining-text");
var guessText = document.getElementById("guess-text");
// randomize computer choice by linking it to above variable
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(computerGuess);

// resets the game
function resetGame() {
    guessText.textContent = "Your guesses so far: ";
    guessCount = 9;
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
}

document.onkeyup = function (event) {
    // record user keystroke and make it lowercase to match the 'letter' array defined above
    userGuess = event.key.toLowerCase();
    console.log(userGuess);

    // if-else clauses that add to wins and losses tallies. including 'reset' function defined above

    if (userGuess === computerGuess) {
        wins++;
        alert("You win! Congrats!");
        resetGame();
    } else {
        guessCount = guessCount - 1;
    }

    if (guessCount === 0) {
        losses++;
        alert("You lose! You suck and are terrible at EVERYTHING!!!");
        resetGame();
    }

    // alert if user selects a number
    if (event.keyCode > 90 || event.keyCode < 65) {
        alert("That's not a letter. Please pick a letter.");
      }


    // adding text to the div and reporting letters, wins, losses, etc.

    remainingText.textContent = "Guesses remaining: " + guessCount;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessText.textContent += userGuess + ", ";
    
};