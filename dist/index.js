"use strict";
function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    const aprovado = media >= 6;
    return {
        media,
        aprovado
    };
}
const resultado = calcularMedia(7, 8);
console.log(resultado);
