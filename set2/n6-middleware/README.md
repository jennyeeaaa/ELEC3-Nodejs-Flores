# N6 - Middleware and API Testing

*Name:* Jenny Flores  
*Section:* IV-BSIT C  
*Course:* ELEC 3 - Node.js

## Description
A simple REST API using Node.js built-in HTTP module. It manages student records using an array without a database.

## Middleware Used

1. *Logger Middleware* – Records the HTTP method, request URL, and date/time of every request.
2. *JSON Header Middleware* – Sets the Content-Type header to application/json.

Both middleware functions call next() to continue processing the request.

## How to Run

1. Open the project folder in VS Code.
2. Open the terminal.
3. Run:

   node server.js

4. The server will run at http://localhost:8002.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /students | Get all students |
| GET | /students/:id | Get a student by ID |
| POST | /students | Add a new student |
| PUT | /students/:id | Update a student |
| DELETE | /students/:id | Delete a student |

## Testing
All API endpoints were tested using Thunder Client. Screenshots of the responses and terminal logger are included in the screenshots folder.

## Expected Results
- GET requests return student records.
- POST requests add a new student.
- PUT requests update an existing student.
- DELETE requests remove a student.
- The logger middleware displays each request in the terminal.