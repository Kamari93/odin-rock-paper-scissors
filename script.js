console.log('Keep going')

/**
 * Is there a ui? No 
 * What are the inputs? user enters choice of (r,p,s) and cpu random input of (r,p,s)
 * What is the desired output? play 5 rounds of rps keep score of each round 
 * and display the winner of majority rounds at the end
 */

// 1. Prompt the user to input rock, paper, scissors 
// 2. Create funct called getComputerChoice that randomly returns rock, paper, scissors 
// 3. Create funct that plays a single round of rps with 2 params & declares winner after each round
// 4. Create funct called game that uses the above funct to play 5 rounds keeps score and declares a winner at end

// ******* User Input *********
// Only change this var if user inputs the correct info
let validInput;
do {
    // prompt user to input rps and make userInput case insensitive
    let userInput = prompt('Please select your weapon (rock, paper, or, scissors): ').toLowerCase();
    // convert user's input to Title case
    userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    // make sure user only inputs rps values
    if (userInput === "Rock" || userInput === "Paper" || userInput === "Scissors") {
        validInput = userInput
    }
    // run a while loop that only breaks if user inputs a valid answer; !validInput same as validInput === undefined
} while (!validInput);
// Test if valid user recieves desired output
console.log(`User Chose: ${validInput}`);


// ******* Computer Random Choice Funct *********
// create getComputerChoice function that randomly selects between rps
function getComputerChoice() {
    // create an array of options
    let choices = ["Rock", "Paper", "Scissors"];
    // create var that randomly chooses from arr index
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    // return the choice from the function
    return randomChoice;
}

// Test to see if getComputerChoice gives desired output
let computerSelection = getComputerChoice();
console.log(`CPU Chose: ${computerSelection}`);