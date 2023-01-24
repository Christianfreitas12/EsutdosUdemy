

   const pessoa11 = { 
        nome: 'Christian', 
        sobrenome: 'Guimarães',
        idade: '18',

        fala() {
            console.log(` a minha iadade atual é ${this.idade} `);
        },              

        incremento(){ 
            this.idade++;
        }
    };

    pessoa11.fala();
    pessoa11.incremento();
    pessoa11.fala();



    function criaPessoa (nome, sobrenome, idade){
        return{ nome, sobrenome, idade} }

    const pessoa1 = criaPessoa('Christian', 'Guimaraes', '18');
    const pessoa2 = criaPessoa('Mileni', 'Silva', '18');

    console.log(pessoa1.nome, pessoa2.nome)

