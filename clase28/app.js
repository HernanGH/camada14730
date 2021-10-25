

let max = (arr) => Math.max.apply(null,arr)
let min = (arr) => Math.min.apply(null,arr)


let numeros = process.argv.slice(2)

let success = numeros.filter (e => isNaN(e))

process.on('uncaughtException',()=>{
    console.log('excep....')
})

process.on('exit',(arg)=>{
console.log("El error :"+arg)
})

setTimeout(()=>{

console.log('STout....')    
},2000)

ddd();
// if(success.length)
//  {
//         console.log({
//             error: {
//                 descripcion:'... ',
//                 numeros,
//                 tipos:process.argv


//             } 
//         })
//         process.exit(-5)

//  }

// numeros = numeros.map(e => parseInt(e,10));


// let o = {
//     datos: {
//         numeros,
//         promedio:numeros.reduce((a,b) => a+b,0)/numeros.length,
//         max:max(numeros),
//         min:min(numeros),
//         ejecutable:process.argv[1],
//         pid:process.pid
//     }
// }
// console.log(numeros)
// console.log(process.argv)
// console.log(o)