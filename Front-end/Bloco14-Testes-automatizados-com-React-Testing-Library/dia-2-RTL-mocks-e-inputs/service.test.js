let { random, functionOne, functionTwo, functionThree, fetch } = require('./service');

describe('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
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
  it('testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
    random = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(random(10, 5)).toBe(2);
    expect(random).toHaveBeenCalled();
    expect(random(10, 5)).not.toBe(2);
  });
  it('testando se a função com 3 parâmetros', () => {
    random = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(random(10, 10, 10)).toBe(1000);
    expect(random).toHaveBeenCalled();
    expect(random(3, 3, 2)).toBe(18);
    expect(random).toHaveBeenCalledTimes(2);
  });
  it('testando se retorna o dobro', () => {
    random.mockReset();
    expect(random).toHaveBeenCalledTimes(0);

    random = jest.fn().mockImplementation((a) => a * 2);
    expect(random(5)).toBe(10);
    expect(random).toHaveBeenCalledTimes(1);
  });
});

describe('testa implementações nas funções', () => {
  it('mock para lowercase', () => {
    functionOne = jest.fn().mockImplementation((a) => a.toLowerCase());
  expect(functionOne('TICO')).toEqual('tico');
});
it('mock para retornar ultima letra', () => {
  functionTwo = jest.fn().mockImplementation((a) => a.charAt(a.length - 1));
  expect(functionTwo('tico')).toEqual('o');
});
it('mock para retornar três strings concatenadas', () => {
  functionThree = jest.fn().mockImplementation((a, b, c) => a.concat(b, c));
  expect(functionThree('tico', 'tuco', 'taco')).toEqual('ticotucotaco');
});
it('restaura a primeira função', () => {
  expect(functionOne('tico')).toEqual('TICO');
});
});

describe('testando fetch',() => {
  fetch = jest.fn();
  it('testando o resolve da promisse para sucesso', async  () => {
    fetch.mockResolvedValue('ok');
    await expect(fetch()).resolves.toEqual('ok');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('testando o resolve da promisse para falha', async  () => {
    fetch.mockReset();
    fetch.mockRejectedValue('fail');
    await expect(fetch()).rejects.toEqual('fail');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
