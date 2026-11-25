/*
Jenny Flores
IV-BSIT C
ELEC 3 - N2 Node.js Modules
*/

// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

// Average
function average(numbers) {
    const total = numbers.reduce((sum, number) => sum + number, 0);
    return total / numbers.length;
}

// Export all functions
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    average
};