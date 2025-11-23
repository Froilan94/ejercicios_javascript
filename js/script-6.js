// ============================================
// SECCIÓN: OPERADOR TERNARIO
// ============================================

// TERNARIO 1: Mayor o menor de edad
function ejercicioTern1() {
    let edad = parseInt(document.getElementById('tern1').value);
    
    if (isNaN(edad)) {
        alert('Por favor ingresa una edad válida');
        return;
    }
    
    console.log("=== TERNARIO 1: MAYOR O MENOR DE EDAD ===");
    console.log(`Edad: ${edad}`);
    
    // Operador ternario
    let resultado = edad >= 18 ? "MAYOR DE EDAD" : "MENOR DE EDAD";
    
    console.log(`Código: let resultado = edad >= 18 ? "MAYOR DE EDAD" : "MENOR DE EDAD";`);
    console.log(`Resultado: ${resultado}`);
    
    const div = document.getElementById('resultadoTern1');
    div.className = 'resultado visible';
    div.innerHTML = `
        <strong>Edad:</strong> ${edad} años<br>
        <strong>Resultado:</strong> ${resultado}<br>
        <hr style="margin: 10px 0;">
        <small><strong>Código usado:</strong><br>
        let resultado = edad >= 18 ? "MAYOR DE EDAD" : "MENOR DE EDAD";</small>
    `;
}

// TERNARIO 2: Par o impar
function ejercicioTern2() {
    let numero = parseInt(document.getElementById('tern2').value);
    
    if (isNaN(numero)) {
        alert('Por favor ingresa un número válido');
        return;
    }
    
    console.log("=== TERNARIO 2: PAR O IMPAR ===");
    console.log(`Número: ${numero}`);
    
    // Operador ternario
    let resultado = numero % 2 === 0 ? "PAR" : "IMPAR";
    
    console.log(`Código: let resultado = numero % 2 === 0 ? "PAR" : "IMPAR";`);
    console.log(`Resultado: ${resultado}`);
    
    const div = document.getElementById('resultadoTern2');
    div.className = 'resultado visible';
    div.innerHTML = `
        <strong>Número:</strong> ${numero}<br>
        <strong>Resultado:</strong> ${resultado}<br>
        <hr style="margin: 10px 0;">
        <small><strong>Código usado:</strong><br>
        let resultado = numero % 2 === 0 ? "PAR" : "IMPAR";</small>
    `;
}

// TERNARIO 3: Número mayor
function ejercicioTern3() {
    let num1 = parseFloat(document.getElementById('tern3a').value);
    let num2 = parseFloat(document.getElementById('tern3b').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor ingresa dos números válidos');
        return;
    }
    
    console.log("=== TERNARIO 3: NÚMERO MAYOR ===");
    console.log(`Número 1: ${num1}`);
    console.log(`Número 2: ${num2}`);
    
    // Operador ternario
    let mayor = num1 > num2 ? num1 : num2;
    let mensaje = num1 === num2 ? "Los números son iguales" : `El mayor es: ${mayor}`;
    
    console.log(`Código: let mayor = num1 > num2 ? num1 : num2;`);
    console.log(`Resultado: ${mensaje}`);
    
    const div = document.getElementById('resultadoTern3');
    div.className = 'resultado visible';
    div.innerHTML = `
        <strong>Número 1:</strong> ${num1}<br>
        <strong>Número 2:</strong> ${num2}<br>
        <strong>Resultado:</strong> ${mensaje}<br>
        <hr style="margin: 10px 0;">
        <small><strong>Código usado:</strong><br>
        let mayor = num1 > num2 ? num1 : num2;</small>
    `;
}

// TERNARIO 4: Temperatura
function ejercicioTern4() {
    let temperatura = parseFloat(document.getElementById('tern4').value);
    
    if (isNaN(temperatura)) {
        alert('Por favor ingresa una temperatura válida');
        return;
    }
    
    console.log("=== TERNARIO 4: TEMPERATURA ===");
    console.log(`Temperatura: ${temperatura}°C`);
    
    // Operador ternario
    let resultado = temperatura >= 25 ? "CALOR ☀️" : "FRÍO ❄️";
    
    console.log(`Código: let resultado = temperatura >= 25 ? "CALOR" : "FRÍO";`);
    console.log(`Resultado: ${resultado}`);
    
    const div = document.getElementById('resultadoTern4');
    div.className = 'resultado visible';
    div.innerHTML = `
        <strong>Temperatura:</strong> ${temperatura}°C<br>
        <strong>Resultado:</strong> ${resultado}<br>
        <hr style="margin: 10px 0;">
        <small><strong>Código usado:</strong><br>
        let resultado = temperatura >= 25 ? "CALOR" : "FRÍO";</small>
    `;
}

