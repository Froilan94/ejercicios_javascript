// ========================================
// EJERCICIO 1: Calificación (if)
// ========================================
function ejecutarEjercicio1() {
    // Obtener calificación del input
    let calificacion = parseFloat(document.getElementById('calificacion').value);
    
    // Validar que se ingresó una calificación válida
    if (isNaN(calificacion)) {
        alert('Por favor ingresa una calificación válida');
        return;
    }
    
    // Mostrar en consola
    console.log("=== EJERCICIO 1: CALIFICACIÓN (if) ===");
    console.log(`Calificación ingresada: ${calificacion}`);
    
    // Estructura condicional if
    let mensaje = "";
    if (calificacion >= 60) {
        mensaje = "¡APROBADO!";
        console.log("Resultado: APROBADO ✓");
    } else {
        mensaje = "REPROBADO";
        console.log("Resultado: REPROBADO ✗");
    }
    
    // Mostrar en pantalla
    const resultado = document.getElementById('resultado1');
    resultado.style.display = 'block';
    const clase = calificacion >= 60 ? 'aprobado' : 'reprobado';
    resultado.innerHTML = `
        <strong>Calificación:</strong> ${calificacion} puntos<br>
        <strong>Resultado:</strong> <span class="${clase}">${mensaje}</span><br>
        <small>Nota mínima para aprobar: 60 puntos</small>
    `;
}

