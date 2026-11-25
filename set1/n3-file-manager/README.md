# N3 - File Manager

## Description
A simple command-line File Manager built using Node.js built-in modules fs and path. It allows users to create, read, update, delete, and list text files.

## Features
- Create text files
- Read file contents
- Update files by appending content
- Delete text files
- List files with their full path, filename, extension, and content
- Handle missing files without crashing

## Files
- `index.js` – Contains the file manager program.
- `files/` – Stores the text files created by the program.
- `notes.txt`
- `message.txt`
- `diary.txt`

## How to Run

Open the project terminal and use these commands:

Create:
node set1/n3-file-manager/index.js create notes.txt "Hello World"

Read:
node set1/n3-file-manager/index.js read notes.txt

Update:
node set1/n3-file-manager/index.js update notes.txt " New content"

Delete:
node set1/n3-file-manager/index.js delete notes.txt

List:
node set1/n3-file-manager/index.js list

## Error Handling
The program displays an error message when trying to read or delete a file that does not exist.