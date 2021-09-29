const faker = require('faker');

faker.locale = "es"

exports.get = ()=> ({
    nombre:faker.name.firstName(),
    apellido:faker.name.lastName(),
    avatar:faker.internet.avatar()
})

