
const fin = ()=>console.log('Fin...')
	 
const time = (ms)=>{
  return new Promise ((res,rej)=>{
    setTimeout(()=>{
        res();       
        },ms)
  
  });

}

const leerLetras1 = async (str)=>{

  let arr = str.split('');
  for ( let i = 0; i < arr.length; i++){
            await time(1000);
            console.log(arr[i])
  }
  fin();

}


const leerLetras2 = (str,callback)=>{

  let i = 0;
  
  let it = setInterval(()=>{
    if (str.length == i) {
    callback();
    clearInterval(it)

  }else
  console.log(str[i]);  
    i++;
  },1000);

}


const leerLetras3 = (str,i,callback)=>{
   if (str.length == i){
   	fin();
   	 return;
   }
  setTimeout(()=>{
     callback(str[i]);
     leerLetras3(str,i+1,callback)
     },1000)
  
}



function leerLetras4(str,i) {
       
        if (i < str.length) new Promise((resolve, reject) => {
           console.log(str[i]);
          setTimeout(()=>{
                     
                    resolve(); 
                     },1000);
        }).then(leerLetras4.bind(null, str,i+1)).catch(fin);
        else
         reject()
      }
   
//leerLetras1('Hola');
//leerLetras2('coder',fin)
//leerLetras3('house', 0, (e)=>console.log(e))
//leerLetras4('school',0)

