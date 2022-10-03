const unidadess = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];

function convert(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = unidadess.indexOf(fromUnit);
    const toIndex = unidadess.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(1000, exponent);
}