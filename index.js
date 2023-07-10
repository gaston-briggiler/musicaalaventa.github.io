
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




// TUTOR, AL SIGUIENTE FRAGMENTE QUE ESTA AQUI ABAJO COMENTADO, NO LE DE IMPORTANCIA, ESTOY TRATANDO DE LOGRAR ALGO ...
//  ...QUE AUN NO LO LOGRE, PERO ESTOY TRATANDO DE HACERLO SIN NINGUN TIPO DE AYUDA, POR ESO VA DE A POCO Y CON ALGUNOS ERRORES.

//MUCHAS GRACIAS

//Mostrar las guitarras en Stock

// let guitStock = prompt('en este momento tenemos en stock guitarras Fender, Ibanez, Gibson y Epiphone. coloque 0 para info de fender, 1 para info de ibanez, 2 para info de gibson y 3 para info de eiphone ');

// function guitarrasInfo(numero) {
//   if (numero === 0 ) {
//     alert(' guitarras[0]');
//   } 
  
//   if (numero === 1 ) {
//     alert(' guitarras[1]');
//   } 

//   if (numero === 2 ) {
//     alert(' guitarras[2]');
//   }  

//   if (numero === 3 ) {
//     alert(' guitarras[3]');
//   } 
//   else {
//     alert(' por favor coloque 0, 1, 2 o 3');
//   }
// }

// console.log(guitarrasInfo(pareseInt(guitStock)));

//Colocar 0 para informacion de guitarra Fender, 1 para informacion de guitarra ibanez, 2 para 
//informacion de guitarra Gibson, y 3 para informacion de guitarra epiphone 