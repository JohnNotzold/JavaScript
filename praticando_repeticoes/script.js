function contador(){
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let pulo = document.getElementById('txtpulo')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pulo.value.length ==0){
        window.alert('[ERRO] Faltam dados')
        res.innerHTML = "Impossível contar!"   
    } else {
        res.innerHTML = "Contando: "
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pulo.value)
        if (p <=0 ){
            window.alert('Pulo inválido! Considerando Pulo igual a 1')
            p = 1
        }
        if(i<f){
            //contagem crescente
        for (let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{27A1}`
        }
            //contagem regressiva
        }else {
            for (let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{27A1}`
            }
        }  
        res.innerHTML += `\u{1F3C1}` 
    }

       
        
    

}