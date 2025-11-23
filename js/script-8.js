// ============================================
// SECCIÓN: ARRAYS SIMPLES
// ============================================

// ARRAY 1: Primer y último elemento
function ejercicioArray1() {
    console.log("=== ARRAY 1: PRIMER Y ÚLTIMO ELEMENTO ===");
    
    // Declarar array con 5 números
    const numeros = [10, 25, 30, 45, 60];
    
    console.log("Array completo:", numeros);
    console.log(`Primer elemento: numeros[0] = ${numeros[0]}`);
    console.log(`Último elemento: numeros[${numeros.length - 1}] = ${numeros[numeros.length - 1]}`);
    
    const div = document.getElementById('resultadoArr1');
    div.className = 'resultado visible';
    div.innerHTML = `
        <div class="array-visual">
            const numeros = [${numeros.join(', ')}];
        </div>
        <strong>Primer elemento:</strong> numeros[0] = <strong>${numeros[0]}</strong><br>
        <strong>Último elemento:</strong> numeros[${numeros.length - 1}] = <strong>${numeros[numeros.length - 1]}</strong>
        <div class="codigo">
const numeros = [10, 25, 30, 45, 60];<br>
console.log(numeros[0]); // ${numeros[0]}<br>
console.log(numeros[numeros.length - 1]); // ${numeros[numeros.length - 1]}
        </div>
    `;
}

// ARRAY 2: Segunda ciudad
function ejercicioArray2() {
    console.log("=== ARRAY 2: SEGUNDA CIUDAD ===");
    
    // Array con 5 ciudades
    const ciudades = ["Guatemala City", "Ciudad de México", "Madrid", "Buenos Aires", "Bogotá"];
    
    console.log("Array completo:", ciudades);
    console.log(`Segunda ciudad: ciudades[1] = "${ciudades[1]}"`);
    
    const div = document.getElementById('resultadoArr2');
    div.className = 'resultado visible';
    div.innerHTML = `
        <div class="array-visual">
            const ciudades = ["${ciudades.join('", "')}"];
        </div>
        <strong>Segunda ciudad:</strong> ciudades[1] = <strong>"${ciudades[1]}"</strong>
        <div class="array-items">
            ${ciudades.map((c, i) => `<div class="array-item">[${i}] ${c}</div>`).join('')}
        </div>
        <div class="codigo">
const ciudades = ["Guatemala City", "Ciudad de México", "Madrid", "Buenos Aires", "Bogotá"];<br>
console.log(ciudades[1]); // "${ciudades[1]}"
        </div>
    `;
}

// ARRAY 3: Suma de números
function ejercicioArray3() {
    console.log("=== ARRAY 3: SUMA DE NÚMEROS ===");
    
    const numeros = [];
    let continuar = true;
    
    for (let i = 0; i < 5; i++) {
        let num = prompt(`Ingresa el número ${i + 1} de 5:`);
        
        if (num === null) {
            alert('Operación cancelada');
            return;
        }
        
        num = parseFloat(num);
        
        if (isNaN(num)) {
            alert('Por favor ingresa un número válido');
            i--;
            continue;
        }
        
        numeros.push(num);
        console.log(`Número ${i + 1} ingresado: ${num}`);
    }
    
    console.log("Array completo:", numeros);
    
    // Calcular suma
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    
    console.log(`Suma total: ${suma}`);
    
    const div = document.getElementById('resultadoArr3');
    div.className = 'resultado visible';
    div.innerHTML = `
        <div class="array-visual">
            const numeros = [${numeros.join(', ')}];
        </div>
        <strong>Números ingresados:</strong>
        <div class="array-items">
            ${numeros.map((n, i) => `<div class="array-item">[${i}] ${n}</div>`).join('')}
        </div>
        <strong>Suma total:</strong> <span style="font-size: 24px; color: #4facfe; font-weight: bold;">${suma}</span>
        <div class="codigo">
let suma = 0;<br>
for (let i = 0; i < numeros.length; i++) {<br>
&nbsp;&nbsp;suma += numeros[i];<br>
}<br>
console.log("Suma:", suma); // ${suma}
        </div>
    `;
}

