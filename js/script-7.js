// ============================================
// EJERCICIO 1: Objeto Persona
// ============================================
function ejercicioObjeto1() {
    console.log("=== EJERCICIO 1: OBJETO PERSONA ===");
    
    // Crear objeto persona
    const persona = {
        nombre: "María García",
        edad: 28,
        ciudad: "Guatemala City"
    };
    
    // Mostrar objeto completo
    console.log("Objeto completo:", persona);
    
    // Mostrar cada propiedad
    console.log("Nombre:", persona.nombre);
    console.log("Edad:", persona.edad);
    console.log("Ciudad:", persona.ciudad);
    
    const div = document.getElementById('resultadoObj1');
    div.className = 'resultado visible';
    div.innerHTML = `
        <div class="objeto-visual">
            <strong>Objeto persona:</strong><br>
            { <br>
            &nbsp;&nbsp;nombre: "${persona.nombre}",<br>
            &nbsp;&nbsp;edad: ${persona.edad},<br>
            &nbsp;&nbsp;ciudad: "${persona.ciudad}"<br>
            }
        </div>
        
        <strong>Propiedades:</strong>
        <div class="propiedad">persona.nombre = "${persona.nombre}"</div>
        <div class="propiedad">persona.edad = ${persona.edad}</div>
        <div class="propiedad">persona.ciudad = "${persona.ciudad}"</div>
        
        <div class="codigo">
const persona = {<br>
&nbsp;&nbsp;nombre: "María García",<br>
&nbsp;&nbsp;edad: 28,<br>
&nbsp;&nbsp;ciudad: "Guatemala City"<br>
};<br><br>
console.log(persona.nombre);<br>
console.log(persona.edad);<br>
console.log(persona.ciudad);
        </div>
    `;
}

// ============================================
// EJERCICIO 2: Objeto Coche con Método
// ============================================
function ejercicioObjeto2() {
    let marca = document.getElementById('marca').value;
    let modelo = document.getElementById('modelo').value;
    let anio = document.getElementById('anio').value;
    
    if (!marca || !modelo || !anio) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    console.log("=== EJERCICIO 2: OBJETO COCHE ===");
    
    // Crear objeto coche con método
    const coche = {
        marca: marca,
        modelo: modelo,
        año: parseInt(anio),
        
        // Método para mostrar descripción
        mostrarDescripcion: function() {
            return `Este es un ${this.marca} ${this.modelo} del año ${this.año}`;
        }
    };
    
    console.log("Objeto completo:", coche);
    console.log("Llamando al método mostrarDescripcion():");
    const descripcion = coche.mostrarDescripcion();
    console.log(descripcion);
    
    const div = document.getElementById('resultadoObj2');
    div.className = 'resultado visible';
    div.innerHTML = `
        <div class="objeto-visual">
            <strong>Objeto coche:</strong><br>
            { <br>
            &nbsp;&nbsp;marca: "${coche.marca}",<br>
            &nbsp;&nbsp;modelo: "${coche.modelo}",<br>
            &nbsp;&nbsp;año: ${coche.año},<br>
            &nbsp;&nbsp;mostrarDescripcion: function() { ... }<br>
            }
        </div>
        
        <strong>Propiedades:</strong>
        <div class="propiedad">coche.marca = "${coche.marca}"</div>
        <div class="propiedad">coche.modelo = "${coche.modelo}"</div>
        <div class="propiedad">coche.año = ${coche.año}</div>
        
        <strong>Método ejecutado:</strong>
        <div class="metodo">
            coche.mostrarDescripcion()<br>
            → "${descripcion}"
        </div>
        
        <div class="codigo">
const coche = {<br>
&nbsp;&nbsp;marca: "${marca}",<br>
&nbsp;&nbsp;modelo: "${modelo}",<br>
&nbsp;&nbsp;año: ${anio},<br>
&nbsp;&nbsp;mostrarDescripcion: function() {<br>
&nbsp;&nbsp;&nbsp;&nbsp;return \`Este es un \${this.marca} \${this.modelo} del año \${this.año}\`;<br>
&nbsp;&nbsp;}<br>
};<br><br>
coche.mostrarDescripcion();
        </div>
    `;
}

