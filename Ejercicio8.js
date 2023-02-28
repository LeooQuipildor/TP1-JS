let numero = parseInt(prompt("Ingrese un numero"));


if (!isNaN(numero)) {
    if(numero % 2 === 0 ){
        document.write(`El numero (${numero}) es divisible por 2`);
    }
    else{
        document.write(`El numero (${numero}) NO es divisible por 2`);
    }
}
else {
    document.write("NO ES UN NUMERO")
}