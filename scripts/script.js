




const btns = document.querySelectorAll('button');
let playerChoice;

btns.forEach(btn =>{
    btn.addEventListener('click',getPlayerChoice);
});

function getPlayerChoice(){
    console.log(this.id);
    playerChoice = this.id;
}




function getComputerChoice(){
    let probability = (Math.random() * 100).toFixed(2);
    if (probability<=33.33){
        return "rock"
    }else if(probability<=66.66){
        return "paper";
    }else{
        return "scissors";
    }
}



const computerChoice = getComputerChoice();
console.log(computerChoice);

/*

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

