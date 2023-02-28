let frase = prompt("Ingresa una palabra o frase");
let vocales = ["a", "e", "i", "o", "u"];
let vocalesEn = [];

for (let i = 0; i < frase.length; i++) {
    let minuscula = frase[i].toLowerCase();
    if (vocales.includes(minuscula) && !vocalesEn.includes(minuscula)) {
        vocalesEn.push(minuscula);
    }
}

document.write(`Las vocales que aparecen en la frase (${frase}) son (${vocalesEn.join(", ")})`);