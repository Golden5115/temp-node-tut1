const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Our HomePage");
  }
  if (req.url === "/about") {
    res.end("here is our about page");
  }
  res.end(`<h1>Ooops!</h1>
    <p>We can't seem to find the page you're loo for </p> 
    <a href='/'>back home</a>`);
});

server.listen(5000);