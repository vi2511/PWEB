function Retangulo(base, altura) {
  this.base = base;
  this.altura = altura;
  this.Area = Area;

  function Area() {
    alert("Área do Retângulo: " + this.base * this.altura);
  }
}

var retangulo = new Retangulo(15, 30);
retangulo.Area();

  function Conta(){
  var correntista, banco, conta, saldo;
  this.getCorrentista = function(){
    return correntista;
  }
  this.getBanco = function(){
    return banco;
  }
  this.getConta = function(){
    return conta;
  }
  this.getSaldo = function(){
    return saldo;
  }
  this.setCorrentista = function(value){
    correntista = value;
  }
  this.setBanco = function(value){
    banco = value;
  }
  this.setConta = function(value){
    conta = value;
  }
  this.setSaldo = function(value){
    saldo = value;
  }
}

function Corrente(){
  var saldoEspecial;
  this.getSaldoEspecial = function () {
    return saldoEspecial;
  }
  this.setSaldoEspecial = function (value) {
    saldoEspecial = value;
  }
}

function Poupanca(){
  var juros, dataVencimento;
  this.getJuros = function () {
    return juros;
  }
  this.getDataVencimento = function () {
    return dataVencimento;
  }
  this.setJuros = function (value) {
    juros = value;
  }
  this.setDataVencimento = function (value) {
    dataVencimento = value;
  }
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

contaCorrente = new Corrente();
contaCorrente.setCorrentista("Rafael Pereira Araujo");
contaCorrente.setBanco("Banco do Brasil");
contaCorrente.setConta("180154-0");
contaCorrente.setSaldo(2500);
contaCorrente.setSaldoEspecial(10000);

contaPoupanca = new Poupanca();
contaPoupanca.setCorrentista("Rafael Teixeira Lima");
contaPoupanca.setBanco("Bradesco");
contaPoupanca.setConta("187778-5");
contaPoupanca.setSaldo(6780);
contaPoupanca.setJuros(0.05);
contaPoupanca.setDataVencimento("10");

alert("CONTA CORRENTE:" +
  "\nNome Correntista: " + contaCorrente.getCorrentista() +
  "\nBanco: " + contaCorrente.getBanco() +
  "\nN° Conta: " + contaCorrente.getConta() +
  "\nSaldo: " + contaCorrente.getSaldo() +
  "\nSaldo Especial: " + contaCorrente.getSaldoEspecial());

alert("CONTA POUPANÇA:" +
  "\nNome Correntista: " + contaPoupanca.getCorrentista() +
  "\nBanco: " + contaPoupanca.getBanco() +
  "\nN° Conta: " + contaPoupanca.getConta() +
  "\nSaldo: " + contaPoupanca.getSaldo() +
  "\nJuros: " + contaPoupanca.getJuros() +
  "\nData Vencimento: Todo dia " + contaPoupanca.getDataVencimento());
