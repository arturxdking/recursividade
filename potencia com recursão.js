/*
    Exercícios

    - Escrever uma função recursiva Potência,
    que recebe uma base real e um expoente
    inteiro e retorna o valor da base elevada
    ao expoente. Escrever também um 
    programa para testar esta função
*/

function potencia(base, expoente){
    if(expoente==0)
        return 1
    else
        return base * potencia(base, expoente-1)
}
var result = potencia(5, 4)
console.log(result)

/*
    Explicação

    potencia(5, 4)
        5*potencia(5, 3)
            5*potencia(5, 2)
                5*potencia(5, 1)
                    5*potencia(5, 0)
*/