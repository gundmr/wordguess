// VARIABLES:
// =======================================================================

// Word options
var wordList = ["sonic", "mario", "tetris", "zelda", "spores"];

// Score Counters
var winCounter = 0 //win 
var lossCounter = 0 //losses
var numGuesses = 10 // maxGuesses

// Guess Variables
var lettersGuessed = "";
var blankAndSuccesses = []; //hols mix of blank and solved letters (a,_, b)
var wrongGuesses = [] //wrong guessed
var numBlank = 0  //'guessAttemps' will be the number of blanks we show based on solution

//Computer Selection
var chosenWord = "";
var lettersInChosenWord = [];


// FUNCTIONS
// ========================================================================

function startGame() {
    numGuesses = 9; //reset letters guessed 
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]; //randomly select "hidden" word for user to guess
    lettersInChosenWord = chosenWord.split(""); //use split to break apart letters in word
    numBlanks = lettersInChosenWord.length; //count letter in "hidden" word to guess

    // reset guessing arrays:
    blankAndSuccesses = [];
    wrongGuesses = [];
    for (var i = 0; i < numBlanks; i++) {
        blankAndSuccesses.push("_");
    }
    document.getElementById("errorCount").innerHTML = numGuesses; //show # of guesses
    document.getElementById("word-blanks").innerHTML = blankAndSuccesses.join(" "); //prints guesses and blanks to page
    document.getElementById("guessedletters").innerHTML = wrongGuesses.join(" "); //prints wrong letters to page
}


// DELETE
// // function for computer to choose letter
// let compChoice = letterRand();
// console.log(compChoice)
// // console.log(index) // use to this console.log to confirm index


// //Elements from HTML
// let viewedGuesses = document.getElementById("guessedletters");
// const scoredWins = document.getElementById("winCount");
// const scoredLost = document.getElementById("lossCount");
// const wrongLetters = document.getElementById("errorCount");

// scoredWins.textContent = win; // Will show user wins=0 at start
// scoredLost.textContent = losses; // Will show user lost=0 at start
// wrongLetters.textContent = guessAttempts; // Will show user guesses=0 at start

// // function to randomize a letter
// function letterRand() {
//     // function for computer to choose letter
//     var index = [Math.floor(Math.random() * 26)];
//     return choices[index]
//     console.log(compChoice)
//     console.log(index) //confirm index
// }

// // Function CAPTURES KEY PRESSED BY USER
// // take key that's press - push it to entered guess array (use question game as example)

//     //pseudo code for IF statments:
//         // Function MARKS LETTERS, WINS, LOST
//         // 1) if guessed amout is greater than allowed guesses
//         // 2) ELSE if no --> match = increase wins and start game over
//         // 3) ELSE if no --> no match = add letter and allow another guess
//         // 4) ELSE if yes --> no match = increase losses and start another game
//         // Next, we give JavaScript a function to execute when onkeyup event fires.


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
