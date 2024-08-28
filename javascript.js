
let compChoice = 0; 
let humanChoice = 0; 

function getComputerChoice(){

    return Math.floor(Math.random()*3); 

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


