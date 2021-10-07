console.log('corriendo 🏃‍♂️');


const formulario = document.querySelector("#formulario");
const boton = document.querySelector("#buscar");
const resultado = document.getElementById("resultado");

const productos = [
    {nombre:'naranja',precio: 50},
    {nombre:'manzana',precio: 30},
    {nombre:'banana',precio: 40},
    {nombre:'pera',precio: 35},
    {nombre:'frutilla',precio: 140}
]
//Función de busqueda de productos
const filtrar = () => {
    resultado.innerHTML = '';
    const busqueda = formulario.value.toLowerCase();

    for (let producto of productos) {
        const nombre = producto.nombre.toLowerCase();
        if (nombre.indexOf(busqueda) !== -1) {
            resultado.innerHTML += `
                <li> ${producto.nombre} - Precio: $${producto.precio}</li>
            `;
        }
    }
    if (resultado.innerHTML === '') {
        resultado.innerHTML = `<li>Producto no encontrado...🤷🏽‍♂️</li>`;
    }
    if (busqueda === '') {
        resultado.innerHTML = '';
    }
}

/* Al dar click se ejecuta la función filtrar */
boton.addEventListener("click",filtrar);

/* La función filtrar se ejecuta en tiempo real */
formulario.addEventListener("keyup",filtrar);

/* Si quiere utilizar el boton de busqueda solamente comente la linea
40 o si quiere utilizar solamente la busqueda en tiempo real 
comente la linea 37 */ 