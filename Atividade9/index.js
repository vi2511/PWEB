var n1;
var n2;
var n3;

numero1 = prompt('Insira 1ª número:');
numero2 = prompt('Insira 2ª número:');
numero3 = prompt('Insira 3ª número:');

function MaiorNumero(n1, n2, n3) {
    const numbers = []
    numbers.push(Number(n1));
    numbers.push(Number(n2));
    numbers.push(Number(n3));

    numbers.sort((a, b) => {
        if (b > a) return 1;
        if (b < a) return -1;
        if (b == a) return 0;
    })

    return numbers[0];
};

function OrdenacaoNumero(n1, n2, n3) {
    const numbers = []
    numbers.push(Number(n1));
    numbers.push(Number(n2));
    numbers.push(Number(n3));

    numbers.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        if (a == b) return 0;
    })

    return (String(numbers[0]) + ', ' + String(numbers[1]) + ', ' + String(numbers[2]));
};

alert('O maior número é: ' + MaiorNumero(numero1, numero2, numero3))
alert('Ordenação Crescente: ' + OrdenacaoNumero(numero1, numero2, numero3))
