export let playGame = (player1, player2) => {
  let game = null;

  if (player1.select === player2.select) {
    game = null;
  }

  if (player1.select === "scissor" && player2.select === "rock") {
    game  = player1;
  }

  if (player1.select === "paper" && player2.select === "scissor") {
    game  = player1;
  }

  if (player1.select === "rock" && player2.select === "paper") {
    game  = player1;
  }

  if (player1.select === "rock" && player2.select === "paper") {
    game  = player2;
  }

  if (player1.select === "scissor" && player2.select === "paper") {
   game = player2;
  }

  if (player1.select === "paper" && player2.select === "rock") {
    game  = player2;
  }

  return game;
};