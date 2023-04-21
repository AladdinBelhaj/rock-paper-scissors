/*


function getComputerChoice(){
    let probability = (Math.random() * 100).toFixed(2);
    let choice;
    if (probability<=33.33){
        choice = "rock"
    }else if(probability<=66.66){
        choice = "paper";
    }else{
        choice = "scissors";
    }
    return choice;
}
*/


const btns = document.querySelectorAll('button');
let playerChoice;

btns.forEach(btn =>{
    btn.addEventListener('click',getPlayerChoice);
});

function getPlayerChoice(){
    console.log(this.id);
    playerChoice = this.id;
    console.log(playerChoice);
}







/*
const computerChoice = getComputerChoice();



 function playRound(playerChoice,computerChoice){
    playerChoice = playerChoice.toLowerCase();

    if(playerChoice == computerChoice){
        return `Draw!`;
    }else if(playerChoice=="rock" && computerChoice=="scissors"){
        return `You win! Rock beats scissors!`;
    }else if(playerChoice=="scissors" && computerChoice=="paper"){
        return `You win! Scissors beat paper!`;
    }else if(playerChoice=="paper" && computerChoice=="rock"){
        return `You win! Paper beats rock!`;
    }else if(computerChoice=="rock" && playerChoice=="scissors"){
        return `You lose! Rock beats scissors!`;
    }else if(computerChoice=="scissors" && playerChoice=="paper"){
        return `You lose! Scissors beat paper!`;
    }else if(computerChoice=="paper" && playerChoice=="rock"){
        return `You lose! Paper beats rock!`;
    }

}
*/

