let fruts = ['laranja', 'maça', 'banana', 'melancia']

//'push() - add no final no vetor
fruts.push('morago')

console.log(fruts)

//unshift() - add no começo do vetor
fruts.unshift('maracuja')
console.log(fruts)

//splice() - add no meio
//1-lugar do add
//2-quantos se quer apagar (inserçao se põe 0)
//3-o novo
fruts.splice(3, 0, 'mango')
console.log(fruts)

//pop() - tirar o ultimo
let last = fruts.pop()
console.log(last, fruts)

//shift() - tira o primeiro
let primeiro = fruts.shift()
console.log(primeiro, fruts)

//splice() - tirar no aleatorio
//posiçao do elemento
//quantidad a ser removida (pelo menos 1)
//splice() sempre retorna um vetor mesmo que vazio
let intermed = fruts.splice(3, 1)
console.log(interlog, fruts)

// push(), unshift() e splice() podem retirar varios elementos de uma ve só
fruts.push('jabuticaba', 'ananas', 'amora', 'abacatee')
console.log(fruts)

//Percurso(1) - for trdicional
for(let i = 0; i < fruts.length; i++) {
    console.log(fruts[i])
}