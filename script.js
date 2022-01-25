// create a variable 'play' that will hold player input
let play;
const result = document.querySelector('#result');
const btns = document.querySelectorAll('button');
let cScore = 0;
let pScore = 0;
pScorePara = document.querySelector('#pScore');
cScorePara = document.querySelector('#cScore');
btns.forEach((btn) => btn.addEventListener('click', () => {
    result.textContent = (playRound(btn));
    pScorePara.textContent = pScore;
    cScorePara.textContent = cScore;
}));

function playRound(btnClicked) {
    playerSelection = btnClicked.value;
    const computerSelection = computerPlay();
    
    if (computerSelection == playerSelection) {
        return 'Tie!';
    }
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'scissors') {
                pScore += 1;
                current = checkScore();
                if (current === 'Continue') {
                    return 'Rock beats Scissors';
                }
                else return current;
            }
            else if (computerSelection == 'paper') {
                cScore += 1;
                current = checkScore()
                if (current === 'Continue') {
                    return 'Paper beats Rock';
                }
                else return current;
            }
        case 'paper':
            if (computerSelection == 'rock') {
                pScore += 1;
                current = checkScore()
                if (current === 'Continue') {
                    return 'Paper beats Rock';
                }
                else return current;
            }
            else if (computerSelection == 'scissors') {
                cScore += 1;
                current = checkScore();
                if (current === 'Continue') {
                    return 'Scissors beat Paper';
                }
                else return current;
            }
        case 'scissors':
            if (computerSelection == 'paper'){
                pScore += 1;
                current = checkScore();
                if (current === 'Continue') {
                    return 'Scissors beat Paper';
                }
                else return current;
            }
            else if (computerSelection == 'rock'){
                cScore += 1;
                current = checkScore();
                if (current === 'Continue') {
                    return 'Rock beats Scissors';
                }
                else return current;
            }
    } 
}
// create a function computerPlay that randomly generates 'rock', 'paper' or scissors'
function computerPlay() {
// randomly generate a number between 0 and 2 and store in new variable 'randPlay'
    let randPlay = Math.floor(Math.random()*3);
// if 'randPlay' is 0, return 'rock'
// else if 'randPlay' is 1, return 'paper'
// else return 'scissors'
    switch (randPlay) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function checkScore() {
    if (pScore == 5) {
        pScore = 0;
        cScore = 0;
        return 'You Win';
    }
    else if (cScore == 5) {
        pScore = 0;
        cScore = 0;
        result.textContent = 'You Lose!';
        return 'You Lose';
    }
    else return 'Continue';
}