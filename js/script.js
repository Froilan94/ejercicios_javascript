
function mostrarMensaje() {
  console.log("¡Bienvenido!");
 alert("¡Bienvenido al aprendizaje de JavaScript!");
}


function sumarNumeros() {
      // Obtenemos los valores de los cuadros
      let numero1 = parseFloat(document.getElementById("num1").value);
      let numero2 = parseFloat(document.getElementById("num2").value);

      // Verificamos si los valores son válidos
      if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("resultado").textContent = "Por favor, ingresa números válidos.";
        return;
      }

      // Realizamos la suma
      let suma = numero1 + numero2;

      // Mostramos el resultado
  console.log("La suma es "+suma);
 alert("La suma es "+suma);
}

function SaludoconNombre() {
    // Pedir el nombre al usuario
    let nombre = prompt("Por favor, ingresa tu nombre:");
     console.log("¡Bienvenido! "+nombre);
    // Mostrar un saludo personalizado
    alert("¡Hola, " + nombre + "! Bienvenido al aprendizaje de JavaScript 😊");
}

function Valorvabiable() {
    // Declaramos dos variables con valores numéricos
    let numero1 = 8;
    // Declaramos una variable y le asignamos un valor
    let mensaje = "Hola, este es el valor de mi variable."+ numero1;
    // Mostramos el valor en la consola del navegador
    console.log(mensaje);
    alert("¡Hola, este es el valor de mi variable " + numero1 + "!Chau! ");
}

function FechaActual() {
    // Crear un objeto Date con la fecha y hora actuales
    let fechaActual = new Date();

    // Mostrar la fecha en un alert
    alert("La fecha y hora actual es: " + fechaActual);
}

function UnHello() {
    // Mostrar el mensaje directamente en la página
    document.write("¡Hola, Mundo!");
}
