const reverseString = (string = "Nghia") => {
    const array = string.split("");
    let reverseStr = "";
    while(array.length > 0) {
        reverseStr += array.pop();
    }
    return reverseStr;
}

export {reverseString}