function encode(string) {
    //Referencia do site que aprendi o replace e o /g (serve para selecionar todos os elementos daquele tipo)
    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    string = string.replace(/a/g, '1');
    string = string.replace(/e/g, '2');
    string = string.replace(/i/g, '3');
    string = string.replace(/o/g, '4');
    string = string.replace(/u/g, '5');
    return string;
    }
    
    function decode(string) {
    //Referencia do site que aprendi o replace e o /g (serve para selecionar todos os elementos daquele tipo)
    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    string = string.replace(/1/g, 'a');
    string = string.replace(/2/g, 'e');
    string = string.replace(/3/g, 'i');
    string = string.replace(/4/g, 'o');
    string = string.replace(/5/g, 'u');
    return string;
    } 
    module.exports = {
        encode,
        decode,
    };