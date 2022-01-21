// create a variable 'play' that will hold player input
let play;
// prompt player to make a play in rock paper scissors and store in 'play'
play = prompt("Rock Paper Scissors!");
// convert all characters in 'play' to lowercase
play = play.toLowerCase();
// call function computerPlay to get random computer play and store in new variable 'cPlay'
cPlay = computerPlay();
// call function playGame with play and cPlay as inputs and log the result in the console
console.log(playGame(play, cPlay));
// create a function playGame that takes two inputs for plays from player and computer as playerSelection and computerSelection
function playGame(playerSelection, computerSelection) {
// if 'playerSelection' contains rock and 'computerSelection' contains scissors return 'You Win! Rock beats Scissors'
// else if 'playerSelection' contains rock and 'computerSelection' contains rock return 'Tie!'
// else if 'playerSelection' contains rock and 'computerSelection' contains paper return 'You Lose! Paper beats Rock'
// else if 'playerSelection' contains paper and 'computerSelection' contains rock return 'You Win! Paper beats Rock'
// else if 'playerSelection' contains paper and 'computerSelection' contains paper return 'Tie!'
// else if 'playerSelection' contains paper and 'computerSelection' contains scissors return 'You Lose! Scissors beat Paper'
// else if 'playerSelection' contains scissors and 'computerSelection' contains paper return 'You Win! Scissors beats Paper'
// else if 'playerSelection' contains scissors and 'computerSelection' contains scissors return 'Tie!'
// else if 'playerSelection' contains scissors and 'computerSelection' contains rock return 'You Lose! Rock beats Scissors'
if (computerSelection == playerSelection) {
    return 'Tie!';
}
switch (playerSelection) {
    case 'rock':
        if (computerSelection == 'scissors') {
            return 'You Win! Rock beats Scissors';
        }
        else if (computerSelection == 'paper') {
            return 'You Lose! Paper beats Rock';
        }
    case 'paper':
        if (computerSelection == 'rock') {
            return 'You Win! Paper beats Rock';
        }
        else if (computerSelection == 'scissors') {
            return 'You Lose! Scissors beat Paper';
        }
    case 'scissors':
        if (computerSelection == 'paper'){
            return 'You Win! Scissors beat Paper';
        }
        else if (computerSelection == 'rock'){
            return 'You Lose! Rock beats Scissors';
        }
} }
// create a function computerPlay that randomly generates 'rock', 'paper' or scissors'
function computerPlay() {
// randomly generate a number between 0 and 2 and store in new variable 'randPlay'
    let randPlay = Math.round(Math.random()*2);
// if 'randPlay' is 0, return 'rock'
// else if 'randPlay' is 1, return 'paper'
// else return 'scissors'
    switch (randPlay) {
        case '0':
            return 'rock';
        case '1':
            return 'paper';
        case '2':
            return 'scissors';
    }
}