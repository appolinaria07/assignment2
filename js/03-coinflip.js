// Creating global variables
let randomNum = Math.round(Math.random());
let coinFlip = randomNum;
let choice = String(prompt("Enter Heads or Tails"));


// Creating the result of the coin flip
if (coinFlip < 1) {
    if (choice === "Heads" || choice === "heads") {
                alert("The flip was heads and you chose heads... you win!");
    } else {
                alert("The flip was heads but you chose tails... you lose!");
    }
} else {
    if (choice === "Tails" || choice === "tails") {
                alert("The flip was tails and you chose tails... you win!");
    } else {
                alert("The flip was tails but you chose heads... you lose!");
    }
}


