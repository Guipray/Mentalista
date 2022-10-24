var numero = parseInt(Math.random() * 11);
var tentativas = 3;
var chances = document.getElementById("tentativas");
chances.innerHTML = "Você possui " + tentativas + " tentativas";
var novo = document.getElementById("novoJogo");

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var resultado = document.getElementById("resultado");
  if ((chute >= 0) & (chute <= 10)) {
    if (chute == numero) {
      resultado.innerHTML =
        "Parabéns, você acertou o número que eu pensei! Eu pensei no número " +
        numero +
        "!";
      document.getElementById("valor").disabled = true;
      document.getElementById("botao").disabled = true;
      novo.innerHTML =
        '<button type"submit" onClick="novoJogo()">Novo Jogo</button>';
    } else {
      if (numero > chute) {
        resultado.innerHTML =
          "O número " +
          chute +
          " é menor que o número que eu escolhi! Tente outro!";
        tentativas = tentativas - 1;
        chances.innerHTML = "Você possui " + tentativas + " tentativas";
      } else if (numero < chute) {
        resultado.innerHTML =
          "O número " +
          chute +
          " é maior do que o número que eu escolhi! Tente outro!";
        tentativas = tentativas - 1;
        chances.innerHTML = "Você possui " + tentativas + " tentativas";
      }
    }
  } else if (chute < 0 || chute > 10) {
    resultado.innerHTML = "O valor digitado deve ser entre 0 e 10!";
  } else {
    resultado.innerHTML = "Você se esqueceu do número no campo acima!";
  }
  if (tentativas == 0) {
    resultado.innerHTML =
      "Suas tentativas acabaram! O número certo era o " + numero;
    document.getElementById("valor").disabled = true;
    document.getElementById("botao").disabled = true;
    novo.innerHTML =
      '<button type"submit" onClick="novoJogo()">Novo Jogo</button>';
  }
  document.getElementById("valor").value = "";
}

function novoJogo() {
  numero = parseInt(Math.random() * 11);
  tentativas = 3;
  chances.innerHTML = "Você possui " + tentativas + " tentativas";
  resultado.innerHTML = "";
  document.getElementById("valor").value = "";
  document.getElementById("valor").disabled = false;
  document.getElementById("botao").disabled = false;
  novo.innerHTML = "";
}