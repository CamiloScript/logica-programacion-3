var prompt = require("prompt-sync")();

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function ingresoNumero() {
    let num = prompt("Ingresar a continuación un numero para entregar su factorial : ");

    // Se condiciona el input, para que pueda revisarse la información ingresada, si esta no corresponde a un numero o se encuentra vacía, se devuelve un mensaje de error y se repite el proceso.

    // Verificar si el valor ingresado es un número y el input ingresado no se encuentra vacio, IsNaN es una función que verifica si un valor x no es un numero (Devuelve verdadero o falso).
    if (isNaN(num) || num === "") {
        alert("Favor ingrese un dato valido (Numeros), el valor ingresado no es correcto, intentelo nuevamente.");
        return ingresoNumero(); // Volver a solicitar el numero si el valor no es válido, se vuelve a iniciar la función Factorial.
    } else {
        // Si el valor ingresado es un numero se convierte el valor ingresado a número entero, para poder obtener resultados exactos.
        num = parseInt(num);
    }
    // Se realiza la generación del factorial //
    let factoriales = factorial(num);
    
    // Se imprimen los resultados en la consola
    alert("El factorial del numero " + num + " es : " + factoriales);
    
}