// TERNARIO 5: Puede votar
function ejercicioTern5() {
    let anioNacimiento = parseInt(document.getElementById('tern5').value);
    
    if (isNaN(anioNacimiento) || anioNacimiento < 1900 || anioNacimiento > 2025) {
        alert('Por favor ingresa un año de nacimiento válido');
        return;
    }
    
    console.log("=== TERNARIO 5: PUEDE VOTAR ===");
    console.log(`Año de nacimiento: ${anioNacimiento}`);
    
    let anioActual = 2025;
    let edad = anioActual - anioNacimiento;
    
    // Operador ternario
    let puedeVotar = edad >= 18 ? "SÍ puede votar" : "NO puede votar";
    
    console.log(`Edad: ${edad} años`);
    console.log(`Código: let puedeVotar = edad >= 18 ? "SÍ puede votar" : "NO puede votar";`);
    console.log(`Resultado: ${puedeVotar}`);
    
    const div = document.getElementById('resultadoTern5');
    div.className = 'resultado visible';
    div.innerHTML = `
        <strong>Año de nacimiento:</strong> ${anioNacimiento}<br>
        <strong>Edad actual:</strong> ${edad} años<br>
        <strong>Resultado:</strong> ${puedeVotar}<br>
        <hr style="margin: 10px 0;">
        <small><strong>Código usado:</strong><br>
        let puedeVotar = edad >= 18 ? "SÍ puede votar" : "NO puede votar";</small>
    `;
}

// ============================================
// SECCIÓN: CICLOS
// ============================================

// CICLO 1: Números del 1 al 10 (for)
function ejercicioCiclo1() {
    console.log("=== CICLO 1: NÚMEROS DEL 1 AL 10 (for) ===");
    console.log("Código: for (let i = 1; i <= 10; i++) { ... }");
    
    let numeros = [];
    
    for (let i = 1; i <= 10; i++) {
        numeros.push(i);
        console.log(i);
    }
    
    const div = document.getElementById('resultadoCiclo1');
    div.className = 'resultado visible';
    div.innerHTML = `
        <strong>Números del 1 al 10:</strong><br>
        <div class="lista-numeros">
            ${numeros.map(n => `<span class="numero-item">${n}</span>`).join('')}
        </div>
        <hr style="margin: 10px 0;">
        <small><strong>Código usado:</strong><br>
        for (let i = 1; i <= 10; i++) {<br>
        &nbsp;&nbsp;console.log(i);<br>
        }</small>
    `;
}

// CICLO 2: Suma del 1 al 100 (while)
function ejercicioCiclo2() {
    console.log("=== CICLO 2: SUMA DEL 1 AL 100 (while) ===");
    console.log("Código: while (i <= 100) { suma += i; i++; }");
    
    let suma = 0;
    let i = 1;
    
    while (i <= 100) {
        suma += i;
        i++;
    }
    
    console.log(`Suma total: ${suma}`);
    
    const div = document.getElementById('resultadoCiclo2');
    div.className = 'resultado visible';
    div.innerHTML = `
        <strong>Suma de números del 1 al 100:</strong><br>
        <div style="font-size: 24px; color: #667eea; font-weight: bold; margin: 15px 0;">
            ${suma}
        </div>
        <small>1 + 2 + 3 + ... + 98 + 99 + 100 = ${suma}</small>
        <hr style="margin: 10px 0;">
        <small><strong>Código usado:</strong><br>
        let suma = 0;<br>
        let i = 1;<br>
        while (i <= 100) {<br>
        &nbsp;&nbsp;suma += i;<br>
        &nbsp;&nbsp;i++;<br>
        }</small>
    `;
}

// CICLO 3: Tabla de multiplicar (for)
function ejercicioCiclo3() {
    let numero = parseInt(document.getElementById('ciclo3').value);
    
    if (isNaN(numero)) {
        alert('Por favor ingresa un número válido');
        return;
    }
    
    console.log(`=== CICLO 3: TABLA DE MULTIPLICAR DEL ${numero} (for) ===`);
    console.log(`Código: for (let i = 1; i <= 10; i++) { ... }`);
    
    let tabla = [];
    
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        tabla.push(`${numero} × ${i} = ${resultado}`);
        console.log(`${numero} × ${i} = ${resultado}`);
    }
    
    const div = document.getElementById('resultadoCiclo3');
    div.className = 'resultado visible';
    div.innerHTML = `
        <strong>Tabla de multiplicar del ${numero}:</strong><br><br>
        ${tabla.map(t => `<div style="margin: 5px 0;">${t}</div>`).join('')}
        <hr style="margin: 10px 0;">
        <small><strong>Código usado:</strong><br>
        for (let i = 1; i <= 10; i++) {<br>
        &nbsp;&nbsp;let resultado = numero * i;<br>
        &nbsp;&nbsp;console.log(\`\${numero} × \${i} = \${resultado}\`);<br>
        }</small>
    `;
}

