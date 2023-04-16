function computerChoice(){
    let choice = (Math.random() * 10).toFixed(2);
    return choice;
}

console.log(computerChoice());