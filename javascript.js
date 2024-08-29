
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

    return  'scissors'; 

}

compChoice = getComputerChoice(); 
console.log(compChoice);

function getHumanChoice(){
    let userChoice = prompt("What's your choice"); 
    while(userChoice > 2){
        userChoice = prompt("What's your choice");
    }

    if(userChoice == 0){
        return 'rock'; 
    }
    else if(userChoice == 1){
        return 'paper'; 
    }

    return  'scissors'
}

humanChoice = getHumanChoice();
console.log(humanChoice);


function playRound(humanChoice, compChoice){

    let user_symbol = humanChoice.toLowerCase(); 
    let comp_symbol = compChoice.toLowerCase(); 

    if(user_symbol == 'rock'){

        if(comp_symbol == 'scissors'){
            humanScore += 1;
        }
        else if(comp_symbol == 'paper'){
            computerScore += 1; 
        }
        return; 
    }
    else if(user_symbol == 'paper'){

        if(comp_symbol == 'rock'){
            humanScore += 1; 
        }
        else if(comp_symbol == 'scissors'){
            computerScore += 1; 
        }
        return; 
    }
    else{
        if(comp_symbol == 'paper'){
            humanScore += 1; 
        }

        else if(comp_symbol == 'rock'){
            computerScore += 1; 
        }

        return; 


    }

}
