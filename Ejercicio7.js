let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));
let numero3 = parseInt(prompt("Ingrese el tercer numero"));

if (!isNaN(numero1 && numero2 && numero3)) {
    if (numero1 > numero2 && numero1 > numero3) {
        document.write(`El numero (${numero1}) es mayor a (${numero2}) y (${numero3})`);
    }
    else if (numero2 > numero1 && numero2 > numero3) {
        document.write(`El numero (${numero2}) es mayor a (${numero1}) y (${numero3})`);
    }
    else if (numero3 > numero1 && numero3 > numero2) {
        document.write(`El numero (${numero3}) es mayor a (${numero1}) y (${numero2})`);
    } else {
        document.write("Los numeros son iguales");
    }
}
else {
    document.write("NO ES UN NUMERO")
}