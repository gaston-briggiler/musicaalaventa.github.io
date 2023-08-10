
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
    nombre: "Epiphone",
    modelo: "Stratocaster",
    precio: 4000,
    color: "rojo",
    año: 1998
  },
  {
      nombre: "Fender",
      modelo: "RG",
      precio: 1400,
      color: "negra",
      año: 2010
  },
  {
    nombre: "Ibanez",
    modelo: "Les Paul",
    precio: 4200,
    color: "blanca",
    año: 1988
  },
  {
    nombre: "Gibson",
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


let div = document.getElementById("art1");
console.log(div.innerText);

div.innerText = "Guitarra Fender";







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





// Arreglo para almacenar los artículos agregados al carrito
let carrito = [];

// Función para agregar una guitarra al carrito
function agregarAlCarrito(guitarra) {
    carrito.push(guitarra);
    actualizarCarrito();
}

// Función para eliminar una guitarra del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Función para actualizar el carrito en el DOM
function actualizarCarrito() {
    const carritoItemsElement = document.getElementById('carrito-items');
    carritoItemsElement.innerHTML = '';

    if (carrito.length === 0) {
        document.getElementById('carrito-vacio').style.display = 'block';
    } else {
        document.getElementById('carrito-vacio').style.display = 'none';

        carrito.forEach((guitarra, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'carrito-item';

            const nombreP = document.createElement('p');
            nombreP.textContent = guitarra.nombre;
            itemDiv.appendChild(nombreP);

            const eliminarBtn = document.createElement('button');
            eliminarBtn.className = 'btn btn-danger';
            eliminarBtn.textContent = 'Eliminar';
            eliminarBtn.onclick = () => eliminarDelCarrito(index);
            itemDiv.appendChild(eliminarBtn);

            carritoItemsElement.appendChild(itemDiv);
        });
    }
}

// Evento click para agregar al carrito


document.querySelectorAll('.agregar-carrito-btn').forEach((btn, index) => {
    btn.onclick = () => agregarAlCarrito(guitarras[index]);
});


// Evento click para  ver mas productos 

document.getElementById('ver-mas').onclick = () => {
  carrito = [];
  actualizarCarrito();
  alert('Muestra mas productos')
};


// Evento click para vaciar el carrito
document.getElementById('vaciar-carrito').onclick = () => {
  if (carrito.length === 0) {
      alert('El carrito está vacío');
  } else {
      carrito = [];
      actualizarCarrito();
      alert('Se eliminarán los productos del carrito');
  }
};










// EJEMPLO DE FUNCION PARA CARRITO

newFunction() 
  


function newFunction() {
  let carrito = []

  if (carrito.length === 0) {

    console.log('el carrito esta vacio')
  }

  let usuario = {
    nombre: 'Gaston Briggiler',
    edad: 34
  }

  const registroIngreso = usuario.edad > 18 && new Date()

  console.log(registroIngreso)
}


