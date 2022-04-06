const myFizzBuzz = require('./myFizzBuzz');

describe('testa a função myFizzBuzz', () =>{
    it('verifica, se retorna o valor correto', () =>{
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(9)).toBe('fizz');
        expect(myFizzBuzz(25)).toBe('buzz');
        expect(myFizzBuzz(11)).toBe(11);
        expect(myFizzBuzz('a')).toBe(false);
    })
})