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
    const playerScoreTab = document.querySelector('#playerScoreTab');
    const computerScoreTab = document.querySelector('#computerScoreTab');



    playerHand = playerAnimation(playerChoice);
    computerHand = computerAnimation(computerChoice);



    if(playerChoice == computerChoice){
        playerHand.addEventListener('animationend',function(){
            playerHand.classList.add('draw');           // incase of draw, add yellow border to hand vector
            computerHand.classList.add('draw');
        }, {once:true});

    }else if(playerChoice=="rock" && computerChoice=="scissors"){
        playerScore++;
        playerHand.addEventListener('animationend',function(){
            playerHand.classList.add('win');        // incase of win, add green border to hand vector
            computerHand.classList.add('lose');     // incase of loss, add red border to hand vector
    
        }, {once:true});

    }else if(playerChoice=="scissors" && computerChoice=="paper"){
        playerScore++;

        playerHand.addEventListener('animationend',function(){
            playerHand.classList.add('win');        // incase of win, add green border to hand vector
            computerHand.classList.add('lose');     // incase of loss, add red border to hand vector
            
        }, {once:true});

    }else if(playerChoice=="paper" && computerChoice=="rock"){
        console.log(`You win! Paper beats rock!`);
        playerScore++;

        playerHand.addEventListener('animationend',function(){
            playerHand.classList.add('win');        // incase of win, add green border to hand vector
            computerHand.classList.add('lose');     // incase of loss, add red border to hand vector
        }, {once:true});

    }else if(computerChoice=="rock" && playerChoice=="scissors"){
        computerScore++;

        playerHand.addEventListener('animationend',function(){
            playerHand.classList.add('lose');       // incase of loss, add red border to hand vector
            computerHand.classList.add('win');      // incase of win, add green border to hand vector
            
        }, {once:true});

    }else if(computerChoice=="scissors" && playerChoice=="paper"){
        computerScore++;
        playerHand.addEventListener('animationend',function(){
            playerHand.classList.add('lose');       // incase of loss, add red border to hand vector
            computerHand.classList.add('win');      // incase of win, add green border to hand vector
            
        }, {once:true});

    }else if(computerChoice=="paper" && playerChoice=="rock"){
        computerScore++;
        playerHand.addEventListener('animationend',function(){
            playerHand.classList.add('lose');       // incase of loss, add red border to hand vector
            computerHand.classList.add('win');      // incase of win, add green border to hand vector
            
        }, {once:true});
    }

    if(playerScore == 5){
        btns.forEach(btn =>{
            btn.classList.add('end');
        });
        document.querySelector('#result').textContent = "You Win!"
    }else if(computerScore == 5){
        btns.forEach(btn =>{
            btn.classList.add('end');
        });
        document.querySelector('#result').textContent = "You Lose!"
    }

    playerScoreTab.textContent = playerScore;
    computerScoreTab.textContent = computerScore;
}

playerHand = document.createElement('img');

function playerAnimation(playerChoice){
    container = document.querySelector('#container'); // select container
    playerHand.src = `img/${playerChoice}-reverse.png`; // select image according to player choice
    
    playerHand.classList.remove('win'); // remove style after every round
    playerHand.classList.remove('lose');
    playerHand.classList.remove('draw');

    container.appendChild(playerHand);
    rotatePlayer(playerHand);
    return playerHand;
}

computerHand = document.createElement('img');

function computerAnimation(computerChoice){
    container = document.querySelector('#container'); // select container
    computerHand.src = `img/${computerChoice}.png`;  // select image according to computer choice
    
    computerHand.classList.remove('win'); // remove style after every round
    computerHand.classList.remove('lose');
    computerHand.classList.remove('draw');

    container.appendChild(computerHand);
    rotateComputer(computerHand);
    return computerHand;
}


function rotateComputer(img){
    img.classList.add('rotate-90-br-cw'); // animate hand after every round
}

function rotatePlayer(img){
    img.classList.add('rotate-90-bl-ccw'); // animate hand after every round
}