// ============================================
// EJERCICIO 3: Objeto Rectángulo
// ============================================
function ejercicioObjeto3() {
    let ancho = parseFloat(document.getElementById('ancho').value);
    let alto = parseFloat(document.getElementById('alto').value);
    
    if (isNaN(ancho) || isNaN(alto)) {
        alert('Por favor ingresa valores numéricos válidos');
        return;
    }
    
    console.log("=== EJERCICIO 3: OBJETO RECTÁNGULO ===");
    
    // Crear objeto rectángulo con método
    const rectangulo = {
        ancho: ancho,
        alto: alto,
        
        // Método para calcular área
        calcularArea: function() {
            return this.ancho * this.alto;
        }
    };
    
    console.log("Objeto completo:", rectangulo);
    console.log(`Ancho: ${rectangulo.ancho}`);
    console.log(`Alto: ${rectangulo.alto}`);
    
    const area = rectangulo.calcularArea();
    console.log("Calculando área...");
    console.log(`Área = ${rectangulo.ancho} × ${rectangulo.alto} = ${area}`);
    
    const div = document.getElementById('resultadoObj3');
    div.className = 'resultado visible';
    div.innerHTML = `
        <div class="objeto-visual">
            <strong>Objeto rectángulo:</strong><br>
            { <br>
            &nbsp;&nbsp;ancho: ${rectangulo.ancho},<br>
            &nbsp;&nbsp;alto: ${rectangulo.alto},<br>
            &nbsp;&nbsp;calcularArea: function() { ... }<br>
            }
        </div>
        
        <strong>Propiedades:</strong>
        <div class="propiedad">rectangulo.ancho = ${rectangulo.ancho}</div>
        <div class="propiedad">rectangulo.alto = ${rectangulo.alto}</div>
        
        <strong>Método ejecutado:</strong>
        <div class="metodo">
            rectangulo.calcularArea()<br>
            → ${rectangulo.ancho} × ${rectangulo.alto} = <strong>${area}</strong>
        </div>
        
        <div class="codigo">
const rectangulo = {<br>
&nbsp;&nbsp;ancho: ${ancho},<br>
&nbsp;&nbsp;alto: ${alto},<br>
&nbsp;&nbsp;calcularArea: function() {<br>
&nbsp;&nbsp;&nbsp;&nbsp;return this.ancho * this.alto;<br>
&nbsp;&nbsp;}<br>
};<br><br>
let area = rectangulo.calcularArea();
        </div>
    `;
}

// ============================================
// EJERCICIO 4: Objeto Libro
// ============================================
function ejercicioObjeto4() {
    let titulo = document.getElementById('titulo').value;
    let autor = document.getElementById('autor').value;
    let anioLibro = document.getElementById('anioLibro').value;
    
    if (!titulo || !autor || !anioLibro) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    console.log("=== EJERCICIO 4: OBJETO LIBRO ===");
    
    // Crear objeto libro con método
    const libro = {
        titulo: titulo,
        autor: autor,
        año: parseInt(anioLibro),
        
        // Método para mostrar descripción
        mostrarDescripcion: function() {
            console.log(`"${this.titulo}" fue escrito por ${this.autor} en el año ${this.año}`);
        }
    };
    
    console.log("Objeto completo:", libro);
    console.log("Llamando al método mostrarDescripcion():");
    libro.mostrarDescripcion();
    
    const descripcion = `"${libro.titulo}" fue escrito por ${libro.autor} en el año ${libro.año}`;
    
    const div = document.getElementById('resultadoObj4');
    div.className = 'resultado visible';
    div.innerHTML = `
        <div class="objeto-visual">
            <strong>Objeto libro:</strong><br>
            { <br>
            &nbsp;&nbsp;titulo: "${libro.titulo}",<br>
            &nbsp;&nbsp;autor: "${libro.autor}",<br>
            &nbsp;&nbsp;año: ${libro.año},<br>
            &nbsp;&nbsp;mostrarDescripcion: function() { ... }<br>
            }
        </div>
        
        <strong>Propiedades:</strong>
        <div class="propiedad">libro.titulo = "${libro.titulo}"</div>
        <div class="propiedad">libro.autor = "${libro.autor}"</div>
        <div class="propiedad">libro.año = ${libro.año}</div>
        
        <strong>Método ejecutado:</strong>
        <div class="metodo">
            libro.mostrarDescripcion()<br>
            → "${descripcion}"
        </div>
        
        <div class="codigo">
const libro = {<br>
&nbsp;&nbsp;titulo: "${titulo}",<br>
&nbsp;&nbsp;autor: "${autor}",<br>
&nbsp;&nbsp;año: ${anioLibro},<br>
&nbsp;&nbsp;mostrarDescripcion: function() {<br>
&nbsp;&nbsp;&nbsp;&nbsp;console.log(\`"\${this.titulo}" fue escrito por \${this.autor} en el año \${this.año}\`);<br>
&nbsp;&nbsp;}<br>
};<br><br>
libro.mostrarDescripcion();
        </div>
    `;
}

