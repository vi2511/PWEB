
var numero1, numero2;

numero1 = prompt('Insira o primeiro número:');
numero2 = prompt('Insira o segundo número: ');

var soma = parseFloat(numero1) + parseFloat(numero2);
var subtracao = parseFloat(numero1) - parseFloat(numero2);
var produto = parseFloat(numero1) * parseFloat(numero2);
var divisao = parseFloat(numero1) / parseFloat(numero2);
var resto = parseFloat(numero1) % parseFloat(numero2);

document.write(`<p> Soma: ${soma}</p>`);
document.write(`<p> Subtração:  ${subtracao}</p>`);
document.write(`Produto: ${produto}</p>`);
document.write(`Divisão: ${divisao}</p>`);
document.write(`Resto: ${resto}</p>`);