const pantalla = document.querySelector(".pantalla"); // Selecciona la class ".pantalla" del documento
const botones = document.querySelectorAll(".btn"); // Selecciona la class ".btn" del documento

// Tutorial de uso
const toggleTuto = document.getElementById("toggleBtn")
const tutorial = document.getElementById("tutorial")

let visible = false; // Variable para mostrar Tutorial

// Tomar la tecla presionada (de la calculadora)
document.addEventListener("keydown", function(event) {
    //console.log("Tecla presionada:", event.key)

    if (event.key >= '0' && event.key <= '9') {
        console.log('Número presionado:', event.key);
        manejarBoton(event.key)
    }

    // Captura las operaciones básicas
    else if (['+', '-', '*', '/'].includes(event.key)) {
        console.log('Operación presionada:', event.key);
        manejarBoton(event.key)
    }

    // Captura las teclas de control
    else if (event.key === "Enter" || event.key === "=" || event.key === "Backspace" || event.key.toLowerCase() === "c"){
        manejarBoton(event.key)
    }
})

// Función que escucha los eventos del código
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        manejarBoton(boton.textContent) // Manejo de la lógica
    })
})

function manejarBoton(botonApretado) {
    console.log("Tecla presionada:", botonApretado)

    if (botonApretado === "C" || botonApretado.toLowerCase() === "c") {
        pantalla.textContent = "0";
        return;
    }

    if (botonApretado === "C" || botonApretado.toLowerCase() === "c") {
        pantalla.textContent = "0";
        return;
    }

    // Si borra...
    if (botonApretado === "borrar" || botonApretado === "Backspace") {
        if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") { // Si la longitud del resultado es 1 o "Error!"...
            pantalla.textContent = "0";
        } else {
            pantalla.textContent = pantalla.textContent.slice(0, -1) // Sino mueve el texto del botón apretado anteriormente hacia la derecha (X: -1)
        }
        return;
    }
    
    if (botonApretado === "=" || botonApretado === "Enter") {
        try {
            pantalla.textContent = eval(pantalla.textContent)
        } catch {
            pantalla.textContent = "Error!"
        }
        return;
    }

    if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
        pantalla.textContent = botonApretado // Si el texto en pantalla es 0 & si es "Error!" devuelve el texto en pantalla
    } else {
        pantalla.textContent += botonApretado // Si no es niguna de las 2, agrega/devuelve "0"
    }
}

toggleTuto.addEventListener("click", () => {
    if (visible) {
        tutorial.style.left = "-2000px"
    } else {
        tutorial.style.left = "70px"
    }
    console.log(visible)
    visible = !visible
})
