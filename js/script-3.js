// ========================================
// EJERCICIO 1: Suma de dos números
// ========================================
function sumarNumeros(a, b) {
    return a + b;
}

function ejecutarEjercicio1() {
    // Obtener valores de los inputs
    let num1 = parseFloat(document.getElementById('suma1').value);
    let num2 = parseFloat(document.getElementById('suma2').value);
    
    // Llamar a la función y obtener resultado
    let resultado = sumarNumeros(num1, num2);
    
    // Mostrar en consola
    console.log("=== EJERCICIO 1: SUMA ===");
    console.log(`sumarNumeros(${num1}, ${num2}) = ${resultado}`);
    
    // Mostrar en pantalla
    const resultadoDiv = document.getElementById('resultado1');
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <strong>Resultado:</strong><br>
        ${num1} + ${num2} = ${resultado}
    `;
}

// ========================================
// EJERCICIO 2: Saludo personalizado
// ========================================
function saludar(nombre) {
    console.log(`¡Hola, ${nombre}! Bienvenido/a.`);
}

function ejecutarEjercicio2() {
    // Obtener nombre del input
    let nombre = document.getElementById('nombre').value;
    
    // Validar que se ingresó un nombre
    if (nombre === '') {
        alert('Por favor ingresa un nombre');
        return;
    }
    
    // Mostrar en consola
    console.log("=== EJERCICIO 2: SALUDO ===");
    saludar(nombre);
    
    // Mostrar en pantalla
    const resultado = document.getElementById('resultado2');
    resultado.style.display = 'block';
    resultado.innerHTML = `
        <strong>Resultado:</strong><br>
        ¡Hola, ${nombre}! Bienvenido/a.
    `;
}

// ========================================
// EJERCICIO 3: Área de un círculo
// ========================================
function calcularAreaCirculo(radio) {
    const pi = 3.1416;
    let area = pi * radio * radio;
    return area;
}

function ejecutarEjercicio3() {
    // Obtener radio del input
    let radio = parseFloat(document.getElementById('radio').value);
    
    // Validar que se ingresó un radio válido
    if (isNaN(radio) || radio <= 0) {
        alert('Por favor ingresa un radio válido');
        return;
    }
    
    // Llamar a la función y obtener resultado
    let area = calcularAreaCirculo(radio);
    
    // Mostrar en consola
    console.log("=== EJERCICIO 3: ÁREA DEL CÍRCULO ===");
    console.log(`Radio: ${radio}`);
    console.log(`Área: ${area.toFixed(2)}`);
    
    // Mostrar en pantalla
    const resultado = document.getElementById('resultado3');
    resultado.style.display = 'block';
    resultado.innerHTML = `
        <strong>Resultado:</strong><br>
        Radio: ${radio}<br>
        Área = π × r² = 3.1416 × ${radio}² = ${area.toFixed(2)}
    `;
}

// ========================================
// EJERCICIO 4: Retornar el número mayor
// ========================================
function obtenerMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
    // Alternativa más corta: return num1 > num2 ? num1 : num2;
}

function ejecutarEjercicio4() {
    // Obtener valores de los inputs
    let num1 = parseFloat(document.getElementById('mayor1').value);
    let num2 = parseFloat(document.getElementById('mayor2').value);
    
    // Llamar a la función y obtener resultado
    let mayor = obtenerMayor(num1, num2);
    
    // Mostrar en consola
    console.log("=== EJERCICIO 4: NÚMERO MAYOR ===");
    console.log(`Comparando: ${num1} y ${num2}`);
    console.log(`El mayor es: ${mayor}`);
    
    // Mostrar en pantalla
    const resultado = document.getElementById('resultado4');
    resultado.style.display = 'block';
    resultado.innerHTML = `
        <strong>Resultado:</strong><br>
        Comparando ${num1} y ${num2}<br>
        El número mayor es: <strong>${mayor}</strong>
    `;
}

// ========================================
// EJERCICIO 5: Par o Impar
// ========================================
function esPar(numero) {
    return numero % 2 === 0;
}

function ejecutarEjercicio5() {
    // Obtener número del input
    let numero = parseInt(document.getElementById('numero').value);
    
    // Validar que se ingresó un número válido
    if (isNaN(numero)) {
        alert('Por favor ingresa un número válido');
        return;
    }
    
    // Llamar a la función y obtener resultado
    let resultado = esPar(numero);
    
    // Mostrar en consola
    console.log("=== EJERCICIO 5: PAR O IMPAR ===");
    console.log(`Número: ${numero}`);
    console.log(`esPar(${numero}) = ${resultado}`);
    console.log(`El número es: ${resultado ? 'PAR' : 'IMPAR'}`);
    
    // Mostrar en pantalla
    const resultadoDiv = document.getElementById('resultado5');
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <strong>Resultado:</strong><br>
        Número: ${numero}<br>
        esPar(${numero}) = ${resultado}<br>
        El número es: <strong>${resultado ? 'PAR' : 'IMPAR'}</strong>
    `;
}

// ========================================
// EJERCICIO 6: Promedio de un array
// ========================================
function calcularPromedio(arrayNumeros) {
    // Verificar que el array no esté vacío
    if (arrayNumeros.length === 0) {
        return 0;
    }
    
    // Sumar todos los números del array
    let suma = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        suma += arrayNumeros[i];
    }
    
    // Calcular y retornar el promedio
    let promedio = suma / arrayNumeros.length;
    return promedio;
}

function ejecutarEjercicio6() {
    // Obtener números del input
    let inputNumeros = document.getElementById('numeros').value;
    
    // Validar que se ingresaron números
    if (inputNumeros === '') {
        alert('Por favor ingresa números separados por comas');
        return;
    }
    
    // Convertir el string a un array de números
    let arrayNumeros = inputNumeros.split(',').map(num => parseFloat(num.trim()));
    
    // Validar que todos los elementos sean números válidos
    if (arrayNumeros.some(num => isNaN(num))) {
        alert('Por favor ingresa solo números válidos separados por comas');
        return;
    }
    
    // Llamar a la función y obtener resultado
    let promedio = calcularPromedio(arrayNumeros);
    
    // Mostrar en consola
    console.log("=== EJERCICIO 6: PROMEDIO ===");
    console.log(`Array de números: [${arrayNumeros.join(', ')}]`);
    console.log(`Cantidad de números: ${arrayNumeros.length}`);
    console.log(`Suma total: ${arrayNumeros.reduce((a, b) => a + b, 0)}`);
    console.log(`Promedio: ${promedio.toFixed(2)}`);
    
    // Mostrar en pantalla
    const resultado = document.getElementById('resultado6');
    resultado.style.display = 'block';
    resultado.innerHTML = `
        <strong>Resultado:</strong><br>
        Números: [${arrayNumeros.join(', ')}]<br>
        Cantidad: ${arrayNumeros.length}<br>
        Suma: ${arrayNumeros.reduce((a, b) => a + b, 0)}<br>
        Promedio: <strong>${promedio.toFixed(2)}</strong>
    `;
}

// Mensaje inicial en consola
console.log("Ejercicios de Funciones JavaScript cargados correctamente");
console.log("Haz clic en los botones para ejecutar cada ejercicio");