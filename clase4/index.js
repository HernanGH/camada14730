//PULL
function pull(){
  
    return 1;

}

//PUSH
let push = ()=> new Promise((res,rej)=>{

    setTimeout(() => {
        res(1)
    }, 2500);

})

function numeroRandom(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}


function* nombra(){
    yield
}

function* Random(min,max){
    let count = 0;
    while (true){
     yield {
        order:count++,
        numero:numeroRandom(min,max),
        fecha:new Date().toString()
        }
    }
}

let gen = Random(100,200);


//Promise.resolve()
//Promise.reject()
// let promesa = new Promise ((res,rej) => {
//         res(20)

// })

// let promesa = Promise.resolve(20);

// promesa.then (e => {
//     if (e == 30)
//         throw 'Error'
//     else
//         return e
// }).then (e => e / 2).then(e => {

//     if (e == 10)
//      console.log('Ok listo!')

// }).catch(err => console.log('Reject:',err))

// function* Test (){

//      yield 10;
//      yield 20;
//      yield 30;
// }

// let iterador = Test();

// console.log(iterador.next().value)
// console.log(iterador.next().value)
// console.log(iterador.next().value)


const webService = new Promise((res,rej)=>{

    setTimeout(()=>{

        res({msg:'hola soy un ws',code:1})

    },1500)

})
// const {Observable} = rxjs;
// const {filter,map} = rxjs.operators;

// const observable =  new Observable(observer => {
    
//     observer.next(1)
//     observer.next(2)
//     observer.next(3)
//     observer.next(4)
//     observer.next(5)
//     observer.complete();

// }).pipe(map(e => e + 1))

// observable.subscribe( 
    
//     {
//     error:(err=> console.log(err)),
//     next:(e)=>{ console.log(e)},
//     complete:(e) => console.log('Completado...')
//     }
// )




document.addEventListener("DOMContentLoaded",()=>{
let inp = document.querySelector("#inp");
let texto = document.querySelector("#texto");
const {Observable,fromEvent,throwError,of} = rxjs;
const {filter,map,mergeMap,retry} = rxjs.operators;

// const observable = fromEvent(inp,'keyup').pipe(map(e => e.target.value.split('').reverse().join('')));

//     observable.subscribe((e)=>{

//         texto.innerText = e;

//     })

const obs = fromEvent(inp,'keyup').pipe(mergeMap(e => {
  if (e.key == 'a')
    return throwError('Reentrar');
  return of(e.key)
  
  }),retry(2));
  
  obs.subscribe({
    error(err) {console.log('Tenemos un error')},
    next(x) { console.log(x)}
  
  });


  function* range (limit) {
    let c = 0
    while ( c < limit ) {
      yield c
      c++
    }
  }
  
  function* oddsGenerator() {
    let n = 0
    while (true) {
      yield 2*n + 1
      n++
    }
  }
  
  function take(n, iter) {
    let counter = n
    for ( c of iter) {
      counter--
      if(counter <= 0) break }

  }
  
  var oddNumbers = oddsGenerator()
  take(5, oddNumbers) 

  function* Ver(){
    yield 1 //[1]
    yield 5 //[1,5]
    yield 10 //[1,5,10]
  }

console.log([
[...Ver()]

])

 






})






































































