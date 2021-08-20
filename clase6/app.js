
const fs = require('fs');
const { exit } = require('process');
const j = require('./package.json');

class Archivo {
    constructor(name){
        this.name = name
    }
    agregar(producto){
        if (fs.existsSync(this.name))
        {
            const info = require(this.name);

            info.push({...producto,id:info.length})
            fs.writeFileSync(this.name,JSON.stringify(info,null,'\t'));
        }else{
            
            fs.writeFileSync(this.name,JSON.stringify([{...producto,id:0}]));
        }


    }
    async add(producto){
       
       
           
            try {
            const info = await fs.promises.readFile(this.name);
            const producto =  JSON.parse(info.toString('utf-8'));
            producto.push({...producto[0],id:producto.length});
            try {
                await fs.promises.writeFile(this.name,JSON.stringify(producto,null,'\t'));
            }catch (err){
                throw new Error(err);
            }

            }catch (error){
               console.log([]);
               try {
               await fs.promises.writeFile(this.name,JSON.stringify([{...producto,id:0}]));
               }catch (err){
                throw new Error(err);
               }
               
            }
           
           
           
           

           

      
           
         
      
   
    }

}

let a = new Archivo("./info.json")
//a.agregar({name:"yerba"})
a.add({name:'ceki'});
console.log('fin...')