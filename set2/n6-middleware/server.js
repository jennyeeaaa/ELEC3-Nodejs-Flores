/*
Jenny Flores
IV-BSIT C
ELEC 3 - N6 Middleware and API Testing
*/

const http = require("http");

let students = [
    { id: 1, name: "Jenny Flores", course: "BSIT", year: 4 },
    { id: 2, name: "Maria Santos", course: "BSIT", year: 3 },
    { id: 3, name: "John Reyes", course: "BSIT", year: 2 }
];

// Middleware 1: Logger
function logger(req, res, next) {
    const date = new Date().toLocaleString();
    console.log(`${req.method} ${req.url} - ${date}`);
    next();
}

// Middleware 2: JSON Content-Type
function jsonHeader(req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
}

// Run middleware
function runMiddleware(req, res) {
    logger(req, res, () => {
        jsonHeader(req, res, () => {
            handleRequest(req, res);
        });
    });
}

// API routes
function handleRequest(req, res) {
    const url = new URL(req.url, "http://localhost:8002");
    const id = Number(url.pathname.split("/")[2]);

    // GET all students
    if (req.method === "GET" && url.pathname === "/students") {
        res.statusCode = 200;
        res.end(JSON.stringify(students));
    }

    // GET student by ID
    else if (req.method === "GET" && url.pathname.startsWith("/students/")) {
        const student = students.find(s => s.id === id);

        if (student) {
            res.statusCode = 200;
            res.end(JSON.stringify(student));
        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ message: "Student not found" }));
        }
    }

    // POST new student
    else if (req.method === "POST" && url.pathname === "/students") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            const newStudent = JSON.parse(body);
            newStudent.id = students.length
                ? Math.max(...students.map(s => s.id)) + 1
                : 1;

            students.push(newStudent);

            res.statusCode = 201;
            res.end(JSON.stringify({
                message: "Student added successfully",
                student: newStudent
            }));
        });
    }

    // PUT update student
    else if (req.method === "PUT" && url.pathname.startsWith("/students/")) {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            const student = students.find(s => s.id === id);

            if (student) {
                const updatedStudent = JSON.parse(body);

                student.name = updatedStudent.name;
                student.course = updatedStudent.course;
                student.year = updatedStudent.year;

                res.statusCode = 200;
                res.end(JSON.stringify({
                    message: "Student updated successfully",
                    student
                }));
            } else {
                res.statusCode = 404;
                res.end(JSON.stringify({ message: "Student not found" }));
            }
        });
    }

    // DELETE student
    else if (req.method === "DELETE" && url.pathname.startsWith("/students/")) {
        const index = students.findIndex(s => s.id === id);

        if (index !== -1) {
            const deletedStudent = students.splice(index, 1);

            res.statusCode = 200;
            res.end(JSON.stringify({
                message: "Student deleted successfully",
                student: deletedStudent[0]
            }));
        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ message: "Student not found" }));
        }
    }

    // Unknown route
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "Route not found" }));
    }
}

const server = http.createServer((req, res) => {
    runMiddleware(req, res);
});

server.listen(8002, () => {
    console.log("N6 Middleware API is running at http://localhost:8002");
});