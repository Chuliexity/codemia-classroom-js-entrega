const nombres = ["Luis", "Pedro", "Karen", "Micaela", "Jorgito", "Pablito", "Pancracio"]
let nombresFor = []
let nombresForEach = []

//FOR
for (let i = 0; i<nombres.length;i++){
    console.log(nombres[i])
}
for (let i = 0; i<nombres.length;i++){
    nombresFor.push(`El nombre ${nombres[i]} se encuentra en el índice ${i}`)
}
//FOR EACH
nombres.forEach(nombre => {
    console.log(nombre)
});
nombres.forEach((nombre,i)=>{
    nombresForEach.push(`El nombre ${nombre[i]} se encuentra en el índice ${i}`)
})
//MAP
let nombresMap = nombres.map((nombre, i) => {
   return `El nombre ${nombre} se encuentra en el índice ${i}`
})
//FILTER
let nombresFilter = nombres.filter(nombre => {
    return nombre.length>5
})

console.log(nombresFor, nombresForEach, nombresMap, nombresFilter)




