/*
Full Name: Jenny Flores
Section: IV-BSIT C
Activity: ELEC 3 - N3 File Manager
*/

const fs = require("fs");
const path = require("path");

// Folder where text files will be stored
const filesDirectory = path.join(__dirname, "files");

// Create the files folder if it does not exist
if (!fs.existsSync(filesDirectory)) {
    fs.mkdirSync(filesDirectory);
}

// Get command-line arguments
const args = process.argv.slice(2);

const command = args[0];
const fileName = args[1];

// Create a file
function createFile() {
    const content = args.slice(2).join(" ");
    const filePath = path.join(filesDirectory, fileName);

    if (!fileName || !fileName.endsWith(".txt")) {
        console.log("Error: Please provide a valid .txt filename.");
        return;
    }

    if (fs.existsSync(filePath)) {
        console.log("Error: File already exists.");
        return;
    }

    fs.writeFileSync(filePath, content);
    console.log(`File created successfully: ${fileName}`);
}

// Read a file
function readFile() {
    const filePath = path.join(filesDirectory, fileName);

    if (!fs.existsSync(filePath)) {
        console.log("Error: File not found.");
        return;
    }

    const content = fs.readFileSync(filePath, "utf8");
    console.log(`Content of ${fileName}:`);
    console.log(content);
}

// Update a file by appending content
function updateFile() {
    const content = args.slice(2).join(" ");
    const filePath = path.join(filesDirectory, fileName);

    if (!fs.existsSync(filePath)) {
        console.log("Error: File not found.");
        return;
    }

    fs.appendFileSync(filePath, content);
    console.log(`File updated successfully: ${fileName}`);
}

// Delete a file
function deleteFile() {
    const filePath = path.join(filesDirectory, fileName);

    if (!fs.existsSync(filePath)) {
        console.log("Error: File not found.");
        return;
    }

    fs.unlinkSync(filePath);
    console.log(`File deleted successfully: ${fileName}`);
}

// List all files and display their details
function listFiles() {
    const fileNames = fs.readdirSync(filesDirectory);

    if (fileNames.length === 0) {
        console.log("No files found.");
        return;
    }

    fileNames.forEach((name) => {
        const filePath = path.join(filesDirectory, name);
        const content = fs.readFileSync(filePath, "utf8");

        console.log("\n-------------------------");
        console.log(`Full Path: ${filePath}`);
        console.log(`File Name: ${path.basename(filePath)}`);
        console.log(`Extension: ${path.extname(filePath)}`);
        console.log(`Content: ${content}`);
    });
}

// Execute the selected command
switch (command) {
    case "create":
        createFile();
        break;

    case "read":
        readFile();
        break;

    case "update":
        updateFile();
        break;

    case "delete":
        deleteFile();
        break;

    case "list":
        listFiles();
        break;

    default:
        console.log("Unknown command.");
        console.log("Available commands: create, read, update, delete, list");
}