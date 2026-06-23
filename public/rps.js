
function playGame(){
    console.log("Let's get started with the game");
    
    //User input
    const input = prompt("Enter Rock, Paper, or Scissors");

    let userInput = input.toLowerCase();

    //Computer input
    let computerInput;
    let randomSelection = Math.round(Math.random() * 3) + 1;

    if (randomSelection > 3){
        randomSelection -= 1;
    }
    
    switch(randomSelection){
        case 1:
        computerInput = "rock";
        break;
        case 2: 
        computerInput = "paper";
        break;
        case 3: 
       computerInput = "scissors";
        break;
        default:
            console.log("Your answer no dey here");
    }
    console.log("Computer Selected " + computerInput + "," + " user selected", userInput);


    if (userInput === "rock" && computerInput === "scissors" ||
        userInput === "scissors" && computerInput === "paper" ||
        userInput === "paper" && computerInput === "rock"
    ){
        console.log("User wins");
    }
    else if (
        userInput === "rock" && computerInput === "paper" ||
        userInput === "paper" && computerInput === "scissors" ||
        userInput === "scissors" && computerInput === "rock"
    ) {
        console.log("Computer wins");
    }
    else if (userInput === computerInput){
        console.log("It's a tie. Play again");
    }
    else{
        console.log("Typo in your input");
    }
    const retry = prompt("Do you want to play again?\n Type Yes or No");
    const retryGame = retry ? retry.toLowerCase() : "no";

    if (retryGame === "yes"){
        playGame();
    }
    
}
playGame();