// CICLO 4: Primeros 10 números pares (while)
function ejercicioCiclo4() {
    console.log("=== CICLO 4: PRIMEROS 10 NÚMEROS PARES (while) ===");
    console.log("Código: while (contador < 10) { ... }");
    
    let pares = [];
    let numero = 2;
    let contador = 0;
    
    while (contador < 10) {
        pares.push(numero);
        console.log(numero);
        numero += 2;
        contador++;
    }
    
    const div = document.getElementById('resultadoCiclo4');
    div.className = 'resultado visible';
    div.innerHTML = `
        <strong>Primeros 10 números pares:</strong><br>
        <div class="lista-numeros">
            ${pares.map(n => `<span class="numero-item">${n}</span>`).join('')}
        </div>
        <hr style="margin: 10px 0;">
        <small><strong>Código usado:</strong><br>
        let numero = 2;<br>
        let contador = 0;<br>
        while (contador < 10) {<br>
        &nbsp;&nbsp;console.log(numero);<br>
        &nbsp;&nbsp;numero += 2;<br>
        &nbsp;&nbsp;contador++;<br>
        }</small>
    `;
}

// CICLO 5: Ingresar números hasta negativo (do while)
let numerosIngresados = [];

function ejercicioCiclo5() {
    console.log("=== CICLO 5: INGRESAR NÚMEROS HASTA NEGATIVO (do while) ===");
    
    let numero;
    
    do {
        numero = prompt("Ingresa un número (negativo para terminar):");
        
        if (numero === null) {
            alert('Operación cancelada');
            return;
        }
        
        numero = parseFloat(numero);
        
        if (isNaN(numero)) {
            alert('Por favor ingresa un número válido');
            continue;
        }
        
        if (numero >= 0) {
            numerosIngresados.push(numero);
            console.log(`Número ingresado: ${numero}`);
        }
        
    } while (numero >= 0);
    
    console.log("Número negativo ingresado. Fin del ciclo.");
    console.log(`Total de números ingresados: ${numerosIngresados.length}`);
    
    const div = document.getElementById('resultadoCiclo5');
    div.className = 'resultado visible';
    div.innerHTML = `
        <strong>Números ingresados:</strong><br>
        <div class="lista-numeros">
            ${numerosIngresados.map(n => `<span class="numero-item">${n}</span>`).join('')}
        </div>
        <br>
        <strong>Total:</strong> ${numerosIngresados.length} números<br>
        <hr style="margin: 10px 0;">
        <small><strong>Código usado:</strong><br>
        do {<br>
        &nbsp;&nbsp;numero = prompt("Ingresa un número:");<br>
        &nbsp;&nbsp;if (numero >= 0) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;// Guardar número<br>
        &nbsp;&nbsp;}<br>
        } while (numero >= 0);</small>
    `;
}

function resetCiclo5() {
    numerosIngresados = [];
    document.getElementById('resultadoCiclo5').className = 'resultado';
    console.log("Lista de números reiniciada");
}

// CICLO 6: Contar letra 'a' (for)
function ejercicioCiclo6() {
    let palabra = document.getElementById('ciclo6').value;
    
    if (palabra === '') {
        alert('Por favor ingresa una palabra');
        return;
    }
    
    console.log(`=== CICLO 6: CONTAR LETRA 'a' EN "${palabra}" (for) ===`);
    console.log(`Código: for (let i = 0; i < palabra.length; i++) { ... }`);
    
    let contador = 0;
    let posiciones = [];
    
    for (let i = 0; i < palabra.length; i++) {
        console.log(`Posición ${i}: '${palabra[i]}'`);
        
        if (palabra[i].toLowerCase() === 'a') {
            contador++;
            posiciones.push(i);
            console.log(`  -> ¡Encontrada 'a' en posición ${i}!`);
        }
    }
    
    console.log(`Total de letras 'a' encontradas: ${contador}`);
    
    const div = document.getElementById('resultadoCiclo6');
    div.className = 'resultado visible';
    div.innerHTML = `
        <strong>Palabra:</strong> ${palabra}<br>
        <strong>Letra a buscar:</strong> 'a'<br>
        <strong>Cantidad encontrada:</strong> ${contador}<br>
        ${posiciones.length > 0 ? `<strong>Posiciones:</strong> ${posiciones.join(', ')}` : ''}
        <hr style="margin: 10px 0;">
        <small><strong>Código usado:</strong><br>
        let contador = 0;<br>
        for (let i = 0; i < palabra.length; i++) {<br>
        &nbsp;&nbsp;if (palabra[i].toLowerCase() === 'a') {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;contador++;<br>
        &nbsp;&nbsp;}<br>
        }</small>
    `;
}

// Mensaje inicial
console.log("✅ Ejercicios de Operador Ternario y Ciclos cargados");
console.log("📚 Total: 11 ejercicios (5 Ternario, 6 Ciclos)");
console.log("🔄 Ciclos incluidos: for, while, do while");