// ARRAY 4: Recorrer palabras
function ejercicioArray4() {
    console.log("=== ARRAY 4: RECORRER ARRAY DE PALABRAS ===");
    
    const palabras = ["JavaScript", "Array", "Ciclo", "Consola", "Programa"];
    
    console.log("Array completo:", palabras);
    console.log("Recorriendo array:");
    
    for (let i = 0; i < palabras.length; i++) {
        console.log(`[${i}] ${palabras[i]}`);
    }
    
    const div = document.getElementById('resultadoArr4');
    div.className = 'resultado visible';
    div.innerHTML = `
        <div class="array-visual">
            const palabras = ["${palabras.join('", "')}"];
        </div>
        <strong>Recorriendo el array:</strong>
        <div class="array-items">
            ${palabras.map((p, i) => `<div class="array-item">[${i}] ${p}</div>`).join('')}
        </div>
        <div class="codigo">
for (let i = 0; i < palabras.length; i++) {<br>
&nbsp;&nbsp;console.log(palabras[i]);<br>
}<br><br>
// Salida:<br>
${palabras.map((p, i) => `// [${i}] ${p}`).join('<br>')}
        </div>
    `;
}

// ARRAY 5: Pedir 5 nombres
function ejercicioArray5() {
    console.log("=== ARRAY 5: PEDIR 5 NOMBRES ===");
    
    const nombres = [];
    
    for (let i = 0; i < 5; i++) {
        let nombre = prompt(`Ingresa el nombre ${i + 1} de 5:`);
        
        if (nombre === null) {
            alert('Operación cancelada');
            return;
        }
        
        if (nombre.trim() === '') {
            alert('Por favor ingresa un nombre válido');
            i--;
            continue;
        }
        
        nombres.push(nombre);
        console.log(`Nombre ${i + 1} agregado: ${nombre}`);
    }
    
    console.log("Array completo:", nombres);
    
    const div = document.getElementById('resultadoArr5');
    div.className = 'resultado visible';
    div.innerHTML = `
        <div class="array-visual">
            const nombres = ["${nombres.join('", "')}"];
        </div>
        <strong>Nombres ingresados:</strong>
        <div class="array-items">
            ${nombres.map((n, i) => `<div class="array-item">[${i}] ${n}</div>`).join('')}
        </div>
        <strong>Total de nombres:</strong> ${nombres.length}
        <div class="codigo">
const nombres = [];<br>
for (let i = 0; i < 5; i++) {<br>
&nbsp;&nbsp;let nombre = prompt(\`Ingresa el nombre \${i + 1}:\`);<br>
&nbsp;&nbsp;nombres.push(nombre);<br>
}<br>
console.log(nombres); // ["${nombres.join('", "')}"]
        </div>
    `;
}

// ARRAY 6: Números mayores a 50
function ejercicioArray6() {
    console.log("=== ARRAY 6: NÚMEROS MAYORES A 50 ===");
    
    const numeros = [];
    
    for (let i = 0; i < 10; i++) {
        let num = prompt(`Ingresa el número ${i + 1} de 10:`);
        
        if (num === null) {
            alert('Operación cancelada');
            return;
        }
        
        num = parseFloat(num);
        
        if (isNaN(num)) {
            alert('Por favor ingresa un número válido');
            i--;
            continue;
        }
        
        numeros.push(num);
        console.log(`Número ${i + 1}: ${num}`);
    }
    
    console.log("Array completo:", numeros);
    
    // Contar mayores a 50
    let contador = 0;
    const mayores = [];
    
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 50) {
            contador++;
            mayores.push(numeros[i]);
            console.log(`${numeros[i]} > 50 ✓`);
        }
    }
    
    console.log(`Total de números mayores a 50: ${contador}`);
    
    const div = document.getElementById('resultadoArr6');
    div.className = 'resultado visible';
    div.innerHTML = `
        <div class="array-visual">
            const numeros = [${numeros.join(', ')}];
        </div>
        <strong>Todos los números:</strong>
        <div class="array-items">
            ${numeros.map(n => `<div class="array-item" style="background-color: ${n > 50 ? '#28a745' : '#6c757d'}">${n}</div>`).join('')}
        </div>
        <strong>Números mayores a 50:</strong> ${mayores.length > 0 ? mayores.join(', ') : 'Ninguno'}<br>
        <strong>Cantidad:</strong> <span style="font-size: 24px; color: #4facfe; font-weight: bold;">${contador}</span>
        <div class="codigo">
let contador = 0;<br>
for (let i = 0; i < numeros.length; i++) {<br>
&nbsp;&nbsp;if (numeros[i] > 50) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;contador++;<br>
&nbsp;&nbsp;}<br>
}<br>
console.log("Total:", contador); // ${contador}
        </div>
    `;
}

