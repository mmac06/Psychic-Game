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

// creates java script variables that link to the html
var winsText = document.getElementById("wins-text");
console.log(winsText);
var lossesText = document.getElementById("losses-text");
var remainingText = document.getElementById("remaining-text");
var guessText = document.getElementById("guess-text");

// resets the game
resetGame ()= {


    
}

document.onkeyup = function (event) {
    // record user keystroke
    var userGuess = event.key;
    console.log(userGuess);
    // randomize computer choice by linking it to above variable
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);

    // if-else clauses that add to wins and losses tallies
    
    if (userGuess === computerGuess) {
        wins++;
        alert ("Correct!");
    } else {
        // alert(guessCount-1 + " Wrong! You suck at this!");
        guessCount = guessCount-1;
        // guessText = guessText + userGuess + ", ";
    }

    if (guessCount === 0) {                
        losses++;
        resetGame();
    }

    
    // adding text to the div and reporting letters, wins, losses, etc.

    remainingText.textContent = "Guesses remaining: " + guessCount;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessText.textContent = "Your guesses so far: " + userGuess;


    };