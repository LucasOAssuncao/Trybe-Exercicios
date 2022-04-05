const myRemove = require('./myRemove');

describe('testa a função myRemove', () => {
    it('Verifica se a chamada myRemove retorna o array esperado', () => {
        expect(myRemove([1,2,3,4],3)).toEqual([1,2,4]);
        expect(myRemove([1,2,3,4],3)).not.toEqual([1,2,3,4]);
        expect(myRemove([1,2,3,4],5)).toEqual([1,2,3,4]);
    })
})