// ============================================
// SECCIÓN: ARRAYS DE OBJETOS
// ============================================

// ARRAY OBJETOS 1: Array de personas
function ejercicioArrayObj1() {
    console.log("=== ARRAY OBJETOS 1: ARRAY DE PERSONAS ===");
    
    const personas = [
        { nombre: "Juan Pérez", edad: 25 },
        { nombre: "María González", edad: 30 },
        { nombre: "Carlos Rodríguez", edad: 28 }
    ];
    
    console.log("Array completo:", personas);
    console.log("Recorriendo array:");
    
    for (let i = 0; i < personas.length; i++) {
        console.log(`${i + 1}. ${personas[i].nombre}`);
    }
    
    const div = document.getElementById('resultadoArrObj1');
    div.className = 'resultado visible';
    div.innerHTML = `
        <strong>Array de ${personas.length} personas:</strong>
        ${personas.map((p, i) => `
            <div class="objeto-item">
                <strong>[${i}]</strong> ${p.nombre} - ${p.edad} años
            </div>
        `).join('')}
        <div class="codigo">
const personas = [<br>
&nbsp;&nbsp;{ nombre: "Juan Pérez", edad: 25 },<br>
&nbsp;&nbsp;{ nombre: "María González", edad: 30 },<br>
&nbsp;&nbsp;{ nombre: "Carlos Rodríguez", edad: 28 }<br>
];<br><br>
for (let i = 0; i < personas.length; i++) {<br>
&nbsp;&nbsp;console.log(personas[i].nombre);<br>
}
        </div>
    `;
}

// ARRAY OBJETOS 2: Array de coches
function ejercicioArrayObj2() {
    console.log("=== ARRAY OBJETOS 2: ARRAY DE COCHES ===");
    
    const coches = [
        { marca: "Toyota", modelo: "Corolla" },
        { marca: "Honda", modelo: "Civic" },
        { marca: "Ford", modelo: "Mustang" },
        { marca: "Chevrolet", modelo: "Camaro" },
        { marca: "BMW", modelo: "Serie 3" }
    ];
    
    console.log("Array completo:", coches);
    console.log("Modelos de coches:");
    
    for (let i = 0; i < coches.length; i++) {
        console.log(`${i + 1}. ${coches[i].modelo}`);
    }
    
    const div = document.getElementById('resultadoArrObj2');
    div.className = 'resultado visible';
    div.innerHTML = `
        <strong>Array de ${coches.length} coches:</strong>
        ${coches.map((c, i) => `
            <div class="objeto-item">
                <strong>[${i}]</strong> ${c.marca} - <strong>${c.modelo}</strong>
            </div>
        `).join('')}
        <strong>Modelos:</strong>
        <div class="array-items">
            ${coches.map(c => `<div class="array-item">${c.modelo}</div>`).join('')}
        </div>
        <div class="codigo">
const coches = [<br>
&nbsp;&nbsp;{ marca: "Toyota", modelo: "Corolla" },<br>
&nbsp;&nbsp;{ marca: "Honda", modelo: "Civic" },<br>
&nbsp;&nbsp;...<br>
];<br><br>
for (let i = 0; i < coches.length; i++) {<br>
&nbsp;&nbsp;console.log(coches[i].modelo);<br>
}
        </div>
    `;
}

