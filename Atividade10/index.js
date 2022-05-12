var Alunos1 = new Object();
Alunos1.propriedade = new Object();
Alunos1.propriedade.ra = "000304813011";
Alunos1.propriedade.nome = "Pedro";

console.log(Alunos1)

var Alunos2 = {
  propriedade: {
    ra: "0003048183010",
    nome: "Rafael"
  }
}

console.log(Alunos2)

var Alunos3 = {}
Alunos3 = { ...Alunos3, propriedade: { ra: "0003048183010", nome: "Marcelo" } }

console.log(Alunos3)
