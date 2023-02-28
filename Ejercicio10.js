let numero = parseInt(prompt("Ingrese un numero"));


if (!isNaN(numero)) {
    if (numero % 2 === 0) {
        document.write(`El numero (${numero}) es divisible por 2`);
    }
    else if (numero % 3 === 0) {
        document.write(`El numero (${numero}) es divisible por 3`);
    }
    else if (numero % 5 === 0) {
        document.write(`El numero (${numero}) es divisible por 5`);
    }
    else if (numero % 7 === 0) {
        document.write(`El numero (${numero}) es divisible por 7`);
    } else{
        document.write(`El (${numero}) no es divisible ni por 2, 3, 5 y 7`)
    }
}
else {
    document.write("NO ES UN NUMERO")
}