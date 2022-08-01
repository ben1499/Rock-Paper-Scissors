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

function playRound(playerSelection, computerSelection) {
    //playerSelection = /playerSelection/i;
    //computerSelection = /computerSelection/i;
    let result;
  
    if(playerSelection === 'rock' && computerSelection == 'scissors') {
        result = "You win! Rock beats Scissors";
        flag = 1;
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        result = "You win! Scissors beat Paper";
        flag = 1;
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock') {
        result = "You win! Paper beats Rock";
        flag = 1;
    }
    else if(computerSelection === 'rock' && playerSelection === "scissors") {
        result = "You lose! Rock beats Scissors";
        flag = 0;
    }
    else if(computerSelection === 'scissors' && playerSelection === 'paper') {
        result = "You lose! Scissors beat Paper";
        flag = 0;
    }
    else if(computerSelection === 'paper' && playerSelection === 'rock') {
        result = "You lose! Paper beats Rock";
        flag = 0
    }
    else {
        result = "It is a tie !";
        flag = 2;
    }
    return result;
}



function game() {
    let gameWin = 0;
    let gameLose = 0;
    for(let i = 0; i < 5; i++)
    {   
        let playerSelection = prompt("Enter a choice");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(flag === 1)
           gameWin++; 
        else if(flag === 0)
            gameLose++;
        else if(flag == 2)
            i--;
    }
    if(gameWin > gameLose)
        console.log("Congrats! You win");
    else if(gameLose > gameWin)
        console.log("You lose Try again !");
    else
        console.log("It's a draw !")
}

let flag;
game();

