# N5 - HTTP Methods and REST API

*Name:* Jenny Flores  
*Section:* IV-BSIT C  
*Course:* ELEC 3 - Node.js

## Description
A simple REST API using Node.js built-in HTTP module. This API manages student records using an array without a database.

## How to Run
1. Open the project folder in VS Code.
2. Open the terminal.
3. Run:

   node server.js

4. The server will run at http://localhost:8001.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /students | Get all students |
| GET | /students/:id | Get a student by ID |
| POST | /students | Add a new student |
| PUT | /students/:id | Update a student |
| DELETE | /students/:id | Delete a student |

## Sample JSON Body

{
  "name": "Ana Cruz",
  "course": "BSIT",
  "year": 4
}