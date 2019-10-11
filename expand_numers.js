function expandedForm(num) {
  var digits = num.toString(); //trabalhar com o número em formato String
  var output = []; //criar um array que vai compor a msg de saida

  for (var i = 0; i < digits.length; i++) {
    //o loop percorre a quantidade de digitos que o numero tem
    if (digits[i] > 0) {
      var zeros = "";
      for (var z = digits.length - i - 1; z > 0; z--) {
        zeros += "0";
      }
      output.push(Number(digits[i] + zeros));
    }
  }
  return output.join(" + ");
}
console.log(expandedForm(7304));
