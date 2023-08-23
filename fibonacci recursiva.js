/*
    Exercícios

    - Escreever uma função recursiva Fib(N) que 
    receba o inteiro N e devolva o N-ésimo termo
    da sequência de Fibonacci, definida recursivamente por:

    Fib(1)=1
    Fib(2)=1
    Fib(N)=Fib(N-1)+Fib(N-2), para N=3,4, ...

    1 1 2 3 5 8 13 21 ...
*/

function fib(N){
    if((N==1) || (N==2))
        return 1
    else
        return(fib(N-1)+fib(N-2))
}

var result=fib(8)
console.log(result)