const unidades = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

function convert(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = unidades.indexOf(fromUnit);
    const toIndex = unidades.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent);
}