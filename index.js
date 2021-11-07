const express = require("express");
const app = express();
const server = require("http").Server(app);
let toaster = require("express-toastr");

app.use(express.static("public"));
app.use(toaster());

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/views/index.html");
});

//start the server
server.listen(3305);
