// criar um array de numeros do 1 ao 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// PUSH adicionar um elemento no final
numeros.push(50);

//console.log(numeros);

// PUSH (,)adicionar 3 elementos: 100, 200, 400
numeros.push(100, 200, 400);
//console.log(numeros);

let novosNumeros = [100, 200, 400]
numeros.push(novosNumeros);
//console.log(numeros);

//POP remover o último elemento
numeros.pop();
//console.log(numeros);

//UNSHIFT adicionar elemento no inicio do array
numeros.unshift('banana');
//console.log(numeros);

// 6 - procurar um elemento pelo indice

// LENGTH tamanho do array
console.log(`Tamanho do array é: ${numeros.length}`);


//SPLICE insere, remove ou substitui elementos de um array e modifica o original
let meio = (numeros.length) / 2;
let meioArredondado = Math.floor(meio);

numeros.splice(meioArredondado, 0, 'Novo elemento')

console.log(numeros);
console.log(meioArredondado);

const numeros2 = [5, 6, 15, 23, 43, 55]

let removernumero = numeros2.splice(2,2) //vai imprimir dois elementos  partir do indice 2
console.log(removernumero)

console.log(numeros2) //imprime o array com os dois elementos removidos a partir do indice 2

const numeros3 = [5, 6, 15, 23, 43, 55]

let adicionanumero = numeros3.splice(2, 0, 3, 4)//adiciona números a partir do indice 2
console.log(` adiciona número ${numeros3}`);

numeros3.splice(1, 2, 'a', 'b')//remove dois elementos a partir do indice 1 e insere a e b
console.log(` substitui ${numeros3}`);


// Criar um array de números passando um inicio e o fim
let array = Array.from({ length: 10}, (_, index) => console.log(`Item${index+1}`) );
console.log(array);


// Criar uma função onde passa o inicio e o fim de uma lista de Item, do 'Item[inicio] até o 'Item[fim]'
const criarArrayItem = (inicio, fim) => {
    let tamanho = fim - inicio + 1
    let array = Array.from({ length: tamanho}, (_, index) => console.log(`Item${index+inicio}`));    
}

criarArrayItem(1, 5)


//CONCAT: concatena dois arrays
const num1 = [2, 3, 5, 6, 8]
const num2 = [5, 11, 16, 40]

const concatena = num1.concat(num2)
console.log(concatena);


//SET: concatena sem repetit
const concatenaSemReperir = [...new Set([...num1, ...num2])]
console.log(concatenaSemReperir);
 

//FILTER: cria um novo array com as condicionantes descritas
let filtroNumbers = num1.filter(i => i % 2 === 0)
console.log(filtroNumbers);

let menorque6 = num1.filter ((i)=>{
    i>=6
})
console.log(menorque6);

//OUTRO EXEMPLO FILTER
//const salarymax = cadastros.filter(user => user.salary > 2500);
//console.log(salarymax.map(user => `${user.name}: ${user.salary}`).join(", "))


//FIND: retorna o primeiro elemento com a condicionante descrita
let menorque5 = num1.find ((i)=> i < 5)
console.log(menorque5);


//SORT: deixa o array em ordem crescente
const num3 = [50, 2, 3, 5, 6, 8]

console.log(num3.sort((a, b) => a - b));


//SORT: deixa o array em ordem decrescente
console.log(num3.sort((a, b) => b - a));


//SORT: com strings
let arrayFrutas = ['banana', 'laranja', 'morango', 'pera', 'ata']
arrayFrutas.sort()
console.log(arrayFrutas);


//FINDINDEX: retorna o indice do elemento que atende uma condição específica
const checknumber = arrayFrutas.findIndex((i) => i === 'morango')
console.log(checknumber);


//FOREACH: executa uma função com todos os valores do array(somente itera, diferente do map que cria um novo array)
arrayFrutas.forEach((i) => console.log(i)) //apenas imprime

num3.forEach((i)=> {
    if(i < 5){
        console.log(i);
        
    }
})


// INCLUDES: retorna true ou false de uma condição específica
console.log(num3.includes(50))


//INDEXOF: retorna o indice do elemento da pesquisa
console.log(arrayFrutas.indexOf("laranja"));


//MAP: invoca uma função e retorna um novo array
num4 = [3, 2, 7]
let doubleNumber = num4.map(num => num * 2)
console.log(doubleNumber);
//const names = cadastros
//  .filter(cadastro => cadastro.age < 31 && cadastro.salary >= 2500)
// .map(cadastro => /*cadastro.name*/ ` O seu nome é ${cadastro.name} (${cadastro.age})`)
//  .join(", ")

//console.log(names) 

//REDUCE: reduz os dados a unico dado
const data = [
    { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
    { name: "João", age: 18, sallary: 1500, driverLicense: false },
    { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
    { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
    { name: "Érica", age: 16, sallary: 0, driverLicense: false },
  ];

const sallariesSum = data.reduce(
    (totalSallary, user) => (totalSallary += user.sallary),
    0
  );
console.log(sallariesSum);


//EVERY: verifica se todos os elementos do array atendem a uma condição específica
const pares = num3.every((num) => num % 2 === 0)
console.log(pares);


//SOME: verifica se algum item atende a uma condição específica
const impares = num3.some((num) => num % 2 === 1)
console.log(impares);


//REVERSE: 
const reverseData = num3.reverse();
console.log(reverseData);
