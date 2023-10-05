
let historialResultados = [];

function obtenerNumeros() {
    numero1 = parseFloat(prompt("Ingrese el primer número:"));
    numero2 = parseFloat(prompt("Ingrese el segundo número:"));
}

function obtenerOperacion() {
    operacion = prompt("Ingrese la operación deseada (+, -, *, /):");
}

function calcular() {
    let resultado;
    switch (operacion) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                alert("Error: No se puede dividir por cero.");
                return;
            }
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    historialResultados.push(`${numero1} ${operacion} ${numero2} = ${resultado}`);
    alert(`Resultado: ${resultado}`);
}


function mostrarHistorialResultados() {
    alert("Historial de resultados:\n" + historialResultados.join("\n"));
}


function main() {
    obtenerNumeros();
    obtenerOperacion();
    calcular();
    mostrarHistorialResultados();
}

main();
