/*
* Crea un programa que sea capaz de solicitarte un número y se
* encargue de imprimir su tabla de multiplicar entre el 1 y el 10.
* - Debe visualizarse qué operación se realiza y su resultado.
*   Ej: 1 x 1 = 1
*       1 x 2 = 2
*       1 x 3 = 3
*/

let numero = parseInt(prompt("Ingrese el valor de la tabla de multiplicar"));

if (numero >= 0) {
  // Crea un elemento para mostrar el título de la tabla
  const titulo = document.createElement("h2");
  titulo.textContent = "TABLA DEL " + numero;
  
  // Crea un elemento para mostrar la tabla
  const tabla = document.createElement("table");
  tabla.classList.add("tabla")
  
  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    const multiplicacion = i;

    // Crea una fila de la tabla
    const fila = document.createElement("tr");

    // Crea celdas para la multiplicación y el resultado
    const celdaMultiplicacion = document.createElement("td");
    const celdaResultado = document.createElement("td");
    const simboloIgual = document.createElement("td");
    
    // Clases
    celdaResultado.classList.add("resultado")

    celdaMultiplicacion.textContent = numero + " * " + multiplicacion;
    simboloIgual.textContent = " = ";
    celdaResultado.textContent = resultado;

    // Agrega las celdas a la fila
    fila.appendChild(celdaMultiplicacion);
    fila.appendChild(simboloIgual);
    fila.appendChild(celdaResultado);

    // Agrega la fila a la tabla
    tabla.appendChild(fila);
  }

  // Agrega el título y la tabla al elemento con el id "tabla-multiplicar"
  const tablaMultiplicar = document.getElementById("tabla-multiplicar");
  tablaMultiplicar.appendChild(titulo);
  tablaMultiplicar.appendChild(tabla);
} 
else { // Condición sino

  // Crear un texto para el usuario 
  const invalid = document.createElement("p")
  invalid.classList.add("invalid-text")
  invalid.textContent = "No ingresó un valor válido,porfavor refresque la página"

  // Crear botón para refrescar
  const refrescar = document.createElement("button")
  refrescar.classList.add("refresh")

  // Contenido del botón
  refrescar.textContent = "Refrescar página"
  refrescar.onclick = function() {
    location.reload()
  }
  
  // Mostrarlo en la página
  document.body.appendChild(invalid)
  document.body.appendChild(refrescar)
}
