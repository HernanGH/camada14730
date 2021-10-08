const veterinaria= {
        id:1,
        nombre:'Animalitos',
        mascotas: [

            {   
                    id:0,
                    nombre:'guau',
                    raza:'canina',
                    dueño:{
                        id:1,
                        nombre:'Juan',
                        direccion:'San Javier'
                    }
            },
            {   
                id:1,
                nombre:'miau',
                raza:'felina',
                dueño:{
                    id:1,
                    nombre:'Juan',
                    direccion:'San Javier'
                }

        },
        {
            id:2,
            nombre:'pio',
            raza:'ave',
            dueño:{
                id:2,
                nombre:'raquel',
                direccion:'bs as'
            }

        }

       ] 



}

module.exports = veterinaria