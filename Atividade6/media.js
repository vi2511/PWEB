var notas = [];

var nota = null;

for (var i = 1; i <= 3; i++) {
  nota = prompt('Insira a ' + i + 'ª nota:');
  notas.push(nota);
}

var media = (parseFloat(notas[0]) + parseFloat(notas[1]) + parseFloat(notas[2])) / 3;

alert('A sua média é: ' + media);