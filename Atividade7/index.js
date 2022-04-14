var escolhaUsuario = prompt("Escolhe pedra, papel ou tesoura?");

var escolhaPC = Math.random();
if (escolhaPC < 0.34) {
  escolhaPC = "pedra";
} else if (escolhaPC <= 0.67) {
  escolhaPC = "papel";
} else {
  escolhaPC = "tesoura";
} console.log("Escolha PC: " + escolhaPC);


var comparar = function (Escolha1, Escolha2) {
  if (Escolha1 === Escolha2)
    return "Deu empate!";
  else if (Escolha1 === "pedra") {
    if (Escolha2 === "tesoura")
      return "Você venceu! Pedra vence tesoura."
    else {
      return "Você perdeu :( Papel vence pedra."
    }
  }

  else if (Escolha1 === "papel") {
    if (Escolha2 === "pedra")
      return "Você venceu! Papel vence pedra."
    else {
      return "Você perdeu :( Tesoura vence papel."
    }
  }

  else if (Escolha1 === "tesoura") {
    if (Escolha2 === "papel")
      return ("Você venceu! Tesoura vence papel.")
    else {
      return ("Você perdeu :( Pedra vence tesoura.")
    }
  }

};
alert(comparar(escolhaUsuario, escolhaPC));