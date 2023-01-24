const Num = Number(prompt('Digite um número'));
const NumeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');



NumeroTitulo.innerHTML = Num;
texto.innerHTML = `<p> Raiz Quadrada: ${Num ** 0.5} </p>`;
texto.innerHTML  += `<p> ${Num} é inteiro: ${Number.isInteger(Num)} </p>`;
texto.innerHTML  += `<p> É NaN: ${Number.isNaN(Num)} </p>`;
texto.innerHTML  += `<p> Arredondando para baixo ${Math.floor(Num)} </p>`;
texto.innerHTML  += `<p> Arredondando para cima  ${Math.ceil(Num)} </p>`;
texto.innerHTML  += `<p> Com duas casas decimais: ${Num.toFixed(2)} </p>`;



