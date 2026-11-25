/*
Jenny Flores
IV-BSIT C
ELEC 3 - N2 Node.js Modules
*/

// Import custom modules
const operations = require("./operations");
const formatResult = require("./formatter");

// Import built-in module
const os = require("os");

// Get command-line arguments
const args = process.argv.slice(2);

const operation = args[0];
const numbers = args.slice(1).map(Number);

// Check if operation is provided
if (!operation) {
    console.log("Error: Please provide an operation.");
    process.exit(1);
}

// Check if the operation is valid
const validOperations = [
    "add",
    "subtract",
    "multiply",
    "divide",
    "average"
];

if (!validOperations.includes(operation)) {
    console.log(`Error: Unknown operation "${operation}".`);
    process.exit(1);
}

// Check the number of inputs
if (numbers.length < 2 || numbers.some(Number.isNaN)) {
    console.log("Error: Please provide at least two valid numbers.");
    process.exit(1);
}

// Arithmetic operations require exactly two numbers
if (operation !== "average" && numbers.length !== 2) {
    console.log("Error: This operation requires exactly two numbers.");
    process.exit(1);
}

try {
    let result;

    switch (operation) {
        case "add":
            result = operations.add(numbers[0], numbers[1]);
            break;

        case "subtract":
            result = operations.subtract(numbers[0], numbers[1]);
            break;

        case "multiply":
            result = operations.multiply(numbers[0], numbers[1]);
            break;

        case "divide":
            result = operations.divide(numbers[0], numbers[1]);
            break;

        case "average":
            result = operations.average(numbers);
            break;
    }

    console.log(formatResult(operation, numbers, result));
    console.log(`Operating System: ${os.platform()}`);

} catch (error) {
    console.log(`Error: ${error.message}`);
}