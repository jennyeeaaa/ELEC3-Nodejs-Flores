# N2 - Node.js Modules: Modular Calculator

## Description
This project is a command-line calculator that demonstrates the use of Node.js modules. It performs basic arithmetic operations using custom modules and a built-in module.

## Features
- Addition
- Subtraction
- Multiplication
- Division
- Average
- Division by zero error handling
- Unknown operation error handling

## Project Files
- index.js - Main program that accepts command-line arguments and runs the calculator.
- operations.js - Contains the arithmetic functions.
- formatter.js - Formats the calculator results.
- os - Built-in Node.js module used to display the operating system platform.

## How to Run

Open the project terminal and run:

node set1/n2-calculator/index.js add 12 8

Replace add with subtract, multiply, divide, or average to use the other operations.

### Examples

node set1/n2-calculator/index.js add 12 8
node set1/n2-calculator/index.js subtract 12 8
node set1/n2-calculator/index.js multiply 12 8
node set1/n2-calculator/index.js divide 12 8
node set1/n2-calculator/index.js average 10 20 30

## Error Handling

The program displays an error message when dividing by zero or entering an unknown operation