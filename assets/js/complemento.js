// // Función para simular una solicitud a una API (esto no es una solicitud real)
// function hacerLlamadaAPI() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const datos = { mensaje: "Datos de la API obtenidos correctamente" };
//         // Simulamos que la solicitud se resuelve correctamente después de 2 segundos
//         resolve(datos);
//         // Si hubiera un error en la solicitud, podríamos usar reject(error) en lugar de resolve
//       }, 2000);
//     });
//   }
  
//   // Utilizando la función asincrónica y las promesas
//   function obtenerDatosDeAPI() {
//     console.log("Iniciando la solicitud...");
  
//     hacerLlamadaAPI()
//       .then((datos) => {
//         console.log("Datos obtenidos:", datos);
//         // Aca se puede continuar con el procesamiento de los datos
//       })
//       .catch((error) => {
//         console.error("Error al obtener los datos:", error);
//         // Aca se puede manejar el error de la solicitud si ocurriera algún problema
//       });
  
//     console.log("Finalizando la solicitud...");
//   }
  
//   obtenerDatosDeAPI();




// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((response) => response.json())
// .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


//   fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));