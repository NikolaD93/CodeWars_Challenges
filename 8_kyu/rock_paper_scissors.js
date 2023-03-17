const rps = (p1, p2) => {
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";

  if (p1 === paper && p2 === rock) {
    return "Player 1 won!";
  } else if (p1 === scissors && p2 === paper) {
    return "Player 1 won!";
  } else if (p1 === rock && p2 === scissors) {
    return "Player 1 won!";
  } else if (p1 === p2) {
    return "Draw!";
  } else {
    return "Player 2 won!";
  }
};

console.log(rps("paper", "scissors"))
