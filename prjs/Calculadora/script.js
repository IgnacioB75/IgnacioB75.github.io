const pantalla = document.querySelector(".pantalla"); // Selecciona la class ".pantalla" del documento
const botones = document.querySelectorAll(".btn"); // Selecciona la class ".btn" del documento

botones.forEach(boton => { // forEach() ejecuta la función indicada una vez por cada elemento || el elemento es "boton"
    boton.addEventListener("click",() => { // "addEventListener()" añade un método para escuchar eventos del código
        console.log(boton.textContent); // Imprime en la consola el texto(en HTML) del botón clickeado

        const botonApretado = boton.textContent; // Variable para definir el texto(en HTML) del botón

        if(boton.id === "c"){
            pantalla.textContent = "0"; // Si se apreta el botón "C", la pantalla se reinicia(0)
            return;
        }

        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent = "0";
                // Si la longitud del texto en pantalla es 1 & si el texto en pantalla es "Error!": la pantalla se reinicia(0)
            } else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
                // Sino mueve el texto del botón apretado anteriormente hacia la derecha(X:-1)
            }
            return; 
        }

        if (boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
                // Intenta calcular el resultado de la cuenta
            } catch {
                pantalla.textContent = "Error!";
                // Si no puede devuelve "Error!"
            }
            return;
        }

        if (pantalla.textContent == "0" || pantalla.textContent === "Error!"){
            pantalla.textContent = botonApretado;
            // Si el texto en pantalla es "0" & si es "Error!": devuelve el texto en pantalla
        } else{
            pantalla.textContent += botonApretado;
            // Si no es ninguna de las 2, agrega/devuelve "0"
        }
    })
})