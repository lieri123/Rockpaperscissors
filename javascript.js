
let compChoice = ""; 
let humanChoice = ""; 
let humanScore = 0; 
let computerScore = 0; 

function getComputerChoice(){

    let symbol = Math.floor(Math.random()*3);

    if(symbol == 0){
        return 'rock'; 
    }
    else if(symbol == 1){
        return 'paper'; 
    }

    return  'scissors'

}

compChoice = getComputerChoice(); 
console.log(compChoice);

function getHumanChoice(){
    let userChoice = prompt("What's your choice"); 
    while(userChoice > 2){
        userChoice = prompt("What's your choice");
    }

    return userChoice; 
}

humanChoice = getHumanChoice();
humanChoice = Number(humanChoice); 


