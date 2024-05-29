/*
if/else
Exercício 31 - Atribua uma mensagem ✉️
Criar um algoritmo que atribui uma mensagem à variável por meio de uma condicional if.

Para isso, siga as instruções a seguir:

Crie uma variável chamada atribuirMensagem e atribua o valor true à ela;
Crie uma variável chamada mensagem para armazenar uma string que será a mensagem, mas não atribua nenhum valor para ela;
Crie uma estrutura condicional if para que caso a variável atribuirMensagem seja verdadeira, a variável mensagem receba a string 'Olá, Tryber!';
*/

atribuirMensagem=true;
mensagem=String;
function ifElseExercise() {
  /***** Escreva seu if nas linhas abaixo *****/
  if (atribuirMensagem===true){
    mensagem='Olá, Tryber!';
    console.log(mensagem)
  }

}

/*
Verifique se é par ou ímpar 🔢
Crie um algoritmo que verifica se o valor da variável num é par ou ímpar:

let num = 22;
let mensagem;
Se a variável num guarda um valor par, altere a variável mensagem para 'num é par!', onde num é o próprio número. Por exemplo: '6 é par!';

Se a variável num guarda um valor ímpar, altere a variável mensagem para 'num é ímpar!', onde num é o próprio número. Por exemplo: '7 é ímpar!';

Use a operação de módulo (%) para descobrir o resto de num / 2.
*/

let num = 22;
let mensagem;

function ifElseExercise() {
  if (num%2===0){
    mensagem=num+' '+'é par!';
  }
  else{
    mensagem=num+ ' '+'é ímpar!';
  }
}

/*
Calcule a media 🧮
Crie um algoritmo que use duas notas, armazenadas nas variáveis nota1 e nota2, de uma pessoa estudante para calcular a média e utilize a variável resultado para exibir se a pessoa está ou não aprovada:

let nota1 = 8;
let nota2 = 6;
let media;
let resultado;
Calcule a media e salve na variável media;
Se a média calculada for maior ou igual a 7, o valor da variável resultado deve ser: 'Pessoa estudante aprovada';
Some as duas notas: 6 + 7 = 13;
Como temos duas notas, dividimos o resultado da soma por 2: let media = 13/2 = 6.5;
Você pode fazer: let media = (nota1 + nota2) / 2.
*/

/***** Não altere os códigos dentro desse bloco *****/
let nota1 = 8;
let nota2 = 6;
let media;
let resultado;
/***** Não altere os códigos dentro desse bloco *****/

function ifElseExercise() {
  /***** Escreva seu if nas linhas abaixo *****/
media=(nota1+nota2)/2
 if (media>=7){
   resultado='Pessoa estudante aprovada';
 } 
}

/*
Encontre a pessoa mais velha 👵
Julia e Erick estão aprendendo a programar em JavaScript pela Trybe. Juntos eles querem construir um algoritmo capaz de informar, no console, qual dos dois é mais velho. Ajude-os a elaborar esse algoritmo com as seguintes condições:

Se o valor da variável idadeJulia for maior que o valor da variável idadeErick:
Atribua à variável verificaIdadePessoas a string 'Julia é mais velha que Erick';
Caso a condição anterior seja falsa:
Verifique se o valor da variável idadeErick é maior que o valor da variável idadeJulia;
Atribua à variável verificaIdadePessoas a string 'Erick é mais velho que Julia'.
Se nenhuma das condições anteriores for verdadeira:
tribua à variável verificaIdadePessoas a string 'Possuem a mesma idade';
Utilize as seguintes variáveis e seus respectivos valores no código:

let idadeJulia = 25;
let idadeErick = 21;
let verificaIdadePessoas = '';
*/

/***** Não altere os códigos dentro desse bloco *****/
let idadeJulia = 25;
let idadeErick = 21;
let verificaIdadePessoas = '';
/***** Não altere os códigos dentro desse bloco *****/

function ifElseExercise() {
  /***** Escreva seu if nas linhas abaixo *****/
 if (idadeJulia>idadeErick){
   verificaIdadePessoas='Julia é mais velha que Erick';
 }
 else{
  verificaIdadePessoas='Erick é mais velho que Julia';
 }



}

