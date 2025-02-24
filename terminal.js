// uses strict mode so strings are not coerced, variables are not hoisted, etc...
"use strict";

// brings in the assert module for unit testing
const assert = require("assert");
// brings in the readline module to access the command line
const readline = require("readline");
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {
  // Write code here
  let userOne = hand1.toLowerCase().trim();
  let userTwo = hand2.toLowerCase().trim();
  if (userOne === userTwo) {
    return "It's a tie!";
  } else if (
    (userOne === "rock" && userTwo === "scissors") ||
    (userOne === "paper" && userTwo === "rock") ||
    (userOne === "scissors" && userTwo === "paper")
  ) {
    return "Hand one wins!";
  } else if (
    (userOne === "rock" && userTwo === "paper") ||
    (userOne === "paper" && userTwo === "scissors") ||
    (userOne === "scissors" && userTwo === "rock")
  ) {
    return "Hand two wins!";
  }
};

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === "function") {
  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built returns the expected output. This is from Mochajs.org package
  describe("#rockPaperScissors()", () => {
    it("should detect a tie", () => {
      assert.equal(rockPaperScissors("rock", "rock"), "It's a tie!");
      assert.equal(rockPaperScissors("paper", "paper"), "It's a tie!");
      assert.equal(rockPaperScissors("scissors", "scissors"), "It's a tie!");
    });
    it("should detect which hand won", () => {
      assert.equal(rockPaperScissors("rock", "paper"), "Hand two wins!");
      assert.equal(rockPaperScissors("paper", "scissors"), "Hand two wins!");
      assert.equal(rockPaperScissors("rock", "scissors"), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors("rOcK", " paper "), "Hand two wins!");
      assert.equal(rockPaperScissors("Paper", "SCISSORS"), "Hand two wins!");
      assert.equal(rockPaperScissors("rock ", "sCiSsOrs"), "Hand one wins!");
    });
  });
} else {
  // always returns ask the user for another input
  getPrompt();
}
