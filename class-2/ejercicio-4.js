let elements = ["rock", "paper", "scissors"];

function rps(player1, player2) {
  console.log(
    player1 === player2
      ? "empate"
      : (player1 === elements[0] && player2 === elements[2]) ||
        (player1 === elements[1] && player2 === elements[0]) ||
        (player1 === elements[2] && player2 === elements[1])
      ? "Jugador 1 gana"
      : (player2 === elements[0] && player1 === elements[2]) ||
        (player2 === elements[1] && player1 === elements[0]) ||
        (player2 === elements[2] && player1 === elements[1])
      ? "Jugador 2 gana"
      : "no debería haber pasado esto"
  );
}
rps("paper", "paper");

rps("scissors", "paper");
rps("paper", "scissors");

rps("rock", "paper");
rps("paper","rock");

rps("scissors", "rock");
rps("rock", "scissors");
