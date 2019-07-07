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


// FUNCTIONS:
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

    console.log('count blanks', blankAndSuccesses);
    document.getElementById("errorCount").innerHTML = numGuesses; //show # of guesses
    document.getElementById("word-blanks").innerHTML = blankAndSuccesses.join(" "); //prints guesses and blanks to page
    document.getElementById("guessedletters").innerHTML = wrongGuesses.join(" "); //prints wrong letters to page
}


function checkLetters (letter) { //function used to compare guessed letter against computer choosen word/letter string
    var letterInWord = false; //using a boolean (t/f) to determine if letter is in computer array
    for (var i = 0; i < numBlank; i++) {
        if(chosenWord[i] === letter) {
            letterInWord = true;
        }
    }
    if(letterInWord) { //determine if letter exists - where exactly in word
        for(var j = 0; j < numBlank; j++) { //looping through comp generated word
            if(chosenWord[j] = letter){ //populates blankAndSccesses with every instance of letter
                blankAndSuccesses[j] = letter; //blank space equal to correct letter when there is a match
            }
        }
        console.log(blankAndSuccesses);
    }
    else{
        wrongGuesses.push(letter); //letter does not exist and moves to wrong guess list
        numGuesses--; //subtract from guess
    }
}

function completeRound () {
    document.getElementById("errorCount").innerHTML = numGuesses; //show # of guesses
    document.getElementById("word-blanks").innerHTML = blankAndSuccesses.join(" "); //prints guesses and blanks to page
    document.getElementById("guessedletters").innerHTML = wrongGuesses.join(" "); //prints wrong letters to page

    if(lettersInChosenWord.toString() === blankAndSuccesses.toString()) { //letter guessed = computer choice
        winCounter++; //increase wins
        alert("You Win!");
        document.getElementById("winCount").innerHTML = winCounter;
        startGame(); //restart game
    }
    else if (numGuesses === 0) { //When allowed guessed = 0, you lose game
        lossCounter++; //loss increase
        alert("You Lose");
        document.getElementById("lossCount").innerHTML = lossCounter; //print loss to screen
        startGame(); //restart game
    }
}



// DELETE
//     document.onkeyup = function (event) {
//     enteredGuesses.push(event.key)
//     viewedGuesses.textContent = enteredGuesses.join(); 
    
//     console.log('compChoice?', compChoice)
//     console.log(compChoice === event.key, compChoice, event.key)

//     if (compChoice === event.key) { //if wins = guessed letter
//         console.log('winning?', win, compChoice)
//         win++; 
//         scoredWins.textContent = win; //increase wins on score board (when wins = guessed letter)
//         guessAttempts=0;
//         enteredGuesses = [];
//         compChoice = letterRand(); //after winning - generate new random letter (start new game)
//     } 
//     else if (guessAttempts == maxGuesses) { //if entered guess = 10
//         //compChoice !== event.key;
//         losses++;
//         scoredLost.textContent = losses; // increase lost on score board
//         guessAttempts=0; // reset guess attempts
//         enteredGuesses = []; // clear letters guessed
//     }
//     else {
//         guessAttempts++; 
//         wrongLetters.textContent = guessAttempts; // if previous conditions not met, increase guess attempts per guess
//     }

// }
