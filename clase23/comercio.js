const comercio = {
 id:0,
 nombre:'Red de comercios SRL',
 comercios:[
    {
        id: 0,
        nombre: "Comercio Santa Maria",
        gerente: {
          id: 0,
          nombre: "Raul",
          edad: 34,
        },
        cajeros: [
          {
            id: 1,
            nombre: "Pedro",
            edad: 23,
          },
      
          {
            id: 2,
            nombre: "Maria",
            edad: 56,
          },
        ],
        repositores: [
          {
            id: 0,
            nombre: "Juan",
            apellido: "Alderete",
            horario: {
              id: 0,
              entrada: "8:00",
              salida: "14:00",
            },
          },
          {
            id: 2,
            nombre: "Pablo",
            apellido: "Ceki",
            horario: {
              id: 3,
              entrada: "14:00",
              salida: "18:00",
            },
          },
        ],
      },
      {
        id: 1,
        nombre: "Comercio Santa Lucia",
        gerente: {
          id: 0,
          nombre: "Raul",
          edad: 34,
        },
        cajeros: [
          {
            id: 1,
            nombre: "Pedro",
            edad: 23,
          },
      
          {
            id: 2,
            nombre: "Maria",
            edad: 56,
          },
        ],
        repositores: [
          {
            id: 0,
            nombre: "Juan",
            apellido: "Alderete",
            horario: {
              id: 0,
              entrada: "8:00",
              salida: "14:00",
            },
          },
          {
            id: 2,
            nombre: "Pablo",
            apellido: "Ceki",
            horario: {
              id: 3,
              entrada: "14:00",
              salida: "18:00",
            },
          },
        ],
      }
]


}
module.exports = comercio;
