const btns = document.querySelectorAll('button');

btns.forEach(btn =>{
    btn.addEventListener('click',playRound);
});


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


 function playRound(){
    const computerChoice = getComputerChoice();
    const playerChoice = this.id;
    if(playerChoice == computerChoice){
        console.log(`Draw!`);
    }else if(playerChoice=="rock" && computerChoice=="scissors"){
        console.log(`You win! Rock beats scissors!`);
    }else if(playerChoice=="scissors" && computerChoice=="paper"){
        console.log(`You win! Scissors beat paper!`);
    }else if(playerChoice=="paper" && computerChoice=="rock"){
        console.log(`You win! Paper beats rock!`);
    }else if(computerChoice=="rock" && playerChoice=="scissors"){
        console.log(`You lose! Rock beats scissors!`);
    }else if(computerChoice=="scissors" && playerChoice=="paper"){
        console.log(`You lose! Scissors beat paper!`);
    }else if(computerChoice=="paper" && playerChoice=="rock"){
        console.log(`You lose! Paper beats rock!`);
    }
}



