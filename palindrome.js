// Palindrome checker freecodecamp.org challenge
// The regex part takes away the non-alphanumerical and special characters.

function palindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").split(' ').join('');
    if (str == str.split('').reverse().join('')){
      return true;
    }
    return false;
  }
  console.log(palindrome("1 eye for of 1 eye."));