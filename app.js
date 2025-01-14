let UserScore = 0;
let ComScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const comscorepara = document.querySelector("#comp-score");

const genComChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randmIdx = Math.floor(Math.random() * 3);
  return option[randmIdx];
};

const drawgame = () => {
  console.log("Game was Draw");
  msg.innerText = "Game was draw";
};
const showWinner = (userWin) => {
  if (userWin) {
    UserScore++;
    userscorepara.innerText = UserScore;
    msg.innerText = "You Win";

    console.log("You Win");
  } else {
    ComScore++;
    comscorepara.innerText = ComScore;
    console.log("you Loose");
    msg.innerText = "You Loose";
  }
};
const playGame = (UserChoice) => {
  console.log("user choic =", UserChoice);
  // Generate computer choice
  const comChoice = genComChoice();
  console.log("comchoice=", comChoice);

  if (UserChoice === comChoice) {
    drawgame();
  } else {
    let userWin = true;
    if (UserChoice === "rock") {
      userWin = comChoice === "paper" ? false : true;
    } else if (UserChoice === "paper") {
      userWin = comChoice === "scissor" ? false : true;
    } else {
      userWin = comChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const UserChoice = choice.getAttribute("id");

    playGame(UserChoice);
  });
});
