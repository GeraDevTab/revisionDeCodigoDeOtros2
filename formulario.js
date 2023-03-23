/*resumen de actividades
se realizo modificacion en el archivo html y el archivo .js. cada moficiacion esta señalada en forma
de comentarios. sobre las lineas de codigo a las que se le aplico.

De manera general, el programa recibe 3 datos, y valida cada uno de ellos en longitud, en numero si entra dentro de un rango el numero, y convierte una seleccion en otro texto de nacionalidad.
despues de las validaciones agrega a una lista las entradas que si son aceptadas.
Despues cada uno de los elementos listados, pueden ser borrados, por medio de una funcion que ejecuta.

*/


//se cambio la forma del argumento del query selector de "#form" a ".formulario" para poder seleccionar la clase formulario que esta indicada en el form
var formulario = document.querySelector(".formulario")

formulario.onsubmit = function(e) {

  //se modifico el nbombre dela funcion asociada al eevento e. el cual tenia e.prevent() y se cambio por e.preventDefault()
  e.preventDefault();
  
  var n = formulario.elements[0]
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  
  //estos console.log los usos para verificar que recibo informacion y la imprimo.
  console.log("nombre es: ",nombre)
  console.log("la edad es: ",edad)
  console.log("la nacionalidad es: ",nacionalidad)

    //if que verifica si la longitud del nombre es de 0, es decir que no tiene escrito letras
  if (nombre.length === 0) {
    n.classList.add("error")
  }//cierra if

  //if que verifica la edad que se ingreso en el formulario, si la edad es menor a 18 o mayor a 120 lanzaun error
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

  //if que agrega un invitado si, todas las restricciones se cumplen
  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad)
  }
}

//************************************************************* */
//se crea un boton para borrar
//var botonBorrar = document.createElement("button")

//botonBorrar.textContent = "Eliminar invitado2"
//botonBorrar.id = "boton-borrar"

//se crea un elemento html de etiqueta <br>
var corteLinea = document.createElement("br")

document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

//************************************************************* */
function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

    //se crea un identificador de un div para posicionar
  var lista = document.getElementById("lista-de-invitados")

  var elementoLista = document.createElement("div")
  //se cambio el nombre de la funcion added por add al classList
  elementoLista.classList.add("elemento-lista")
  
  lista.appendChild(elementoLista)

  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre 
  //elementoLista.appendChild(spanNombre)
  //elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span")
    var inputNombre = document.createElement("input")
    var espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor 
    
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
  // this.parentNode.style.display = 'none';
  botonBorrar.parentNode.remove()
  }
}