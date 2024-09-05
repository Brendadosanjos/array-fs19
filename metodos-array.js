let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//numeros.push(50, 20, 10)

let novosNumeros = [100, 200, 400]
numeros.push(novosNumeros)
numeros.pop()
numeros.unshift(0)
//console.log(numeros)

console.log(`o tamanho do array é ${numeros.length}`)
//numeros.findIndex()

let meio = numeros.length / 2
let meioArredondado = Math.floor(meio)

numeros.splice(meioArredondado, 0, 'Novo Elemento')
console.log(numeros);