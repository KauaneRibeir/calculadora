const prompt = require("prompt-sync")({ sigint: true });

// Perguntar dados para operação
let num1 = +prompt("Digite um numero: ")
let num2 = +prompt("Digite outro numero: ")
console.log(`
-*-CALCULADORA-*-
1 - ADIÇÃO
2 - SUBTRAÇÃO
3 - MULTIPLICAÇÃO
4 - DIVISÃO
5 - PORCENTAGEM` )

let operação = prompt ("Digite a operação desejada: ")
let result

// excutar a operação
if (!isNaN(num1) && !isNaN(num2)) {
    switch (operação) {
        case '1':
        result = num1 + num2
        console.log(` ${num1} + ${num2} = `)
        break;
        case '2':
        result = num1 - num2
        console.log(` ${num1} - ${num2} = `)
        break;
        case '3':
        result = num1 * num2
        console.log(` ${num1} X ${num2} = `)
        break;
        case '4':
        if (num1 ===0 || num2 ===0) {
        console.log(" Erro, divisão por 0! ")        
        }else{
        result = num1/num2
        console.log(` ${num1} / ${num2} = `)
        }
        break;
        case '5':
        result = num1 * num2/100
        console.log( `${num1} % ${num2} = `)
        break;
        default:
console.log(" OPERAÇÃO INVALIDA. ")
        break;
}
console.log(result)

}else{
    console.log(" NÚMERO INVALIDO,TENTE NOVAMENTE. ")
}
