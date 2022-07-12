const playButton = document.querySelector('.play-button');
playButton.addEventListener("click", () => {
    playGame();
    playButton.classList.add('hidden');
})

const display = document.querySelector('.display-text');
const rockbutton = document.querySelector('.rock-button');
const paperbutton = document.querySelector('.paper-button');
const scissorsbutton = document.querySelector('.scissors-button');
const playerOptions = document.querySelector('.player-options')
const selectionDisplay = document.querySelector('.selection-display')
const playerSelection = document.querySelector('.player-selection-img');

let selection = '';





console.log('hello');
console.log('lets play rock paper scissors');

//initialize array of choices
let computerChoices = ['rock', 'paper', 'scissors'];

//playGame();

function playGame(){
    //have computer select choice from array
    let compChoice = computerChoices[generateRandomNum()];
    console.log("the computer randomly picked " + compChoice);
    display.innerText = 'Making my choice now. . .'
    setTimeout(askForPlayerChoice, 3000);
    
    
    rockbutton.addEventListener("click", () => {
        let selection = 'rock';
        checkWinner(selection, compChoice);
    });
    paperbutton.addEventListener("click", () => {
        let selection = 'paper';
        checkWinner(selection, compChoice);
    });
    scissorsbutton.addEventListener("click", () => {
        let selection = 'scissors';
        checkWinner(selection, compChoice);
    });
    
    //ask user for their choice
    //let userChoice = prompt('rock, paper, or scissors?')
    //console.log("the player chose " + userChoice);
    //check to see who won the match
    //checkWinner(userChoice, compChoice);
    //let repeat = prompt('play again?');
   // if(repeat == 'yes'){
    //    playGame();
   // } else {
    //    return;
    //}
    
}

function askForPlayerChoice(){
    display.innerText = 'What do you pick?'
    playerOptions.classList.remove('hidden');
    console.log('test funct')
}

function generateRandomNum(){
    return Math.floor(Math.random()*3);
}

function checkWinner(userChoice, compChoice) {
    if((userChoice == 'rock') && (compChoice == 'rock')){
        console.log('I selected rock and you selected rock. We tie.');
        display.innerText = "I selected " + compChoice + "\nand you selected " + userChoice + ".\nWe tie.";
    };
    if((userChoice == 'rock') && (compChoice == 'paper')){
        console.log('I selected paper and you selected rock. I win.');
        display.innerText = "I selected " + compChoice + "\nand you selected " + userChoice + ".\nI win.";
    };
    if((userChoice == 'rock') && (compChoice == 'scissors')){
        console.log('I selected scissors and you selected rock. You win.');
        display.innerText = "I selected " + compChoice + "\nand you selected " + userChoice + ".\nYou win.";
    };
    if((userChoice == 'paper') && (compChoice == 'rock')){
        console.log('I selected rock and you selected paper. You win.');
        display.innerText = "I selected " + compChoice + "\nand you selected " + userChoice + ".\nYou win.";
    };
    if((userChoice == 'paper') && (compChoice == 'paper')){
        console.log('I selected paper and you selected paper. We tie.');
        display.innerText = "I selected " + compChoice + "\nand you selected " + userChoice + ".\nWe tie."
    };
    if((userChoice == 'paper') && (compChoice == 'scissors')){
        console.log('I selected scissors and you selected paper. I win.');
        display.innerText = "I selected " + compChoice + "\nand you selected " + userChoice + ".\nI win.";
    };
    if((userChoice == 'scissors') && (compChoice == 'rock')){
        console.log('I selected rock and you selected scissors. I win.');
        display.innerText = "I selected " + compChoice + "\nand you selected " + userChoice + ".\nI win.";
    };
    if((userChoice == 'scissors') && (compChoice == 'paper')){
        console.log('I selected paper and you selected scissors. You win.');
        display.innerText = "I selected " + compChoice + "\nand you selected " + userChoice + ".\nYou win.";
    };
    if((userChoice == 'scissors') && (compChoice == 'scissors')){
        console.log('I selected scissors and you selected scissors. We tie.');
        display.innerText = "I selected " + compChoice + "\nand you selected " + userChoice + ".\nWe tie."
    };
    playerOptions.classList.add('hidden');
    playButton.classList.remove('hidden');
    
}