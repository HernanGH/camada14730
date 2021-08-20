let ul = document.querySelector('ul');
let template = Handlebars.compile(ul.innerHTML);
let datos = {
    nombre:'Pablo',
    apellido:'cki',
    telefono:'3865596760',
    edad:35
}
//ul.innerHTML = template(datos);
for (let i in datos){
    console.log(ul.innerHTML.replace(`{{${i}}}`, datos[i]))
} 

