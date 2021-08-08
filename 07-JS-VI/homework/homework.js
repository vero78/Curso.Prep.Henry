// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var iniciar = nombre[0]
  var mayuscula = iniciar.toUpperCase()
  return nombre.replace(iniciar,mayuscula)
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb()
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb ( n1, n2)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  /* SUMAR LOS NUMERO QUE VENGAN EN EL ARRAY ¡¡¡¡SOLO LOS ENTEROS!!!! */
  var resultadoFinal = 0;
  numeros.forEach(function(elem,indice){
    resultadoFinal += elem;
  });
  cb(resultadoFinal);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(elem,indice){ //array = [1,2,3,4,5]
    cb(elem);
  });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var ar = [];
  array.forEach(function(elem,indice){
    ar[indice] = cb(elem);  
  });
  return ar;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
 
  nuevaletra= [];
  for( i= 0; i < array.length; i ++){ /* array = ['alber','ojota','ami']*/ 
    if (array[i].charAt(0) === "a"){
      nuevaletra.push(array[i]);
    }
  }
  return nuevaletra;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
