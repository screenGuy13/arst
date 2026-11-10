const http = require("node:http");

const PORT = process.env.PORT || 13520;

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>It works</title>
  </head>
  <body>
    <main>
      <h1>Your site is running</h1>
      <p>Hello from your Node.js server.</p>
    </main>
  </body>
</html>`);
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
