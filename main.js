let handOne = "";
let handTwo = "";
const updateHandOne = (text) => {
  handOne = text.value.toLowerCase().trim();
  console.log(handOne);
};
const updateHandTwo = (text) => {
  handTwo = text.value.toLowerCase().trim();
  console.log(handTwo);
};
let showWinner = "";
const rockPaperScissors = (hand1, hand2) => {
  showWinner = document.createElement("p");
  document.getElementById("winner-is").appendChild(showWinner);
  if (handOne === handTwo) {
    showWinner.innerHTML = "It's a tie!";

    console.log("It's a tie!");
  } else if (
    (handOne === "rock" && handTwo === "scissors") ||
    (handOne === "paper" && handTwo === "rock") ||
    (handOne === "scissors" && handTwo === "paper")
  ) {
    showWinner.innerHTML = "Hand one wins!";
    console.log("Hand one wins!");
  } else if (
    (handOne === "rock" && handTwo === "paper") ||
    (handOne === "paper" && handTwo === "scissors") ||
    (handOne === "scissors" && handTwo === "rock")
  ) {
    showWinner.innerHTML = "Hand two wins!";
    console.log("Hand two wins!");
  }
};
// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
// function getPrompt() {
//   rl.question("hand1: ", (answer1) => {
//     rl.question("hand2: ", (answer2) => {
//       console.log(rockPaperScissors(answer1, answer2));
//       getPrompt();
//     });
//   });
// }
