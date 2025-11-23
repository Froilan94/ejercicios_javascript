// ============================================
// SECCIÓN: CONDICIONALES IF
// ============================================

// IF 1: Mayor que 10
function ejercicioIf1() {
    let numero = parseFloat(document.getElementById('if1').value);
    
    if (isNaN(numero)) {
        alert('Por favor ingresa un número válido');
        return;
    }
    
    console.log("=== IF 1: MAYOR QUE 10 ===");
    console.log(`Número ingresado: ${numero}`);
    
    let mensaje = "";
    if (numero > 10) {
        mensaje = `${numero} es MAYOR que 10`;
        console.log(mensaje);
    }
    
    const resultado = document.getElementById('resultadoIf1');
    resultado.className = 'resultado visible';
    resultado.innerHTML = mensaje || `${numero} NO es mayor que 10`;
}

// IF 2: Mayor de 18 años
function ejercicioIf2() {
    let edad = parseInt(document.getElementById('if2').value);
    
    if (isNaN(edad)) {
        alert('Por favor ingresa una edad válida');
        return;
    }
    
    console.log("=== IF 2: MAYOR DE 18 AÑOS ===");
    console.log(`Edad ingresada: ${edad}`);
    
    let mensaje = "";
    if (edad > 18) {
        mensaje = `Con ${edad} años, eres mayor de 18 años`;
        console.log(mensaje);
    }
    
    const resultado = document.getElementById('resultadoIf2');
    resultado.className = 'resultado visible';
    resultado.innerHTML = mensaje || `Con ${edad} años, NO eres mayor de 18 años`;
}

// IF 3: Calificación mayor a 50
function ejercicioIf3() {
    let calificacion = parseFloat(document.getElementById('if3').value);
    
    if (isNaN(calificacion)) {
        alert('Por favor ingresa una calificación válida');
        return;
    }
    
    console.log("=== IF 3: CALIFICACIÓN APROBADA ===");
    console.log(`Calificación: ${calificacion}`);
    
    let mensaje = "";
    if (calificacion > 50) {
        mensaje = `✓ Calificación: ${calificacion} - APROBADO`;
        console.log("APROBADO");
    }
    
    const resultado = document.getElementById('resultadoIf3');
    resultado.className = 'resultado visible';
    resultado.innerHTML = mensaje || `✗ Calificación: ${calificacion} - NO APROBADO`;
}

// IF 4: Número positivo
function ejercicioIf4() {
    let numero = parseFloat(document.getElementById('if4').value);
    
    if (isNaN(numero)) {
        alert('Por favor ingresa un número válido');
        return;
    }
    
    console.log("=== IF 4: NÚMERO POSITIVO ===");
    console.log(`Número ingresado: ${numero}`);
    
    let mensaje = "";
    if (numero > 0) {
        mensaje = `${numero} es un número POSITIVO`;
        console.log(mensaje);
    }
    
    const resultado = document.getElementById('resultadoIf4');
    resultado.className = 'resultado visible';
    resultado.innerHTML = mensaje || `${numero} NO es un número positivo`;
}

// IF 5: Comparar dos números
function ejercicioIf5() {
    let num1 = parseFloat(document.getElementById('if5a').value);
    let num2 = parseFloat(document.getElementById('if5b').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor ingresa dos números válidos');
        return;
    }
    
    console.log("=== IF 5: COMPARAR DOS NÚMEROS ===");
    console.log(`Número 1: ${num1}`);
    console.log(`Número 2: ${num2}`);
    
    let mensaje = "";
    if (num1 > num2) {
        mensaje = `${num1} es MAYOR que ${num2}`;
        console.log(mensaje);
    }
    if (num2 > num1) {
        mensaje = `${num2} es MAYOR que ${num1}`;
        console.log(mensaje);
    }
    
    const resultado = document.getElementById('resultadoIf5');
    resultado.className = 'resultado visible';
    resultado.innerHTML = mensaje || `${num1} y ${num2} son iguales`;
}

// ============================================
// SECCIÓN: CONDICIONALES IF ELSE
// ============================================

// IF ELSE 1: Temperatura
function ejercicioIfElse1() {
    let temperatura = parseFloat(document.getElementById('ifelse1').value);
    
    if (isNaN(temperatura)) {
        alert('Por favor ingresa una temperatura válida');
        return;
    }
    
    console.log("=== IF ELSE 1: TEMPERATURA ===");
    console.log(`Temperatura: ${temperatura}°C`);
    
    let mensaje;
    if (temperatura < 20) {
        mensaje = `${temperatura}°C - Hace FRÍO ❄️`;
        console.log("Hace frío");
    } else {
        mensaje = `${temperatura}°C - Hace CALOR ☀️`;
        console.log("Hace calor");
    }
    
    const resultado = document.getElementById('resultadoIfElse1');
    resultado.className = 'resultado visible';
    resultado.innerHTML = mensaje;
}

