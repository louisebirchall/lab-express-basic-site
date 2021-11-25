const express = require("express");
const app = express();

app.use(express.static("public"));

// localhost:8080/about
app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

// localhost:8080
app.get("/home", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

// localhost:8080/works
app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.listen(8080, () => console.log("I'm listening on port 8080"));
