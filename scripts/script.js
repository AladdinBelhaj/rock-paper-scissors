const btns = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;

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
    test(playerChoice);
    if(playerChoice == computerChoice){
        console.log(`Draw!`);
    }else if(playerChoice=="rock" && computerChoice=="scissors"){
        console.log(`You win! Rock beats scissors!`);
        playerScore++;
    }else if(playerChoice=="scissors" && computerChoice=="paper"){
        console.log(`You win! Scissors beat paper!`);
        playerScore++;
    }else if(playerChoice=="paper" && computerChoice=="rock"){
        console.log(`You win! Paper beats rock!`);
        playerScore++;
    }else if(computerChoice=="rock" && playerChoice=="scissors"){
        console.log(`You lose! Rock beats scissors!`);
        computerScore++;
    }else if(computerChoice=="scissors" && playerChoice=="paper"){
        console.log(`You lose! Scissors beat paper!`);
        computerScore++;
    }else if(computerChoice=="paper" && playerChoice=="rock"){
        console.log(`You lose! Paper beats rock!`);
        computerScore++;
    }

    if(playerScore == 5){
        console.log('You win the game!');
        computerScore = 0;
        playerScore = 0;
    }else if(computerScore == 5){
        console.log('You lose the game!');
        computerScore = 0;
        playerScore = 0;
    }

}

function test(playerChoice){
    container = document.querySelector('#container');
    img = document.createElement('img');
    img.src = `img/${playerChoice}.png`;
    container.appendChild(img);
    rotate();
}



function rotate(){
    img.classList.add('rotate-90-br-cw');
    img.addEventListener('animationend',function(){
        img.classList.remove('rotate-90-br-cw');
        img.classList.add('rotate-90-br-cw-normal')
    },{once:true});
}