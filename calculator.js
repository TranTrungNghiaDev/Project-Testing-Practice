const calculator = {
    add(a = 1, b = 1) {
        return a + b;
    },
    subtract(a = 1, b = 1) {
        return a - b;
    },
    divide(a = 1, b = 1) {
        if(b === 0) return
        return a / b; 
    },
    multiply(a = 1, b = 1) {
        return a * b;
    }
}

export {calculator}