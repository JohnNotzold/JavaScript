let num = [5, 8, 2, 9, 3]

num.sort()

console.log(num)

//console.log(num.sort())

for(let pos = 0; pos < num.length; pos++){
    
    console.log(`O ${pos + 1}º termo do vetor é ${num[pos]} e está na posição ${pos}`)
}

//ou pode-se usar
/*
for(let pos in num) "para cada posição na variável composta"
{
    console.log(num[pos])
}


*/

//Buscando VALORES e não posições... dentro do vetor. SAe não houver o elemento, ele retornará -1 de valor
console.log(num.indexOf(7))
console.log(num.indexOf(8))
