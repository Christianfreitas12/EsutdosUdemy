// typeof - descobrir o tipo do dado.
// const - não conseguimos alterar o valor de uma const.

let nome1 = "Christian";
console.log(nome1);


//EXERCICIO
const nome = 'Christian de Freitas';
const sobreNome = 'Guimarães';
const idade = 18;
const peso = 80;
const altura = 1.80;

let imc = peso / (altura * altura);
let data = new Date(); // data atual
let ano = data.getFullYear(); // pegar ano atual.
let nascimento = ano - idade;

console.log(`${nome} ${sobreNome} tem  ${idade} anos, pesa  ${peso}Kg `);
console.log(`tem ${altura} e seu imc é de ${imc}`);
console.log(`${nome}  ${sobreNome}  nasceu em  ${nascimento}.`)