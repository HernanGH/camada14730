
// const { MongoClient} = require('mongodb');
// const uri = "mongodb+srv://pablo:choper@cluster0.xytpo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// function Init(){

//     client.connect( async err => {
//         //const collection = client.db("test").collection("devices");
//         // perform actions on the collection object
//       const collection = await  client.db('coderhouse').collection("estudiantes");
//     //  await collection.insertOne({nombre:'juana'})
//       let result = await collection.find({}).toArray();
//       console.log(result)
      
//      client.close();
//       });
// }
// Init();


const { database } = require("firebase-admin");
var admin = require("firebase-admin");

var serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function crud(){

    const db = admin.firestore();
    const query = db.collection('colores');
    
    
    try {
    // let doc = query.doc('2');
    // await doc.create({nombre:'rojo'});
    // doc = query.doc('3');
    // await doc.create({nombre:'azul'});
    const _query = await query.get();
    let docs = _query.docs;
    const res = docs.map(doc => ({id:doc.id,nombre:doc.data().nombre}))
    console.log(res)
    const  azul = query.doc('3');
    const amarillo = await azul.update({nombre:'amarillo'});
    console.log(amarillo);
    const rojo = query.doc('2');
    await rojo.delete();



    
    }catch(err)
    {
    console.log(err);
    }

}


crud()