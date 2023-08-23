/*
    Escrever uma função recursiva que implemente a Busca Binária, 
    em um vetor ordenado. Escrever também um programa para testar esta função.
*/
function busca(A, inicio, fim, x){
    var meio
    if(inicio > fim){
        return -1
    }
    else{
        meio = Math.floor((inicio + fim) / 2)
        if(A[meio] == x)
            return meio
        else if(x < A[meio])
            return busca(A, inicio, meio-1, x)
        else
            return busca(A, meio+1, fim, x)
    }
}

var nums = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]
result = busca(nums, 0, nums.length, 77)
console.log("nums = " + nums)
console.log(result)