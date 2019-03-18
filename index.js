let http = require("http");

let server = http.createServer((request, response) => {
    switch(request.url)
    {
        case "/":
            response.end(JSON.stringify({
                url: request.url
            }));
            break;
        case "/user":
            response.end("user");
            break;
        default:
            response.statusCode = 404;
            response.end();
    }
});

server.listen(1001);