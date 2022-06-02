let { random } = require('./service');

describe(
  'Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada',
  () => {
      random = jest.fn().mockReturnValue(10);
      it('se a função foi executada', () => {
        random();
        expect(random).toHaveBeenCalled();
    });
    it('qual o seu retorno', () => {
      expect(random()).toBe(10);
    });
    it('quantas vezes foi chamada', () => {
        random();
      expect(random).toHaveBeenCalledTimes(3);
    });
  }
);
