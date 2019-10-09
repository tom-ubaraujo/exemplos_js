// Kata: 546. Return a number sorted by the digits:
// ex: 2681 --> 1268

function descendingOrder(n){
    return parseInt((n.toString().split('').sort().join('')));
}
console.log(descendingOrder(572));
console.log(descendingOrder(2681));