const caesarCipher = (string, shiftFactor) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let caesarCipherString = "";
  for (let index = 0; index < string.length; index++) {
    const currentChar = string[index];
    if (alphabet.includes(currentChar.toLowerCase())) {
      const indexOfCurrentCharInAlphaBet = alphabet.indexOf(currentChar.toLowerCase());
      let shiftFactorIndex;
      if (indexOfCurrentCharInAlphaBet + shiftFactor >= alphabet.length) {
        shiftFactorIndex =
          indexOfCurrentCharInAlphaBet + shiftFactor - alphabet.length;
      } else {
        shiftFactorIndex = indexOfCurrentCharInAlphaBet + shiftFactor;
      }
      
      if(currentChar === currentChar.toUpperCase()) {
        caesarCipherString += alphabet[shiftFactorIndex].toUpperCase();
      }
      else {
        caesarCipherString += alphabet[shiftFactorIndex];
      }
      
    } else {
      caesarCipherString += currentChar;
    }
  }

  return caesarCipherString;
};

export { caesarCipher };