// IF ELSE 2: Mayor o menor de edad
function ejercicioIfElse2() {
    let edad = parseInt(document.getElementById('ifelse2').value);
    
    if (isNaN(edad)) {
        alert('Por favor ingresa una edad válida');
        return;
    }
    
    console.log("=== IF ELSE 2: MAYOR O MENOR DE EDAD ===");
    console.log(`Edad: ${edad}`);
    
    let mensaje;
    if (edad >= 18) {
        mensaje = `Con ${edad} años, eres MAYOR DE EDAD`;
        console.log("Mayor de edad");
    } else {
        mensaje = `Con ${edad} años, eres MENOR DE EDAD`;
        console.log("Menor de edad");
    }
    
    const resultado = document.getElementById('resultadoIfElse2');
    resultado.className = 'resultado visible';
    resultado.innerHTML = mensaje;
}

// IF ELSE 3: Par o impar
function ejercicioIfElse3() {
    let numero = parseInt(document.getElementById('ifelse3').value);
    
    if (isNaN(numero)) {
        alert('Por favor ingresa un número válido');
        return;
    }
    
    console.log("=== IF ELSE 3: PAR O IMPAR ===");
    console.log(`Número: ${numero}`);
    
    let mensaje;
    if (numero % 2 === 0) {
        mensaje = `${numero} es un número PAR`;
        console.log("PAR");
    } else {
        mensaje = `${numero} es un número IMPAR`;
        console.log("IMPAR");
    }
    
    const resultado = document.getElementById('resultadoIfElse3');
    resultado.className = 'resultado visible';
    resultado.innerHTML = mensaje;
}

// IF ELSE 4: Aprobado o reprobado
function ejercicioIfElse4() {
    let calificacion = parseFloat(document.getElementById('ifelse4').value);
    
    if (isNaN(calificacion)) {
        alert('Por favor ingresa una calificación válida');
        return;
    }
    
    console.log("=== IF ELSE 4: APROBADO O REPROBADO ===");
    console.log(`Calificación: ${calificacion}`);
    
    let mensaje;
    if (calificacion >= 60) {
        mensaje = `✓ Calificación: ${calificacion} - APROBADO`;
        console.log("APROBADO");
    } else {
        mensaje = `✗ Calificación: ${calificacion} - REPROBADO`;
        console.log("REPROBADO");
    }
    
    const resultado = document.getElementById('resultadoIfElse4');
    resultado.className = 'resultado visible';
    resultado.innerHTML = mensaje;
}

// IF ELSE 5: Positivo, negativo o cero
function ejercicioIfElse5() {
    let numero = parseFloat(document.getElementById('ifelse5').value);
    
    if (isNaN(numero)) {
        alert('Por favor ingresa un número válido');
        return;
    }
    
    console.log("=== IF ELSE 5: POSITIVO, NEGATIVO O CERO ===");
    console.log(`Número: ${numero}`);
    
    let mensaje;
    if (numero > 0) {
        mensaje = `${numero} es POSITIVO`;
        console.log("POSITIVO");
    } else if (numero < 0) {
        mensaje = `${numero} es NEGATIVO`;
        console.log("NEGATIVO");
    } else {
        mensaje = `El número es CERO`;
        console.log("CERO");
    }
    
    const resultado = document.getElementById('resultadoIfElse5');
    resultado.className = 'resultado visible';
    resultado.innerHTML = mensaje;
}

// ============================================
// SECCIÓN: CONDICIONALES SWITCH
// ============================================

// SWITCH 1: Día de la semana
function ejercicioSwitch1() {
    let dia = parseInt(document.getElementById('switch1').value);
    
    if (isNaN(dia) || dia < 1 || dia > 7) {
        alert('Por favor ingresa un número del 1 al 7');
        return;
    }
    
    console.log("=== SWITCH 1: DÍA DE LA SEMANA ===");
    console.log(`Número: ${dia}`);
    
    let nombreDia;
    switch (dia) {
        case 1:
            nombreDia = "Lunes";
            break;
        case 2:
            nombreDia = "Martes";
            break;
        case 3:
            nombreDia = "Miércoles";
            break;
        case 4:
            nombreDia = "Jueves";
            break;
        case 5:
            nombreDia = "Viernes";
            break;
        case 6:
            nombreDia = "Sábado";
            break;
        case 7:
            nombreDia = "Domingo";
            break;
        default:
            nombreDia = "Día inválido";
    }
    
    console.log(`Día de la semana: ${nombreDia}`);
    
    const resultado = document.getElementById('resultadoSwitch1');
    resultado.className = 'resultado visible';
    resultado.innerHTML = `Día ${dia}: <strong>${nombreDia}</strong>`;
}

