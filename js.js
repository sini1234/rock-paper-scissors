function getComputerChoice(){
    let choice = Math.random() * (3) + 1;
    
choice =Math.floor(choice);
if (choice == 1){
    return "Rock";
}

else if ( choice == 2){
    return "Scissors";
}

else {
    return "Paper";
}
}

function oneRound(computerSelection = getComputerChoice(), playerSelection= prompt("Enter rock, paper or scissors: ")){
let playerChoice = playerSelection;

playerChoice = playerChoice.charAt(0).toUpperCase()+ playerChoice.slice(1).toLowerCase();
console.log(playerChoice);
let computerChoice = computerSelection;
console.log(computerChoice);
if (playerChoice == "Rock" && computerChoice == 'Scissors') {
    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    return 1;
}
else if (playerChoice == "Rock" && computerChoice == 'Paper'){
     console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
     return 2;
}
else if (playerChoice  == "Rock" && computerChoice == 'Rock'){
     console.log(`Its a draw! ${computerChoice} draws ${playerChoice}`);
     return 0;
    
    }
if (playerChoice == "Paper" && computerChoice == 'Rock') {
    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    return 1;
}
else if (playerChoice == "Paper" && computerChoice == 'Scissors'){
    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    return 2;
}
else if (playerChoice  == "Paper" && computerChoice == 'Paper'){
    console.log(`Its a draw! ${computerChoice} draws ${playerChoice}`);
    return 0;}
if (playerChoice == "Scissors" && computerChoice == 'Paper') {
    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    return 1;
}
else if (playerChoice == "Scissors" && computerChoice == 'Rock'){
    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    return 2;
}
else if (playerChoice  == "Paper" && computerChoice == 'Paper'){
    console.log(`Its a draw! ${computerChoice} draws ${playerChoice}`);
    return 0;
}
}

function game(){
    let playerWin = 0;
    let computerWin = 0;
    let val = oneRound();
if (val == 1){
    playerWin++;
}
else  if (val == 2){
    computerWin++;
}
     val = oneRound();
if (val == 1){
    playerWin++;
}
else  if (val == 2){
    computerWin++;
}     val = oneRound();
if (val == 1){
    playerWin++;
}
else  if (val == 2){
    computerWin++;
}     val = oneRound();
if (val == 1){
    playerWin++;
}
else  if (val == 2){
    computerWin++;
}     val = oneRound();
if (val == 1){
    playerWin++;
}
else  if (val == 2){
    computerWin++;
}
if (playerWin > computerWin){
    console.log(`Player wins! player has won ${playerWin} rounds`);
}
else{
    console.log(`Computer wins! computer has won ${computerWin} rounds`);
}
}
console.log(game(getComputerChoice()));
