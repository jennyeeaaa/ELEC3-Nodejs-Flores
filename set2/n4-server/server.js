/*
Jenny Flores
IV-BSIT C
ELEC 3 - N4 HTTP Server
*/

const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    if (req.url === "/") {
        res.statusCode = 200;
        res.end(`
            <h1>Welcome to My HTTP Server!</h1>
            <p>Jenny Flores</p>
            <p>IV-BSIT C</p>
        `);
    } 
    else if (req.url === "/about") {
        res.statusCode = 200;
        res.end(`
            <h1>About Me</h1>
            <p>I am a fourth-year BSIT student.</p>
        `);
    } 
    else if (req.url === "/contact") {
        res.statusCode = 200;
        res.end(`
            <h1>Contact</h1>
            <p>09123456780</p>
            <p>Bugallon C</p>
        `);
    } 
    else {
        res.statusCode = 404;
        res.end("<h1>404 - Page not found</h1>");
    }
});

server.listen(8000, () => {
    console.log("Server is running at http://localhost:8000");
});