// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
    const newStr = str.split(" ");
    const updatedStr = [];
    for (let string in newStr){
        updatedStr[string] = newStr[string][0].toUpperCase() + newStr[string].slice(1).toLowerCase();
    }
    return updatedStr.join(" ");
}

titleCase("I'm a little tea pot");