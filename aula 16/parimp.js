function parimp(n){
    if(n%2==0){
        return `O número ${n} é par! `
    }else {
        return `O número ${n} é ímpar!`
    }
}

let res = parimp(23)
console.log(res)
