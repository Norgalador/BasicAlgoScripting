// Reverse the provided string and return the reversed string.

// For example, "hello" should become "olleh".

function reverseString(str) {
    let newString = "";
    for (let char = str.length-1; char >=0; char--){
      newString += str[char];
    }
    return newString;
  }
  
  reverseString("hello");