// ARRAY OBJETOS 3: Productos > 100
function ejercicioArrayObj3() {
    console.log("=== ARRAY OBJETOS 3: PRODUCTOS > 100 ===");
    
    const productos = [
        { nombre: "Laptop", precio: 899 },
        { nombre: "Mouse", precio: 25 },
        { nombre: "Teclado", precio: 75 },
        { nombre: "Monitor", precio: 250 },
        { nombre: "Webcam", precio: 45 },
        { nombre: "Auriculares", precio: 120 }
    ];
    
    console.log("Array completo:", productos);
    console.log("Productos con precio mayor a 100:");
    
    const productosMayores = [];
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].precio > 100) {
            console.log(`- ${productos[i].nombre}: $${productos[i].precio}`);
            productosMayores.push(productos[i]);
        }
    }
    
    const div = document.getElementById('resultadoArrObj3');
    div.className = 'resultado visible';
    div.innerHTML = `
        <strong>Todos los productos:</strong>
        ${productos.map((p, i) => `
            <div class="objeto-item" style="border-color: ${p.precio > 100 ? '#28a745' : '#6c757d'}">
                <strong>[${i}]</strong> ${p.nombre} - $${p.precio} ${p.precio > 100 ? '✓' : ''}
            </div>
        `).join('')}
        <strong>Productos con precio > $100:</strong>
        ${productosMayores.map(p => `
            <div class="objeto-item" style="background-color: #d4edda;">
                ${p.nombre} - <strong>$${p.precio}</strong>
            </div>
        `).join('')}
        <div class="codigo">
for (let i = 0; i < productos.length; i++) {<br>
&nbsp;&nbsp;if (productos[i].precio > 100) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;console.log(productos[i].nombre);<br>
&nbsp;&nbsp;}<br>
}
        </div>
    `;
}

// ARRAY OBJETOS 4: Alumnos aprobados
function ejercicioArrayObj4() {
    console.log("=== ARRAY OBJETOS 4: ALUMNOS APROBADOS ===");
    
    const alumnos = [
        { nombre: "Ana López", nota: 85 },
        { nombre: "Pedro Martínez", nota: 55 },
        { nombre: "Sofía Torres", nota: 92 },
        { nombre: "Diego Ramírez", nota: 48 },
        { nombre: "Laura Sánchez", nota: 78 },
        { nombre: "Miguel Castro", nota: 60 }
    ];
    
    console.log("Array completo:", alumnos);
    console.log("Alumnos aprobados (nota >= 60):");
    
    const aprobados = [];
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].nota >= 60) {
            console.log(`✓ ${alumnos[i].nombre} - Nota: ${alumnos[i].nota}`);
            aprobados.push(alumnos[i]);
        }
    }
    
    const div = document.getElementById('resultadoArrObj4');
    div.className = 'resultado visible';
    div.innerHTML = `
        <strong>Todos los alumnos:</strong>
        ${alumnos.map((a, i) => `
            <div class="objeto-item" style="border-color: ${a.nota >= 60 ? '#28a745' : '#dc3545'}">
                <strong>[${i}]</strong> ${a.nombre} - Nota: ${a.nota} ${a.nota >= 60 ? '✓ Aprobado' : '✗ Reprobado'}
            </div>
        `).join('')}
        <strong>Alumnos aprobados (${aprobados.length}):</strong>
        ${aprobados.map(a => `
            <div class="objeto-item" style="background-color: #d4edda;">
                ${a.nombre} - <strong>Nota: ${a.nota}</strong>
            </div>
        `).join('')}
        <div class="codigo">
for (let i = 0; i < alumnos.length; i++) {<br>
&nbsp;&nbsp;if (alumnos[i].nota >= 60) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;console.log(alumnos[i].nombre);<br>
&nbsp;&nbsp;}<br>
}
        </div>
    `;
}

