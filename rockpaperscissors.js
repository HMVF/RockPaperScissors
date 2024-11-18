//Game variables

let humanScore = 0;

let computerScore = 0;

//-----------------

//input functions

function getComputerChoice(){
    
    let randomChoice = Math.floor(Math.random()*10);
    let choice

    if(randomChoice == 0){
        choice = "Rock"
    }
    else if (randomChoice % 2 == 0){
        choice = "Paper"
    }
    else {
        choice = "Scissors"
    }

    return choice.toUpperCase();
}

function getHumanChoice(){

    let choice = window.prompt("Choose Rock, Paper or Scissors");

    return choice.toUpperCase()
}

//------------------

//Game logic

let rockWin = "Rocks Wins"
let paperWin = "Paper Wins"
let scissorsWin = "Scissors Wins"
let tie = "It's a Tie"


function playRound(humanChoice, computerChoice){

        if(humanChoice == "ROCK"){
            if(computerChoice == "ROCK"){console.log(tie)}
            else if(computerChoice == "PAPER"){console.log(paperWin);computerScore++}
            else{console.log(rockWin);humanScore++}
        }

        if(humanChoice == "PAPER"){
            if(computerChoice == "ROCKS"){console.log(paperWin);humanScore++}
            else if(computerChoice == "PAPER"){console.log(tie)}
            else{console.log(scissorsWin);computerScore++}
        }

        if(humanChoice == "SCISSORS"){
            if(computerChoice == "ROCKS"){console.log(rockWin);computerScore++}
            else if(computerChoice == "PAPER"){console.log(scissorsWin);humanScore++}
            else{console.log(tie)}
        }
    }
function playGame(){

    for(let i = 0; i <= 5; i++){

        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        playRound(humanSelection,computerSelection);
    }

    console.log("Human Score: " + humanScore)
    console.log("Computer Score: " + computerScore)

}
