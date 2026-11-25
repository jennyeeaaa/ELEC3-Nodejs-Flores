/*
Jenny Flores
IV-BSIT C
ELEC 3 - N2 Node.js Modules
*/

// Format the calculator result
function formatResult(operation, numbers, result) {
    const symbols = {
        add: "+",
        subtract: "-",
        multiply: "x",
        divide: "/"
    };

    if (operation === "average") {
        return `Average of ${numbers.join(", ")} = ${result}`;
    }

    const expression = numbers.join(` ${symbols[operation]}` );

    return `${expression} = ${result}`;
}

// Export the formatter function
module.exports = formatResult;
