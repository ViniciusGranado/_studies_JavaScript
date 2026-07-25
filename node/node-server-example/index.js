const { createServer } = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
    req.on("error", (err) => {
        console.log(err);

        res.statusCode = 400;
        res.end();

        return;
    })

    res.on("error", (err) => {
        console.log(err);
    })

    if (req.method === "GET") {
        if (req.url === "/") {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end('Hello World');

            return;
        }

        if (req.url === "/users") {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify([
                {id: 1, name: "John Doe"},
                {id: 2, name: "Mary Jane"},
            ]))

            return;
        }
    }

    if (req.method === "POST") {
        if (req.url === "/users") {
            let body = [];

            req.on("data", (chunk) => {
                body.push(chunk);
            })
            .on("end", () => {
                body = Buffer.concat(body).toString();
                res.end(body);

                console.log(body);
            })

            return;
        }
    }

    res.statusCode = 404;
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});