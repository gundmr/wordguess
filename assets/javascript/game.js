// VARIABLES:
var win = 0
var losses = 0
var maxGuesses = 10
var guessAttempts = 0 
var enteredGuesses = []

var choices = ["a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"]


// function for computer to choose letter
let compChoice = letterRand();
console.log(compChoice)
// console.log(index) // use to this console.log to confirm index


//Elements from HTML
let viewedGuesses = document.getElementById("guessedletters");
const scoredWins = document.getElementById("winCount");
const scoredLost = document.getElementById("lossCount");
const wrongLetters = document.getElementById("errorCount");

scoredWins.textContent = win; // Will show user wins=0 at start
scoredLost.textContent = losses; // Will show user lost=0 at start
wrongLetters.textContent = guessAttempts; // Will show user guesses=0 at start

// function to randomize a letter
function letterRand() {
    // function for computer to choose letter
    var index = [Math.floor(Math.random() * 26)];
    return choices[index]
    console.log(compChoice)
    console.log(index) //confirm index
}

// Function CAPTURES KEY PRESSED BY USER
// take key that's press - push it to entered guess array (use question game as example)

    //pseudo code for IF statments:
        // Function MARKS LETTERS, WINS, LOST
        // 1) if guessed amout is greater than allowed guesses
        // 2) ELSE if no --> match = increase wins and start game over
        // 3) ELSE if no --> no match = add letter and allow another guess
        // 4) ELSE if yes --> no match = increase losses and start another game
        // Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function (event) {
    enteredGuesses.push(event.key)
    viewedGuesses.textContent = enteredGuesses.join(); 
    
    console.log('compChoice?', compChoice)
    console.log(compChoice === event.key, compChoice, event.key)

    if (compChoice === event.key) { //if wins = guessed letter
        console.log('winning?', win, compChoice)
        win++; 
        scoredWins.textContent = win; //increase wins on score board (when wins = guessed letter)
        guessAttempts=0;
        enteredGuesses = [];
        compChoice = letterRand(); //after winning - generate new random letter (start new game)
    } 
    else if (guessAttempts == maxGuesses) { //if entered guess = 10
        //compChoice !== event.key;
        losses++;
        scoredLost.textContent = losses; // increase lost on score board
        guessAttempts=0; // reset guess attempts
        enteredGuesses = []; // clear letters guessed
    }
    else {
        guessAttempts++; 
        wrongLetters.textContent = guessAttempts; // if previous conditions not met, increase guess attempts per guess
    }

}
