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

