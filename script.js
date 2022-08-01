function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    let theChoice;
    switch(choice)
    {
        case 1: console.log("Rock")
                theChoice = 'rock';
                break;
        case 2: console.log("Paper");
                theChoice = 'paper';
                break;
        case 3: console.log("Scissors");
                theChoice = 'scissors';
                break;
        default: console.log("Wrong Choice");
    }
    return theChoice;
} 

//function that plays a single round of the game
//two parameters playerSelection and computerSelection
//compare both values if same then win else lose

function playRound(playerSelection, computerSelection) {
    //playerSelection = /playerSelection/i;
    //computerSelection = /computerSelection/i;
    let result;
    if(playerSelection === 'rock' && computerSelection == 'scissors') {
        result = "You win! Rock beats Scissors";
        
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        result = "You win! Scissors beat Paper";
        
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock') {
        result = "You win! Paper beats Rock";
        
    }
    else if(computerSelection === 'rock' && playerSelection === "scissors") {
        result = "You lose! Rock beats Scissors";
    }
    else if(computerSelection === 'scissors' && playerSelection === 'paper') {
        result = "You lose! Scissors beat Paper";
        
    }
    else if(computerSelection === 'paper' && playerSelection === 'rock') {
        result = "You lose! Paper beats Rock";
        
    }
    else {
        result = "It is a tie !";
    }
    return result;
   
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

