/*1.Impressão de Números de 1 a 10
Escreva um loop que imprima os números de 1 a 10.*/

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

/*2. Impressão de Números de 10 a 1*/

for (let ind = 10; ind >=1; ind--) {
        console.log(ind)
    }
    
/*3.Números Pares de 1 a 20
Escreva um loop que imprima todos os números pares de 1 a 20.*/

for (let pares = 0; pares <=20; pares++) {
    if(pares % 2 === 0){
        console.log(pares)
    }    
}

/*4.Números Ímpares de 1 a 20
Escreva um loop que imprima todos os números ímpares de 1 a 20.*/

for (let impares = 20; impares >= 1 ; impares--) {
    if (impares % 2 === 1){
        console.log(impares)
    }  
}

/*5.Soma dos Números de 1 a 100
Escreva um loop que calcule a soma dos números de 1 a 100.*/

let total = 0

for (let numSoma = 1; numSoma <= 100; numSoma++){
    total += numSoma   
}
console.log(`A soma total é: ${total}`)
 
/*6.Cálculo do Fatorial
Escreva um loop que calcule o fatorial de um número dado.*/

let numero = 5
let fatorial = 1

for (let numFatorial = 1; numFatorial <= numero; numFatorial++) {
    fatorial *= numFatorial 
}
console.log(`O fatorial de ${numero} é: ${fatorial}`)

/*7.Percorrer uma Array
Escreva um loop que percorra uma array e imprima cada elemento.*/

let arrayFrutas = ['banana', 'laranja', 'morango', 'pera']

for (let i = 0; i < arrayFrutas.length; i++) {
    console.log(arrayFrutas[i]);
  }
//ou
for (let pos in arrayFrutas){
    console.log(arrayFrutas[pos]);   
}
//ou imprime uma string
console.log(arrayFrutas.join(", "))

/*8.Contagem de Vogais
Escreva um loop que percorra uma string e conte o número de vogais.*/

let palavra = "banana"
let contador = 0
const vogais = ["a","e","i","o","u"]

for (let ini = 0; ini < palavra.length; ini++) {
    if(vogais.includes(palavra[ini])){
        contador ++
    }
    
}
console.log(contador);

/*9.Inversão de String
Escreva um loop que inverta uma string.*/

let novapalavra = 'paralelepipeto'
let palavrainvertida = ''

for(let p = novapalavra.length - 1; p >= 0; p--){
    palavrainvertida += novapalavra[p]
}
console.log(palavrainvertida);

/*10.Maior Número em um Array
Escreva um loop que encontre o maior número em um array.*/

let numerosarray = [20, 30, 50, 150, 330, 45]
let maiorNumero = Math.max(...numerosarray)
console.log(maiorNumero)

/*11.Menor Número em um Array
Escreva um loop que encontre o menor número em um array.*/

let Numerosarray = [20, 30, 50, 150, 330, 45]
let menorNumero = Math.min(...Numerosarray)
console.log(menorNumero)

/*12.Criação de um Array com Números de 1 a 10
Escreva um loop que crie um array com os números de 1 a 10.*/

const numbers = []

for (let zeroadez = 1; zeroadez <= 10 ; zeroadez++) {
    console.log(numbers.push(zeroadez))
}

/*13.Multiplicação de Elementos de um Array por 2
Escreva um loop que multiplique todos os números de um array por 2.*/

let doubleNumber = numerosarray.map(xdois => xdois * 2)
console.log(doubleNumber)

for (let it = 0; it  < numerosarray; it++){
    numerosarray[it] *= 2
}
console.log(numerosarray);

/*14.Soma dos Elementos de um Array
Escreva um loop que some todos os elementos de um array.*/
let somaNumeros = numerosarray.reduce((anterior, atual, pos)=>{
     return atual + anterior
})
console.log(somaNumeros);
    

/*15.Criação de um Array com Números Ímpares de 1 a 20
Escreva um loop que crie um array com os números ímpares de 1 a 20.*/

let numerosImpares = []

for(let impar = 1; impar <= 20; impar ++){
    if(impar % 2 === 1){
        numerosImpares.push(impar)
    }
}
console.log(numerosImpares);

/*16.Percorrer Array de Objetos
Escreva um loop que percorra um array de objetos e imprima uma propriedade específica de cada objeto.*/
let pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "Bruno", idade: 30 },
    { nome: "Carla", idade: 28 },
    { nome: "Diego", idade: 22 }
  ];
  
  for (let u = 0; u < pessoas.length; u++) {
    console.log(pessoas[u].nome);  
  }

/*17.Percorrer Propriedades de um Objeto
Escreva um loop que percorra um objeto e imprima todas as suas chaves e valores.*/


/*18.Cópia de Elementos de um Array
Escreva um loop que copie todos os elementos de um array para outro array.*/


/*19.Verificação de Presença de Número em um Array
Escreva um loop que verifique se um número específico está presente em um array.*/


/*20.Remoção de Elementos Duplicados de um Array
Escreva um loop que remova todos os elementos duplicados de um array.*/


/*21.Soma de Números Ímpares Múltiplos de Três
Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 1 até 500.*/


/*22.Alturas de 15 Pessoas
Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e mostrar:
A menor altura do grupo;
A maior altura do grupo;*/


/*23.Média Aritmética e Percentual de Valores
Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores negativos e o percentual de valores negativos e positivos.*/


/*24.Contagem de Números em Intervalos
Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve terminar quando for lido um número negativo.*/


/*25.Contagem de Números Pares e Ímpares
Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos. Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos números lidos. O número que encerrará a leitura será zero.*/


/*26.Números Ímpares entre 100 e 200
Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200.*/


/*27.Tabuada de N
Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de N. Mostre a tabuada na forma: 0 x N = 0, 1 x N = 1N, 2 x N = 2N, ..., 10 x N = 10N.*/


/*28.Sequência em P.A.
Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma sequência em P.A. contendo 10 valores.*/


/*29.Sequência em P.G.
Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma sequência em P.G. contendo 10 valores.*/


/*30.Cálculo do Fatorial
Escreva um algoritmo que leia um valor inicial A e imprima a sequência de valores do cálculo de A! e o seu resultado. Ex: 5! = 5 x 4 x 3 x 2 x 1 = 120.*/