// SWITCH 2: Calificación por letra
function ejercicioSwitch2() {
    let letra = document.getElementById('switch2').value;
    
    if (letra === "") {
        alert('Por favor selecciona una letra');
        return;
    }
    
    console.log("=== SWITCH 2: CALIFICACIÓN POR LETRA ===");
    console.log(`Letra: ${letra}`);
    
    let calificacion;
    switch (letra) {
        case "A":
            calificacion = "Excelente";
            break;
        case "B":
            calificacion = "Bien";
            break;
        case "C":
            calificacion = "Regular";
            break;
        default:
            calificacion = "Letra inválida";
    }
    
    console.log(`Calificación: ${calificacion}`);
    
    const resultado = document.getElementById('resultadoSwitch2');
    resultado.className = 'resultado visible';
    resultado.innerHTML = `Letra <strong>${letra}</strong>: ${calificacion}`;
}

// SWITCH 3: Mes del año
function ejercicioSwitch3() {
    let mes = parseInt(document.getElementById('switch3').value);
    
    if (isNaN(mes) || mes < 1 || mes > 12) {
        alert('Por favor ingresa un número del 1 al 12');
        return;
    }
    
    console.log("=== SWITCH 3: MES DEL AÑO ===");
    console.log(`Número: ${mes}`);
    
    let nombreMes;
    switch (mes) {
        case 1:
            nombreMes = "Enero";
            break;
        case 2:
            nombreMes = "Febrero";
            break;
        case 3:
            nombreMes = "Marzo";
            break;
        case 4:
            nombreMes = "Abril";
            break;
        case 5:
            nombreMes = "Mayo";
            break;
        case 6:
            nombreMes = "Junio";
            break;
        case 7:
            nombreMes = "Julio";
            break;
        case 8:
            nombreMes = "Agosto";
            break;
        case 9:
            nombreMes = "Septiembre";
            break;
        case 10:
            nombreMes = "Octubre";
            break;
        case 11:
            nombreMes = "Noviembre";
            break;
        case 12:
            nombreMes = "Diciembre";
            break;
        default:
            nombreMes = "Mes inválido";
    }
    
    console.log(`Mes: ${nombreMes}`);
    
    const resultado = document.getElementById('resultadoSwitch3');
    resultado.className = 'resultado visible';
    resultado.innerHTML = `Mes ${mes}: <strong>${nombreMes}</strong>`;
}

// SWITCH 4: Par o impar
function ejercicioSwitch4() {
    let numero = parseInt(document.getElementById('switch4').value);
    
    if (isNaN(numero)) {
        alert('Por favor ingresa un número válido');
        return;
    }
    
    console.log("=== SWITCH 4: PAR O IMPAR ===");
    console.log(`Número: ${numero}`);
    
    let resto = numero % 2;
    let resultado_texto;
    
    switch (resto) {
        case 0:
            resultado_texto = "PAR";
            break;
        case 1:
        case -1:
            resultado_texto = "IMPAR";
            break;
        default:
            resultado_texto = "Error";
    }
    
    console.log(`El número es: ${resultado_texto}`);
    
    const resultado = document.getElementById('resultadoSwitch4');
    resultado.className = 'resultado visible';
    resultado.innerHTML = `${numero} es <strong>${resultado_texto}</strong>`;
}

// SWITCH 5: Semáforo
function ejercicioSwitch5() {
    let color = document.getElementById('switch5').value;
    
    if (color === "") {
        alert('Por favor selecciona un color');
        return;
    }
    
    console.log("=== SWITCH 5: SEMÁFORO ===");
    console.log(`Color: ${color}`);
    
    let accion;
    let emoji;
    
    switch (color) {
        case "verde":
            accion = "AVANZAR";
            emoji = "🟢";
            break;
        case "amarillo":
            accion = "PRECAUCIÓN - Prepárate para detenerte";
            emoji = "🟡";
            break;
        case "rojo":
            accion = "DETENERSE";
            emoji = "🔴";
            break;
        default:
            accion = "Color inválido";
            emoji = "⚪";
    }
    
    console.log(`Acción: ${accion}`);
    
    const resultado = document.getElementById('resultadoSwitch5');
    resultado.className = 'resultado visible';
    resultado.innerHTML = `${emoji} Luz ${color}: <strong>${accion}</strong>`;
}

// Mensaje inicial
console.log("✅ Ejercicios de Condicionales cargados correctamente");
console.log("📚 Total: 15 ejercicios (5 IF, 5 IF ELSE, 5 SWITCH)");
console.log("Completa cada ejercicio y observa los resultados");