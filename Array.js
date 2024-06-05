/*Lista de compras 🧾
Imagine que você está saindo para fazer compras no supermercado com a seguinte lista:

Maçã
Biscoito/Bolacha
Banana
Café em pó
Leite
Arroz
Crie uma variável chamada listaDeCompras e atribua um array com as informações da lista acima.
*/
listaDeCompras=['Maçã', 'Biscoito/Bolacha', 'Banana', 'Café em pó', 'Leite', 'Arroz'];

/*
Substituir e adicionar itens em um array 🔄
Cleyton decidiu promover uma festa no final de semana, e até já possui uma lista de convidados definida:

const convidados = ['Adilson', 'Claudio', 'Juliana', 'Vinícius'];
Na sexta-feira a noite, ele lembrou de convidar mais três amigos: Laura, Guilherme e Leticia. Além disso, Juliana entrou em contato e cancelou sua presença.

Crie um algoritmo que ajude Cleyton a manipular o array convidados para:

Substituir o nome 'Juliana' por 'Laura';
Adicionar 'Guilherme' e 'Leticia' no array.
*/

const convidados = ['Adilson', 'Claudio', 'Juliana', 'Vinícius'];
/***** Escreva seu código nas linhas abaixo *****/
convidados.push('Guilherme', 'Leticia');
convidados[2]='Laura';

/*Manipulando sabores de sorvetes e coberturas 🍦
Chegou o verão e a clientela de uma sorveteria cresceu. João, dono do estabelecimento, precisa de ajuda no controle do seu estoque. Ajude o João a descobrir:

A quantidade de sabores de sorvete;
A quantidade de cobertura disponível.
Considere as listas a seguir:

Lista de sabores de sorvete:
Chocolate
Morango
Açaí
Creme
Flocos
Lista de sabores de coberturas:
Chocolate
Morango
Doce de leite
Todos os sabores de sorvete devem estar em um array na variável sabores;

Todos os sabores de cobertura devem estar em um array na variável coberturas;

Mostre no console duas mensagem informando as quantidades de sabores de cada lista, por exemplo:

Quantidade de sabores de sorvete: 5;

Quantidade de sabores de cobertura: 3.
*/

/***** Escreva seu código nas linhas abaixo *****/
sabores=['Chocolate', 'Morango', 'Açaí', 'Creme', 'Flocos'];
coberturas=['Chocolate', 'Morango', 'Doce de leite'];

console.log('Quantidade de sabores de sorvete: 5');
console.log('Quantidade de sabores de cobertura: 3')

