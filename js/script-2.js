// Ejercicio 1: Declara tres variables para almacenar nombre, edad y ciudad
function ejercicio1() {
    // Declaración de variables
    let nombre = "Juan";
    let edad = 25;
    let ciudad = "Guatemala City";
    
    // Mostrar en consola
    console.log("=== EJERCICIO 1 ===");
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("Ciudad:", ciudad);
    
    // Mostrar en pantalla
    const resultado = document.getElementById('resultado1');
    resultado.style.display = 'block';
    resultado.innerHTML = `
        <strong>Resultado:</strong><br>
        Nombre: ${nombre}<br>
        Edad: ${edad}<br>
        Ciudad: ${ciudad}
    `;
}

// Ejercicio 2: Almacena el valor de pi y muéstralo
function ejercicio2() {
    // Variable con valor de pi
    let pi = 3.1416;
    
    // Mostrar en consola
    console.log("=== EJERCICIO 2 ===");
    console.log("El valor de pi es:", pi);
    
    // Mostrar en pantalla
    const resultado = document.getElementById('resultado2');
    resultado.style.display = 'block';
    resultado.innerHTML = `
        <strong>Resultado:</strong><br>
        El valor de pi es: ${pi}
    `;
}

// Ejercicio 3: Variable número y string juntos
function ejercicio3() {
    // Declaración de variables
    let numero = 42;
    let texto = "La respuesta es";
    
    // Mostrar en consola
    console.log("=== EJERCICIO 3 ===");
    console.log(texto, numero);
    
    // Mostrar en pantalla
    const resultado = document.getElementById('resultado3');
    resultado.style.display = 'block';
    resultado.innerHTML = `
        <strong>Resultado:</strong><br>
        ${texto} ${numero}
    `;
}

// Ejercicio 4: Multiplicar dos números
function ejercicio4() {
    // Obtener valores de los inputs
    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);
    
    // Almacenar resultado de la multiplicación
    let resultado = numero1 * numero2;
    
    // Mostrar en consola
    console.log("=== EJERCICIO 4 ===");
    console.log(`${numero1} × ${numero2} = ${resultado}`);
    
    // Mostrar en pantalla
    const resultadoDiv = document.getElementById('resultado4');
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <strong>Resultado:</strong><br>
        ${numero1} × ${numero2} = ${resultado}
    `;
}

// Ejercicio 5: Pedir edad del usuario
function ejercicio5() {
    // Obtener edad del input
    let edad = document.getElementById('edad').value;
    
    // Validar que se ingresó una edad
    if (edad === '' || edad <= 0) {
        alert('Por favor ingresa una edad válida');
        return;
    }
    
    // Mostrar en consola
    console.log("=== EJERCICIO 5 ===");
    console.log(`Tienes ${edad} años`);
    
    // Mostrar en pantalla
    const resultado = document.getElementById('resultado5');
    resultado.style.display = 'block';
    resultado.innerHTML = `
        <strong>Resultado:</strong><br>
        Tienes ${edad} años
    `;
}

// Ejercicio 6: Nombre y apellido
function ejercicio6() {
    // Obtener valores de los inputs
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    
    // Validar que se ingresaron datos
    if (nombre === '' || apellido === '') {
        alert('Por favor ingresa tu nombre y apellido');
        return;
    }
    
    // Mostrar en consola
    console.log("=== EJERCICIO 6 ===");
    console.log("Nombre completo:", nombre, apellido);
    
    // Mostrar en pantalla
    const resultado = document.getElementById('resultado6');
    resultado.style.display = 'block';
    resultado.innerHTML = `
        <strong>Resultado:</strong><br>
        Nombre completo: ${nombre} ${apellido}
    `;
}

// Mensaje inicial en consola
console.log("Ejercicios de Variables JavaScript cargados correctamente");
console.log("Haz clic en los botones para ejecutar cada ejercicio");
