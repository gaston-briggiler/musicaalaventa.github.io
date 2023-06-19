
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