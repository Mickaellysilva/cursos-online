/*
Operadores de Comparação
Exercício 1 - Verifique o intervalo entre números: será que é par?
Neste exercício você vai desenvolver um programa que verifica se um número está no intervalo entre 20 e 50 e se o número é par. Abaixo existe uma variável com o número a ser verificado:

          
            let numero = 30;
          
        
Você precisa:
verificar se a variável numero é maior ou igual a 20 e menor ou igual a 50, e se o valor contido nela é par;
criar uma variável chamada resultado e atribuir o resultado da verificação a ela;
fazer um console.log do resultado.
*/

/***** Não altere os códigos dentro desse bloco *****/
let numero = 30;
/***** Não altere os códigos dentro desse bloco *****/
/***** Escreva seu código nas linhas abaixo *****/

resultado=numero>=20 && numero<=50;
console.log(resultado)

/*
Exercício 2 - Utilize o operador lógico correto: feliz ou triste?
Abaixo existem duas variáveis, uma se chama local e a outra estadoEmocional

    let local = 'praia';
    let estadoEmocional;
A variávellocal representa o lugar em que a pessoa está no momento;
A variável estadoEmocional representa qual o estado emocional da pessoa ao estar nesse local;
Crie uma lógica para saber o valor de estadoEmocional:

O valor da variável estadoEmocional deve ser uma verificação se o valor da variável local for igual a praia OU a variável local seja igual a cinema;
*/

/***** Escreva seu código nas linhas abaixo *****/
let local = 'praia';
let estadoEmocional;
local==='praia' || local==='cinema';
estadoEmocional='feliz';

/*
Exercício 3 - Reatribua valores: Houston, nós temos um problema!
Em um laboratório da Nasa, cientistas se depararam com um erro muito grave em alguns dos computadores de bordo da nave Apollo 11. Você foi designado para encontrar a falha e corrigi-la. Ao estudar o código, encontrou as seguintes variáveis:

    let temOxigenioNoEspaco = true;
    let aTerraEPequena = true;
Para que o erro seja corrigido, você precisa REATRIBUIR os valores dessas variáveis para que os computadores de bordo da nave Apollo 11 voltem a operar normalmente. Para isso:

Reatribua o valor da variável temOxigenioNoEspaco de forma a negar seu valor original;
Reatribua o valor da variável aTerraEPequena de forma a negar seu valor original;
*/

/***** Não altere os códigos dentro desse bloco *****/
let temOxigenioNoEspaco = true;
let aTerraEPequena = true;
/***** Não altere os códigos dentro desse bloco *****/
/***** Escreva seu código nas linhas abaixo *****/

temOxigenioNoEspaco= !true;
aTerraEPequena= !true;

/*
Exercício 4 - Analise o login e a senha: a credencial está correta?
Utilize as variáveis abaixo para escrever um programa que analisará o login e a senha de uma pessoa usuária:

    let login = 'joabCassimiro';
    let senha = '12345678';
Você deve verificar se as credênciais estão corretas:
Crie uma variável que conterá o resultado da verificação, dê a ela o nome de verificaCredenciais;
Compare se a variável login é estritamente igual a 'joabCassimiro' e se a variável senha é estritamente igual a '12345678';
Atribua o retorno da comparação à variável verificaCredenciais.;
Imprima no console o resultado da comparação.
*/

let login = 'joabCassimiro';
let senha = '12345678';
/***** Não altere os códigos dentro desse bloco *****/
/***** Escreva seu código nas linhas abaixo *****/

let verificaCredenciais = !true

verificaCredenciais= login==='joabCassimiro' && senha==='12345678';
console.log(verificaCredenciais);

/*
Exercício 5 - Negue o valor: !false ou !true
Juninho é um cara gente fina, mas não gosta muito de praia… 🧐 Para ajudar Juninho a mudar de ideia, você deve escrever um programa que vai fazer com que ele goste de praia. Para isso, utilize a variável disponibilizada abaixo e negue o valor dela:

    let gostoPorPraia = false;
Você precisa negar o valor contido na variável gostoPorPraia
Crie uma variável chamada novoGostoPorPraia e atribua a ela a negativa da variável gostoPorPraia;
Imprima o valor da variável novoGostoPorPraia no console;
*/

let gostoPorPraia = false;
/***** Não altere os códigos dentro desse bloco *****/
/***** Escreva seu código nas linhas abaixo *****/

novoGostoPorPraia= !gostoPorPraia;
console.log(novoGostoPorPraia);
