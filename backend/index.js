const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parser za JSON podatke
app.use(bodyParser.json());

app.get("/api/hello", (request, response) => {
    response.send("Pozdrav");
});

app.listen(port, function () {
    console.log('Node app is running on port ' + port);
});