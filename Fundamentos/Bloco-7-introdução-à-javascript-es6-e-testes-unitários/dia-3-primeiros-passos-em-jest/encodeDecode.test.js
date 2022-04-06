const { encode, decode } = require("./encodeDecode");

describe("teste de encode e decode", () => {
  it("verifica se encode e decode são funções", () => {
    expect(typeof decode).toEqual("function");
    expect(typeof encode).toEqual("function");
  });

  it("2. Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;", () => {
    expect(encode("aeiou")).toEqual("12345");
  });

  it("2. Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;", () => {
    expect(decode("12345")).toEqual("aeiou");
  });
});

it("2. Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;", () => {
  expect(encode("aeiouqwer")).toEqual("12345qw2r");
});

it("2. Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;", () => {
  expect(encode("aeiou")).toHaveLength(5);
  expect(decode("12345")).toHaveLength(5);
});
