let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));

if (!isNaN(numero1 && numero2)) {
    if(numero1 > numero2){
        document.write(`El numero (${numero1}) es mayor a (${numero2})`);
    }
    else if(numero2>numero1){
        document.write(`El numero (${numero2}) es mayor a (${numero1})`);
    }else{
        document.write("Los numero son iguales");
    }
}
else {
    document.write("NO ES UN NUMERO")
}