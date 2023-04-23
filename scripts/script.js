const btns = document.querySelectorAll('img');  // select all buttons
let playerScore = 0;    // set player score to 0
let computerScore = 0;  // set computer score to 0

const playerScoreTab = document.querySelector('#playerScoreTab'); // select player score tab
const computerScoreTab = document.querySelector('#computerScoreTab');  // select computer score tab

playerScoreTab.textContent = playerScore;   // show the starting score (0)
computerScoreTab.textContent = computerScore;   // show the starting score (0)



btns.forEach(btn =>{
    btn.addEventListener('click',playRound);    //  each button click will play a round
});


function getComputerChoice(){
    let probability = (Math.random() * 100).toFixed(2); // gives random number between 00.00 and 99.99
    if (probability<=33.33){
        return "rock"
    }else if(probability<=66.66){
        return "paper";
    }else{
        return "scissors";
    }
}

playerHand = document.createElement('img'); // creates an empty image node

function playerAnimation(playerChoice){
    container = document.querySelector('#container'); // select container
    playerHand.src = `img/${playerChoice}-reverse.png`; // select image according to player choice in the empty image node
    
    playerHand.classList.remove('win'); // remove style after every round (win is a green border around image node)
    playerHand.classList.remove('lose'); // lose is a red border around image node
    playerHand.classList.remove('draw'); // draw is a yellow border around image node

    container.appendChild(playerHand);  // add image node to container
    rotatePlayer(playerHand);   // enable image node animation
    return playerHand;  // return image node to be used in playRound
}

computerHand = document.createElement('img');

function computerAnimation(computerChoice){
    container = document.querySelector('#container'); // select container
    computerHand.src = `img/${computerChoice}.png`;  // select image according to computer choice
    
    computerHand.classList.remove('win'); // remove style after every round (win is a green border around image node)
    computerHand.classList.remove('lose');  // lose is a red border around image node
    computerHand.classList.remove('draw');  // draw is a yellow border around image node

    container.appendChild(computerHand); // add image node to container 
    rotateComputer(computerHand); // enable image node animation
    return computerHand; // return image node to be used in playRound
}


function rotateComputer(img){
    img.classList.add('rotate-90-br-cw'); // animate hand when a button is clicked
}

function rotatePlayer(img){
    img.classList.add('rotate-90-bl-ccw'); // animate hand when a button is clicked
}


 function playRound(){
    const computerChoice = getComputerChoice();
    const playerChoice = this.id; // gets id of the button clicked, id's of the buttons are rock paper or scissors

    playerHand = playerAnimation(playerChoice); // plays animation and returns the image node
    computerHand = computerAnimation(computerChoice);   // plays animation and returns the image node


    if(playerChoice == computerChoice){
        playerHand.addEventListener('animationend',function(){
            playerHand.classList.add('draw');           // incase of draw, add yellow border to both image nodes
            computerHand.classList.add('draw');
        }, {once:true});
        
    }else if(playerChoice=="rock" && computerChoice=="scissors"){
        playerScore++;
        

        playerHand.addEventListener('animationend',function(){
            playerHand.classList.add('win');        // incase of win, add green border to player image node
            computerHand.classList.add('lose');     // incase of loss, add red border to computer image node
        }, {once:true});

    }else if(playerChoice=="scissors" && computerChoice=="paper"){
        playerScore++;
        playerHand.addEventListener('animationend',function(){
            playerHand.classList.add('win');        // incase of win, add green border to player image node
            computerHand.classList.add('lose');     // incase of loss, add red border to computer image node
        }, {once:true});

    }else if(playerChoice=="paper" && computerChoice=="rock"){
        playerScore++;
        playerHand.addEventListener('animationend',function(){
            playerHand.classList.add('win');        // incase of win, add green border to player image node
            computerHand.classList.add('lose');     // incase of loss, add red border to computer image node
        }, {once:true});

    }else if(computerChoice=="rock" && playerChoice=="scissors"){
        computerScore++;
        playerHand.addEventListener('animationend',function(){
            playerHand.classList.add('lose');       // incase of loss, add red border to computer image node
            computerHand.classList.add('win');      // incase of win, add green border to player image node

        }, {once:true});

    }else if(computerChoice=="scissors" && playerChoice=="paper"){
        computerScore++;
        playerHand.addEventListener('animationend',function(){
            playerHand.classList.add('lose');       // incase of loss, add red border to computer image node
            computerHand.classList.add('win');      // incase of win, add green border to player image node
        }, {once:true});

    }else if(computerChoice=="paper" && playerChoice=="rock"){
        computerScore++;
        playerHand.addEventListener('animationend',function(){
            playerHand.classList.add('lose');       // incase of loss, add red border to computer image node
            computerHand.classList.add('win');      // incase of win, add green border to player image node
            
        }, {once:true});
    }

    if(playerScore == 5){
        btns.forEach(btn =>{    // hide buttons when rounds ends
            btn.classList.add('end');
        });

        document.querySelector('#result').classList.remove('end');  // when round ends, show result
        document.querySelector('#result').textContent = "You Win!"  // result content

        playAgain.classList.remove('end');  // when round ends, show play again option
        playAgain.classList.add('focus-in-contract'); // play again entry animation
    }else if(computerScore == 5){

        btns.forEach(btn =>{    // hide buttons when round ends
            btn.classList.add('end');
        });

        document.querySelector('#result').classList.remove('end');  // when round ends, show result
        document.querySelector('#result').textContent = "You Lose!" // result content

        playAgain.classList.remove('end');  // when round ends, show play again option
        playAgain.classList.add('focus-in-contract');   // play again entry animation
    }

    playerScoreTab.textContent = playerScore;
    computerScoreTab.textContent = computerScore;
}


playAgain = document.querySelector('#playAgain');
playAgain.addEventListener('click',reset);  // when play again is clicked, scores are reset


function reset(){
    playerScore = 0;    // reset scores
    computerScore = 0;  // reset scores

    playerScoreTab.textContent = playerScore;   // score content
    computerScoreTab.textContent = computerScore;   // score content

    btns.forEach(btn =>{
        btn.classList.remove('end');    // show buttons again
    });

    this.classList.add('end');  // hide play again option after clicked
    document.querySelector('#result').classList.add('end'); // hide result of previous game
}