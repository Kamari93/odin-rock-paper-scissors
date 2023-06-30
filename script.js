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
// prompt user to input rps and make userInput case insensitive
let userInput = prompt('Please select your weapon (rock, paper, or, scissors): ').toLocaleLowerCase();

// make sure user only inputs rps values
while (userInput !== "rock" || userInput !== "paper" || userInput !== "scissors") {
    userInput = prompt('Please make sure to select your weapon with these options (rock, paper, or, scissors): ').toLocaleLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        break;
    }
}
// console.log(userInput)
