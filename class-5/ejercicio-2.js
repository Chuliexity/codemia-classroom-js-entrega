const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

let numForEach = []
num.forEach(numero =>{
   numForEach.push(numero)
})

let numMap= num.map(numero =>{
    return numero*5
})

let numFilter = num.filter((numero,indice)=>{
    return !numero%2===0 && indice%4===0
})

let numMapCondition= num.map(numero =>{
    if (numero%2===0||numero%3===0){
        return numero
    }
    console.log(numero)
})

let concatenate = numForEach.concat(numMapCondition)
console.log(numForEach, numMap, numFilter, concatenate)