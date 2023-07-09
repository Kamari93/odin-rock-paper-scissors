console.log('Keep going 🍊')

// 1. Get user to input rock, paper, scissors with buttons DOM and event listeners
// 2. Create funct called getComputerChoice that randomly returns rock, paper, scissors 
// 3. Create funct that plays a single round of rps with 2 params & declares winner after each round
// 4. Create funct called game that uses the above functs to play multiple rounds, keeps score, and declares a winner once rounds hit multiples of 5

// DOM Manipulation
const rounds = document.querySelector("#rounds");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const reset = document.querySelector(".reset-btn");
let userWeapon = document.querySelector(".user-choice");
let cpuWeapon = document.querySelector(".cpu-choice");
let userScore = document.querySelector(".man-score");
let cpuScore = document.querySelector(".cpu-score");
let result = document.querySelector(".title-results");
let currentRound = document.querySelector(".current-round");
let finals = document.querySelector(".finals")


let userChoice;
let userTotal = 0;
let cpuTotal = 0;
let tie = 0;
let gamesPlayed = 0;
let results;
let play;
let finalScore;

// add event listeners to each option and if clicked update choice
rock.addEventListener("click", () => {
    userChoice = "Rock";
    // console.log(userChoice)
    let cpu = getComputerChoice();
    play = playRound(userChoice, cpu);
    gamesPlayed++;
    game(play, gamesPlayed, cpu)
});

paper.addEventListener("click", () => {
    userChoice = "Paper";
    // console.log(userChoice)
    let cpu = getComputerChoice();
    play = playRound(userChoice, cpu);
    gamesPlayed++;
    game(play, gamesPlayed, cpu)
});

scissors.addEventListener("click", () => {
    userChoice = "Scissors";
    // console.log(userChoice)
    let cpu = getComputerChoice();
    play = playRound(userChoice, cpu);
    gamesPlayed++;
    game(play, gamesPlayed, cpu)
});

function game(play, gamesPlayed, cpu) {
    if (play.includes('win')) {
        userTotal++;
    } else if (play.includes('lose')) {
        cpuTotal++;
    } else {
        tie++;
    }
    console.log(`user:${userTotal} | cpuTotal:${cpuTotal} | tieTotal: ${tie}`);
    results = [`{user:${userTotal}`, `{cpuTotal:${cpuTotal}`, `Ties: ${tie}`];

    if (gamesPlayed % 5 === 0) {
        // determine the winner after the specified rounds are completed
        if (userTotal > cpuTotal) {
            console.log(`You Won best ${userTotal} out of ${gamesPlayed} with ${tie} tie(s)`);
            finalScore = `You Won best ${userTotal} out of ${gamesPlayed} with ${tie} tie(s)`;
            finals.style.display = "flex";
            finals.textContent = `${finalScore}`;
        } else if (userTotal < cpuTotal) {
            console.log(`The Machine beat you by ${cpuTotal - userTotal} round(s) in a ${gamesPlayed} round match with ${tie} tie(s)`);
            finalScore = `The Machine beat you by ${cpuTotal - userTotal} round(s) in a ${gamesPlayed} round match with ${tie} tie(s)`;
            finals.style.display = "flex";
            finals.textContent = `${finalScore}`;
        } else {
            console.log(`It was a draw you won ${userTotal} round(s) and the Machine won ${cpuTotal} round(s) in a ${gamesPlayed} round match with ${tie} tie(s)`);
            finalScore = `It was a draw you won ${userTotal} round(s) and the Machine won ${cpuTotal} round(s) in a ${gamesPlayed} round match with ${tie} tie(s)`;
            finals.style.display = "flex";
            finals.textContent = `${finalScore}`;
        }
    } else {
        finals.style.display = "none";
    };
    currentRound.textContent = `Round: ${gamesPlayed}`;
    userWeapon.textContent = `You Selected: ${userChoice}.`;
    cpuWeapon.textContent = `Machine Selected: ${cpu}.`;
    userScore.textContent = `Your Score: ${userTotal}/${gamesPlayed}`;
    cpuScore.textContent = `Machine's Score: ${cpuTotal}/${gamesPlayed}`;
    result.textContent = `${results[2]}`;
}


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

// ******* Play a single round of rps *********

// create playRound funct that plays a single round and takes in 2 params: user & cpu
function playRound(user, cpu) {
    // if user chooses rock 
    if (user === "Rock") {
        if (cpu === "Paper") {
            return `You lose! ${cpu} beats ${user}!`;
        } else if (cpu === "Scissors") {
            return `You win! ${user} beats ${cpu}!`;
        } else {
            return `It's a tie ${user} can't beat ${cpu}`;
        }
    }
    // if user chooses paper
    else if (user === "Paper") {
        if (cpu === "Scissors") {
            return `You lose! ${cpu} beats ${user}!`;
        } else if (cpu === "Rock") {
            return `You win! ${user} beats ${cpu}!`;
        } else {
            return `It's a tie ${user} can't beat ${cpu}`;
        }
    }
    // if user chooses scissors
    else {
        if (cpu === "Rock") {
            return `You lose! ${cpu} beats ${user}!`;
        } else if (cpu === "Paper") {
            return `You win! ${user} beats ${cpu}!`;
        } else {
            return `It's a tie ${user} can't beat ${cpu}`;
        }
    }
}

reset.addEventListener("click", () => {
    window.location.reload();
})

