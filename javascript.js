
let compChoice = ""; 
let humanChoice = ""; 
let humanScore = 0; 
let computerScore = 0; 
let counter = 0; 

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



function playGame(){
    while(counter < 5){

        compChoice = getComputerChoice(); 
        humanChoice = getHumanChoice();

        function playRound(humanChoice, compChoice){

            let user_symbol = humanChoice.toLowerCase(); 
            let comp_symbol = compChoice.toLowerCase(); 

            if(user_symbol == 'rock'){

                if(comp_symbol == 'scissors'){
                    humanScore += 1;
                    console.log("You win! Rock beats Scissors");
                    return; 
                }
                else if(comp_symbol == 'paper'){
                    computerScore += 1; 
                    console.log("You lose! Paper beats Rock");
                    return; 
                }
                console.log("You Tie!"); 
                return; 
            }
            else if(user_symbol == 'paper'){

                if(comp_symbol == 'rock'){
                    humanScore += 1; 
                    console.log("You win! Paper beats Rock");
                    return; 
                }
                else if(comp_symbol == 'scissors'){
                    computerScore += 1; 
                    console.log("You lose! Scissors beats Paper"); 
                    return; 
                }
                console.log("You Tie!")
                return; 
            }
            else{
                if(comp_symbol == 'paper'){
                    humanScore += 1; 
                    console.log("You win! Scissors beats Paper");
                    return; 
                }

                else if(comp_symbol == 'rock'){
                    computerScore += 1; 
                    console.log("You lose! Rock beats Scissors"); 
                    return; 
                }
                console.log("You Tie!"); 

                return; 
            }

        }

        playRound(humanChoice, compChoice); 
        counter += 1; 


    }
}

playGame(); 
