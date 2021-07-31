function random(min, max){
return Math.floor(Math.random() * (max-min)) + min;
}

function generar(){

let o = {};
for(let i=0; i < 1000;i++){
    let n = random(1,20);
    if (n in o)
     o[n]++;
     else
     o[n] = 1;
}
return o;
}

let productos =[
{id:1,nombre:'A',precio:123},
{id:2,nombre:'B',precio:12},
{id:3,nombre:'C',precio:12}
]

let total = productos.map(e => e.precio).reduce((a,b)=> a+b,0);
let promedio = total / productos.length-1;
let ord = productos.sort ((a,b) => a.precio > b.precio ? -1:1);
let max = ord[0];
let min = ord[productos.length-1];

let resultado =
{
    total,
    promedio,
    max,
    min
}
//console.log(resultado)
