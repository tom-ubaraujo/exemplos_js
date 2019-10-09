function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = "";
    result = "The " + myNoun + " was so " + myAdjective + " and yet, able to " + myVerb + " very " + myAdverb;
    // Your code above this line
    return result;
}
  
// Change the words here to test your function
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("cat", "little", "hit", "slowly"));
console.log(wordBlanks("", "", "", ""));