// ============================================
// EJERCICIO 5: Objeto Usuario
// ============================================
function ejercicioObjeto5() {
    let nombreUsuario = document.getElementById('nombreUsuario').value;
    let contrasena = document.getElementById('contrasena').value;
    
    if (!nombreUsuario || !contrasena) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    console.log("=== EJERCICIO 5: OBJETO USUARIO ===");
    
    // Crear objeto usuario con método de verificación
    const usuario = {
        nombre: nombreUsuario,
        contraseña: "123456", // Contraseña predefinida
        
        // Método para verificar contraseña
        verificarContraseña: function(contraseñaIngresada) {
            if (contraseñaIngresada === this.contraseña) {
                return "✓ Contraseña correcta";
            } else {
                return "✗ Contraseña incorrecta";
            }
        }
    };
    
    console.log("Objeto completo:", usuario);
    console.log("Verificando contraseña ingresada...");
    const resultado = usuario.verificarContraseña(contrasena);
    console.log(resultado);
    
    const esCorrecta = contrasena === "123456";
    
    const div = document.getElementById('resultadoObj5');
    div.className = 'resultado visible';
    div.innerHTML = `
        <div class="objeto-visual">
            <strong>Objeto usuario:</strong><br>
            { <br>
            &nbsp;&nbsp;nombre: "${usuario.nombre}",<br>
            &nbsp;&nbsp;contraseña: "123456",<br>
            &nbsp;&nbsp;verificarContraseña: function(contraseñaIngresada) { ... }<br>
            }
        </div>
        
        <strong>Propiedades:</strong>
        <div class="propiedad">usuario.nombre = "${usuario.nombre}"</div>
        <div class="propiedad">usuario.contraseña = "123456" (predefinida)</div>
        
        <strong>Método ejecutado:</strong>
        <div class="metodo" style="border-left-color: ${esCorrecta ? '#28a745' : '#dc3545'}; background-color: ${esCorrecta ? '#d4edda' : '#f8d7da'}">
            usuario.verificarContraseña("${contrasena}")<br>
            → <strong>${resultado}</strong>
        </div>
        
        <div class="codigo">
const usuario = {<br>
&nbsp;&nbsp;nombre: "${nombreUsuario}",<br>
&nbsp;&nbsp;contraseña: "123456",<br>
&nbsp;&nbsp;verificarContraseña: function(contraseñaIngresada) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;if (contraseñaIngresada === this.contraseña) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "✓ Contraseña correcta";<br>
&nbsp;&nbsp;&nbsp;&nbsp;} else {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "✗ Contraseña incorrecta";<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
};<br><br>
usuario.verificarContraseña("${contrasena}");
        </div>
    `;
}

// ============================================
// EJERCICIO 6: Objeto Gato
// ============================================
function ejercicioObjeto6() {
    let nombreGato = document.getElementById('nombreGato').value;
    let edadGato = document.getElementById('edadGato').value;
    
    if (!nombreGato || !edadGato) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    console.log("=== EJERCICIO 6: OBJETO GATO ===");
    
    // Crear objeto gato con método
    const gato = {
        nombre: nombreGato,
        edad: parseInt(edadGato),
        
        // Método que devuelve mensaje
        obtenerMensaje: function() {
            return `Mi gato se llama ${this.nombre} y tiene ${this.edad} año${this.edad !== 1 ? 's' : ''} de edad 🐱`;
        }
    };
    
    console.log("Objeto completo:", gato);
    console.log(`Nombre: ${gato.nombre}`);
    console.log(`Edad: ${gato.edad}`);
    console.log("Llamando al método obtenerMensaje():");
    
    const mensaje = gato.obtenerMensaje();
    console.log(mensaje);
    
    const div = document.getElementById('resultadoObj6');
    div.className = 'resultado visible';
    div.innerHTML = `
        <div class="objeto-visual">
            <strong>Objeto gato:</strong><br>
            { <br>
            &nbsp;&nbsp;nombre: "${gato.nombre}",<br>
            &nbsp;&nbsp;edad: ${gato.edad},<br>
            &nbsp;&nbsp;obtenerMensaje: function() { ... }<br>
            }
        </div>
        
        <strong>Propiedades:</strong>
        <div class="propiedad">gato.nombre = "${gato.nombre}"</div>
        <div class="propiedad">gato.edad = ${gato.edad}</div>
        
        <strong>Método ejecutado:</strong>
        <div class="metodo">
            gato.obtenerMensaje()<br>
            → "${mensaje}"
        </div>
        
        <div class="codigo">
const gato = {<br>
&nbsp;&nbsp;nombre: "${nombreGato}",<br>
&nbsp;&nbsp;edad: ${edadGato},<br>
&nbsp;&nbsp;obtenerMensaje: function() {<br>
&nbsp;&nbsp;&nbsp;&nbsp;return \`Mi gato se llama \${this.nombre} y tiene \${this.edad} año\${this.edad !== 1 ? 's' : ''} de edad 🐱\`;<br>
&nbsp;&nbsp;}<br>
};<br><br>
let mensaje = gato.obtenerMensaje();<br>
console.log(mensaje);
        </div>
    `;
}

// Mensaje inicial
console.log("✅ Ejercicios de Objetos JavaScript cargados correctamente");
console.log("📦 Total: 6 ejercicios de objetos con propiedades y métodos");
console.log("💡 Recuerda: Los objetos pueden contener propiedades (datos) y métodos (funciones)");