/*
    Escrever uma função recursiva para o problema das Torres de Hanoi, que consiste de 3 regras básicas:
    I. somente I disco é movido por vez;
    II. nenhum disco pode ser colocado sobre um disco menor;
    III. qualquer disco pode ser movido de qualquer pino para qualquer outro desde que respeite a regra (II).
*/

function hanoi(n, origem, destino, aux){
    if(n == 1)
        console.log("Mova disco do pino "+ origem + " para o pino "+ destino)
    else{
        hanoi(n-1, origem, aux, destino)
        console.log("Mova disco do pino "+ origem + " para o pino " + destino)
        hanoi(n-1,aux,destino,origem)
    }
}

hanoi(4, 'A', 'B', 'C')