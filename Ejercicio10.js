let numero = parseInt(prompt("Ingrese un numero"));
let mensaje = `El numero (${numero}) es divisible por `

let divisiblePor2 = numero % 2 === 0;
let divisiblePor3 = numero % 3 === 0;
let divisiblePor5 = numero % 5 === 0;
let divisiblePor7 = numero % 7 === 0;

if (!isNaN(numero)) {
    if (divisiblePor2 || divisiblePor3 || divisiblePor5 || divisiblePor7) {
        document.write(`El numero (${numero}) es divisible por 2, 3, 5 o 7`)
    } else {
        document.write(`El número ${numero} NO es divisible por 2, 3, 5 ni 7`);
    }
}
else {
    document.write("NO ES UN NUMERO")
}