// ARRAY OBJETOS 5: Títulos de libros
function ejercicioArrayObj5() {
    console.log("=== ARRAY OBJETOS 5: TÍTULOS DE LIBROS ===");
    
    const libros = [
        { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
        { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
        { titulo: "El Principito", autor: "Antoine de Saint-Exupéry" },
        { titulo: "1984", autor: "George Orwell" },
        { titulo: "Orgullo y prejuicio", autor: "Jane Austen" }
    ];
    
    console.log("Array completo:", libros);
    console.log("Títulos de todos los libros:");
    
    for (let i = 0; i < libros.length; i++) {
        console.log(`${i + 1}. "${libros[i].titulo}"`);
    }
    
    const div = document.getElementById('resultadoArrObj5');
    div.className = 'resultado visible';
    div.innerHTML = `
        <strong>Array de ${libros.length} libros:</strong>
        ${libros.map((l, i) => `
            <div class="objeto-item">
                <strong>[${i}]</strong> "${l.titulo}"<br>
                <small>Autor: ${l.autor}</small>
            </div>
        `).join('')}
        <strong>Títulos:</strong>
        <div class="array-items">
            ${libros.map(l => `<div class="array-item" style="min-width: 200px;">${l.titulo}</div>`).join('')}
        </div>
        <div class="codigo">
for (let i = 0; i < libros.length; i++) {<br>
&nbsp;&nbsp;console.log(libros[i].titulo);<br>
}
        </div>
    `;
}

// ARRAY OBJETOS 6: Películas
function ejercicioArrayObj6() {
    console.log("=== ARRAY OBJETOS 6: PELÍCULAS ===");
    
    const peliculas = [
        { titulo: "El Padrino", director: "Francis Ford Coppola", año: 1972 },
        { titulo: "Inception", director: "Christopher Nolan", año: 2010 },
        { titulo: "Pulp Fiction", director: "Quentin Tarantino", año: 1994 },
        { titulo: "La La Land", director: "Damien Chazelle", año: 2016 },
        { titulo: "Parasite", director: "Bong Joon-ho", año: 2019 }
    ];
    
    console.log("Array completo:", peliculas);
    console.log("Descripción de cada película:");
    
    for (let i = 0; i < peliculas.length; i++) {
        const desc = `"${peliculas[i].titulo}" dirigida por ${peliculas[i].director} (${peliculas[i].año})`;
        console.log(`${i + 1}. ${desc}`);
    }
    
    const div = document.getElementById('resultadoArrObj6');
    div.className = 'resultado visible';
    div.innerHTML = `
        <strong>Array de ${peliculas.length} películas:</strong>
        ${peliculas.map((p, i) => `
            <div class="objeto-item">
                <strong>[${i}]</strong> <strong style="color: #4facfe;">"${p.titulo}"</strong><br>
                Director: ${p.director}<br>
                Año: ${p.año}
            </div>
        `).join('')}
        <div class="codigo">
for (let i = 0; i < peliculas.length; i++) {<br>
&nbsp;&nbsp;const desc = \`"\${peliculas[i].titulo}" dirigida por \${peliculas[i].director} (\${peliculas[i].año})\`;<br>
&nbsp;&nbsp;console.log(desc);<br>
}
        </div>
    `;
}

// Mensaje inicial
console.log("✅ Ejercicios de Arrays JavaScript cargados correctamente");
console.log("📚 Total: 12 ejercicios (6 Arrays simples, 6 Arrays de objetos)");
console.log("💡 Los arrays comienzan en índice 0");