// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
    let stringLength = 0;
    let longestString = 0;
    for (let char = 0; char < str.length; char++){
      if (str[char] === " "){
        if (stringLength > longestString){
          longestString = stringLength;
        }
        stringLength = 0;
      } else {
        stringLength++
      }
    }
    if (stringLength > longestString){
      longestString = stringLength;
    }
    return longestString;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");