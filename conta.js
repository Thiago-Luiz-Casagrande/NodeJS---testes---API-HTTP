export function calcular(quantCombustivel, tipoCombustivel){
    if(tipoCombustivel == '1'){
        return Number(quantCombustivel*11)
    }if(tipoCombustivel == '2'){
        return Number(quantCombustivel*16)
    }else{
        console.log('Combustivel não existente')
    }
}
