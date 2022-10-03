"use strict";
const unidades = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(valor, unidade, conversao) {
    const fromIndex = unidades.indexOf(conversao);
    const toIndex = unidades.indexOf(conversao);
    const exponent = (toIndex - fromIndex);
    return valor * Math.pow(10, exponent);
}