// ========================================
// EJERCICIO 2: Positivo, Negativo o Cero (if else)
// ========================================
function ejecutarEjercicio2() {
    // Obtener número del input
    let numero = parseFloat(document.getElementById('numero1').value);
    
    // Validar que se ingresó un número válido
    if (isNaN(numero)) {
        alert('Por favor ingresa un número válido');
        return;
    }
    
    // Mostrar en consola
    console.log("=== EJERCICIO 2: POSITIVO, NEGATIVO O CERO (if else) ===");
    console.log(`Número ingresado: ${numero}`);
    
    // Estructura condicional if else
    let resultado;
    if (numero > 0) {
        resultado = "POSITIVO";
        console.log("El número es POSITIVO");
    } else if (numero < 0) {
        resultado = "NEGATIVO";
        console.log("El número es NEGATIVO");
    } else {
        resultado = "CERO";
        console.log("El número es CERO");
    }
    
    // Mostrar en pantalla
    const resultadoDiv = document.getElementById('resultado2');
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <strong>Número:</strong> ${numero}<br>
        <strong>Resultado:</strong> El número es <strong>${resultado}</strong>
    `;
}

// ========================================
// EJERCICIO 3: Día de la Semana (switch)
// ========================================
function ejecutarEjercicio3() {
    // Obtener número del input
    let numeroDia = parseInt(document.getElementById('numeroDia').value);
    
    // Validar que se ingresó un número válido
    if (isNaN(numeroDia) || numeroDia < 1 || numeroDia > 7) {
        alert('Por favor ingresa un número del 1 al 7');
        return;
    }
    
    // Mostrar en consola
    console.log("=== EJERCICIO 3: DÍA DE LA SEMANA (switch) ===");
    console.log(`Número ingresado: ${numeroDia}`);
    
    // Estructura condicional switch
    let diaSemana;
    switch (numeroDia) {
        case 1:
            diaSemana = "Lunes";
            break;
        case 2:
            diaSemana = "Martes";
            break;
        case 3:
            diaSemana = "Miércoles";
            break;
        case 4:
            diaSemana = "Jueves";
            break;
        case 5:
            diaSemana = "Viernes";
            break;
        case 6:
            diaSemana = "Sábado";
            break;
        case 7:
            diaSemana = "Domingo";
            break;
        default:
            diaSemana = "Número inválido";
    }
    
    console.log(`Día de la semana: ${diaSemana}`);
    
    // Mostrar en pantalla
    const resultado = document.getElementById('resultado3');
    resultado.style.display = 'block';
    resultado.innerHTML = `
        <strong>Número:</strong> ${numeroDia}<br>
        <strong>Día de la semana:</strong> <strong>${diaSemana}</strong>
    `;
}

// ========================================
// EJERCICIO 4: Comparar Números (Operador Ternario)
// ========================================
function ejecutarEjercicio4() {
    // Obtener números de los inputs
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    
    // Validar que se ingresaron números válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor ingresa dos números válidos');
        return;
    }
    
    // Mostrar en consola
    console.log("=== EJERCICIO 4: COMPARAR NÚMEROS (Operador Ternario) ===");
    console.log(`Número 1: ${num1}`);
    console.log(`Número 2: ${num2}`);
    
    // Operador ternario
    let mayor = num1 > num2 ? num1 : num2;
    let mensaje = num1 === num2 ? "Los números son iguales" : 
                  `El número mayor es: ${mayor}`;
    
    console.log(mensaje);
    console.log(`Código usado: let mayor = num1 > num2 ? num1 : num2;`);
    
    // Mostrar en pantalla
    const resultado = document.getElementById('resultado4');
    resultado.style.display = 'block';
    resultado.innerHTML = `
        <strong>Número 1:</strong> ${num1}<br>
        <strong>Número 2:</strong> ${num2}<br>
        <strong>Resultado:</strong> <strong>${mensaje}</strong><br>
        <small>Código: let mayor = num1 > num2 ? num1 : num2;</small>
    `;
}

// ========================================
// EJERCICIO 5: Mayor de Edad (if else)
// ========================================
function ejecutarEjercicio5() {
    // Obtener edad del input
    let edad = parseInt(document.getElementById('edad').value);
    
    // Validar que se ingresó una edad válida
    if (isNaN(edad) || edad < 0) {
        alert('Por favor ingresa una edad válida');
        return;
    }
    
    // Mostrar en consola
    console.log("=== EJERCICIO 5: MAYOR DE EDAD (if else) ===");
    console.log(`Edad ingresada: ${edad}`);
    
    // Estructura condicional if else
    let mensaje;
    if (edad >= 18) {
        mensaje = "Eres MAYOR DE EDAD";
        console.log("Resultado: Mayor de edad ✓");
    } else {
        mensaje = "Eres MENOR DE EDAD";
        console.log("Resultado: Menor de edad");
    }
    
    // Mostrar en pantalla
    const resultado = document.getElementById('resultado5');
    resultado.style.display = 'block';
    const clase = edad >= 18 ? 'aprobado' : 'reprobado';
    resultado.innerHTML = `
        <strong>Edad:</strong> ${edad} años<br>
        <strong>Resultado:</strong> <span class="${clase}">${mensaje}</span><br>
        <small>Edad mínima para ser mayor de edad: 18 años</small>
    `;
}

// ========================================
// EJERCICIO 6: Divisibilidad (switch)
// ========================================
function ejecutarEjercicio6() {
    // Obtener número del input
    let numero = parseInt(document.getElementById('numeroDivisible').value);
    
    // Validar que se ingresó un número válido
    if (isNaN(numero)) {
        alert('Por favor ingresa un número válido');
        return;
    }
    
    // Mostrar en consola
    console.log("=== EJERCICIO 6: DIVISIBILIDAD (switch) ===");
    console.log(`Número ingresado: ${numero}`);
    
    // Verificar divisibilidad
    let divisiblePor3 = numero % 3 === 0;
    let divisiblePor5 = numero % 5 === 0;
    
    // Crear un caso único para el switch
    let caso = "";
    if (divisiblePor3 && divisiblePor5) {
        caso = "ambos";
    } else if (divisiblePor3) {
        caso = "tres";
    } else if (divisiblePor5) {
        caso = "cinco";
    } else {
        caso = "ninguno";
    }
    
    // Estructura condicional switch
    let mensaje;
    switch (caso) {
        case "ambos":
            mensaje = `${numero} es divisible por 3 Y por 5 (múltiplo de 15)`;
            console.log("El número es divisible por 3 y 5");
            break;
        case "tres":
            mensaje = `${numero} es divisible solo por 3`;
            console.log("El número es divisible solo por 3");
            break;
        case "cinco":
            mensaje = `${numero} es divisible solo por 5`;
            console.log("El número es divisible solo por 5");
            break;
        case "ninguno":
            mensaje = `${numero} NO es divisible ni por 3 ni por 5`;
            console.log("El número NO es divisible ni por 3 ni por 5");
            break;
        default:
            mensaje = "Error en la verificación";
    }
    
    // Mostrar en pantalla
    const resultado = document.getElementById('resultado6');
    resultado.style.display = 'block';
    resultado.innerHTML = `
        <strong>Número:</strong> ${numero}<br>
        <strong>Divisible por 3:</strong> ${divisiblePor3 ? 'Sí' : 'No'}<br>
        <strong>Divisible por 5:</strong> ${divisiblePor5 ? 'Sí' : 'No'}<br>
        <strong>Resultado:</strong> <strong>${mensaje}</strong>
    `;
}

// Mensaje inicial en consola
console.log("Ejercicios de Estructuras Condicionales cargados correctamente");
console.log("Tipos de condicionales: if, if else, switch, operador ternario");
console.log("Haz clic en los botones para ejecutar cada ejercicio");