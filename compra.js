/* function compraSemana() {
    const precioCafe = 15000;
    const supermercadoAbierto = true;
    let presupuesto = 20000;

    if (supermercadoAbierto && presupuesto >= precioCafe) {
        presupuesto -= precioCafe;
        console.log(`Compra realizada. Presupuesto restante: ${presupuesto}`);
    } else if (!supermercadoAbierto && presupuesto >= precioCafe) {
        console.log("Supermercado cerrado. No se puede realizar la compra.");
    } else {
        console.log("Presupuesto insuficiente. No se puede realizar la compra.");
    }
}

// ¡IMPORTANTE! Debes invocar la función para que se ejecute:
compraSemana(); */

/* let presupuesto = 6000; // Declaramos el presupuesto (puedes cambiar este valor)
const precioManzana = 2000;
const manzanasNecesarias = 5;

// El ciclo se repite mientras 'i' sea menor o igual a manzanasNecesarias
for (let i = 1; i <= manzanasNecesarias; i++) {
    if (presupuesto >= precioManzana) {
        presupuesto -= precioManzana;
        console.log(`Compraste la manzana #${i}. Presupuesto restante: ${presupuesto}`);
    } else {
        console.log(`Presupuesto insuficiente para la manzana #${i}. ¡A comprar se acabó!`);
        break; // Detiene el ciclo si ya no hay dinero
    }
} */


const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function iniciarCompra() {
    // Creamos la interfaz para leer la terminal
    const rl = readline.createInterface({ input, output });

    try {
        // Pedimos el valor al usuario en la terminal
        let metodoPago = await rl.question("Ingresa tu método de pago (efectivo, tarjeta, transferencia, cheque, debito): ");

        // Convertimos a minúsculas y limpiamos espacios extra
        metodoPago = metodoPago ? metodoPago.toLowerCase().trim() : "";

        switch (metodoPago) {
            case "efectivo":
                console.log("💵 Has seleccionado pagar en efectivo.");
                break;
            case "tarjeta":
                console.log("💳 Has seleccionado pagar con tarjeta de crédito.");
                break;
            case "transferencia":
                console.log("📱 Has seleccionado pagar con transferencia.");
                break;
            case "cheque":
                console.log("📄 Has seleccionado pagar con cheque.");
                break;
            case "debito":
            case "débito": // Por si escriben la tilde
                console.log("🏧 Has seleccionado pagar con tarjeta de débito.");
                break;
            default:
                console.log("❌ Método de pago no válido.");
        }
    } finally {
        // Cerramos la terminal para que el programa finalice correctamente
        rl.close();
    }
}

// Ejecutamos la función
iniciarCompra();