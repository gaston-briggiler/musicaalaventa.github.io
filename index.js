
// utilizo esta funcion para verificar si es menor de edad

let edad = prompt('Para realizar compras en esta página, debe ser mayor de 18 años. Por favor, ingrese su edad');

function verificarEdad(numero) {
  if (numero < 18) {
    alert(' es menor de edad, no puede realizar compras');
  } else {
    alert(' bienvenido.');
  }
}

verificarEdad(parseInt(edad));
  
  



//  Hago un array de modelos de guitarras disponibles en el stock

const guitarrasDisponibles = ['fender', 'gibson', 'ibanez', 'epiphone', 'cort'];

const guitarraBuscada = 'yamaha';

let stockEncontrado = false;

for (let i = 0; i < guitarrasDisponibles.length; i++) {

  if (guitarrasDisponibles[i] === guitarraBuscada) {

    stockEncontrado = true;
    break; 
  }
}


if (stockEncontrado) {
  console.log('¡Hay en stock guitarras ' + guitarraBuscada + '!');
} else {
  console.log('En este momento no tenemos en stock guitarras ' + guitarraBuscada + '.');
}




// FUNCION PARA CALCULAR IVA   

const suma = (a, b) => a + b
const resta = (a, b) => a - b

const calcularIva = valorProducto => valorProducto * 0.21

const calcularValorProducto = (valor)=> {
  return valor + calcularIva(valor)
}
console.log(calcularValorProducto(3500))






var guitarras = [
  {
    nombre: "Fender",
    modelo: "Stratocaster",
    precio: 4000,
    color: "rojo",
    año: 1998
  },
  {
    nombre: "Ibanez",
    modelo: "RG",
    precio: 1400,
    color: "negra",
    año: 2010
  },
  {
    nombre: "Gibson",
    modelo: "Les Paul",
    precio: 4200,
    color: "blanca",
    año: 1988
  },
  {
    nombre: "Epiphone",
    modelo: "DOT 335",
    precio: 2000,
    color: "negra",
    año: 2003
  }
];


 console.log(guitarras[1])

//CON LA SIGUIENTE FUNCION PIDO QUE ME RECORRA EL ARRAY GUITARRAS Y ME DEVUELVA EN ORDEN DE MENOR PRECIO A MAYOR.

 console.log(guitarras.sort((a, b) => a.precio - b.precio));

//EN ESTA FUNCION PIDO QUE RECORRA EL ARRAY ME DEVUELVA SOLO LAS MARCAS DE LAS GUITARRAS QUE HAY EN STOCK (NOMBRE)

 console.log(guitarras.map(guitarra => guitarra.nombre));




 for (let i = 0; i < guitarras.length; i++) {
  console.log("Guitarra:", guitarras[i].nombre);
  console.log("Modelo:", guitarras[i].modelo);
  console.log("Precio:", guitarras[i].precio);
  console.log("Color:", guitarras[i].color);
  console.log("Año:", guitarras[i].año);
  console.log("------------------------");
}


let div = document.getElementById("art1") 
console.log(art1.innerText)

art1.innerText = "Guitarra Fender"



console.log(art1.innerText)

let boton = document.getElementById("btnMain")
boton.onclick = () => {console.log("click")}
boton.onmousemove = () => {console.log("move")}




// Guardar los datos en el Storage en formato JSON.
function guardarGuitarrasEnStorage(clave, guitarras) {
  const guitarrasJSON = JSON.stringify(guitarras);
  localStorage.setItem(clave, guitarrasJSON);
}

// Obtener los datos almacenados en el Storage y convertirlos a un array.

function obtenerGuitarrasDesdeStorage(clave) {
  const guitarrasJSON = localStorage.getItem(clave);
  if (guitarrasJSON) {
    return JSON.parse(guitarrasJSON);
  } else {
    return null; // Si no hay datos almacenados, devolvemos null o un valor predeterminado.
  }
}


//Función para guardar los datos en el Storage con una clave.
guardarGuitarrasEnStorage('miArrayDeObjetos', guitarras);

// Función para obtener los datos almacenados en el Storage con la misma clave
const datosRecuperados = obtenerGuitarrasDesdeStorage('miArrayDeObjetos');

// Mostrar los datos recuperados por consola
console.log(datosRecuperados);


