function addBinary(a, b) {
  var soma = a + b;
  var binary = "";
  while (soma > 0) {
    binary += soma % 2;
    soma = Math.floor(soma / 2);
  }
  return binary;
}
console.log(addBinary(1, 2)); //return 11
console.log(addBinary(200, 55)); //return 11111111

/*

Outra forma de fazer seria:

return soma.toString(2);

O método toString, com parâmetro 2,
converte o número para binário(base 2)
e retorna esse número como string.
Dessa forma não seria necessário fazer cálculos.

*/
